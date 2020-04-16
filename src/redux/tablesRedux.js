import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const UPDATE_TABLE_STATUS = createActionName('UPDATE_TABLE_STATUS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const updateTableStatus = (id, status, order) => ({ payload: {id, status, order}, type: UPDATE_TABLE_STATUS });

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const axiosURL = `${api.url}/api/${api.tables}`;
    Axios
      .get(axiosURL)
      .then(res => dispatch(fetchSuccess(res.data)))
      .catch(err => dispatch(fetchError(err.message || true)));
  };
};

export const updateTable = (id, newStatus, order) => {
  return (dispatch, getState) => {
    const axiosURL = `${api.url}/api/${api.tables}/${id}`;
    Axios
      .patch(axiosURL, { status: newStatus, order: order })
      .then(() => dispatch(updateTableStatus(id, newStatus, order)))
      .catch(err => dispatch({ type: 'UPDATE_TABLE_ERROR', error: err.message }));
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case UPDATE_TABLE_STATUS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: statePart.data.map(table => 
          table.id === action.payload.id ? 
            { id: action.payload.id,
              status: action.payload.status, 
              order: action.payload.order,
            } 
            : table),
      };
    }
    default:
      return statePart;
  }
}
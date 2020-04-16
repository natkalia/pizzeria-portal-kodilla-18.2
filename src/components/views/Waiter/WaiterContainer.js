import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, updateTable } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => 
    dispatch(fetchFromAPI()),
  updateTableStatus: (id, newStatus, verifiedOrder) => 
    dispatch(updateTable(id, newStatus, verifiedOrder)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
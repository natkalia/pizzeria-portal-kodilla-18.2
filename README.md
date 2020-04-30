# Development

## Local URLs accesible thanks to `yarn start` 

- http://localhost:3000 - administration panel (address served by 'webpack-dev-server') (view with live refreshing)
- http://localhost:3131 - pizzeria page for customers
- http://localhost:3131/api - URL for project API
- http://localhost:3131/api/db - to see database in API
- http://localhost:3131/panel - administration panel after running 'yarn start' (no live refreshing, view status as of running 'yarn start')

## TODO's / known bugs
- [ ] add cancel buttons to new order, new booking, new event
- [ ] add redux and API communication to all other views than Waiter 
- [ ] upgrade dashboard - not intuitive solution now, and add more statistics calculated dynamically
- [ ] change implementation for status change to new order (ordered) in Waiter and TabelsRedux to
make it work once form is submitted
- [ ] refactor/shorten repeating code in Tables (row.tableX)
- [ ] note ```const axiosURL = `${api.url}/api/${api.tables}``` in tablesRedux.js: I added `api` and this will be probably necessary also for other cases in the future, think if it is ok orif I could refactor this differently for all cases at once

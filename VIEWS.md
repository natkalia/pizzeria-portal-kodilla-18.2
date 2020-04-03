# Dashboard

`/`
  - today's orders statistics (both remote and local orders)
  - list of reservations (bookings) and events scheduled for today

# Login

`/login`
  - login and password fields
  - login button (currently: link to dashboard, in the future: implementation of login on the backend side)

# Tables availability view

`/tables`
  - date and time selection
  - table with list of reservations (bookings) and events
    - each column = 1 table
    - each row = 30 minutes
    - is supposed to resemble the view of the week in Google's calendar, where there are different tables (stoliki) in the columns instead of days
    - it should look like Google calendar week view, where there are different tables (stoliki) in the columns instead of days
    - after clicking on a reservation (booking) or event, we should be redirected to the details page

`/tables/booking/:id`
  - contains all reservation (booking) data
  - it allows to edit and save changes for existing reservation (booking)

`/tables/booking/new`
  - similar to the above, but without initial data

`/tables/events/:id`
  - similar to the above, but for events

`/tables/events/new`
  - similar to the above, but for events and without initial data

# Waiter view

`/waiter`
- table (tabela)
    - in rows - tables (stoliki)
    - in columns - various types of data (status, time from last activity)
    - in last column - available actions for given table (stolik)

`/waiter/order/new`
  - table (stolik) number (editable - client may change table)
  - products menu
  - product options for the selected product
  - order (ordered products with options and price)
  - order amount

`/waiter/order/:id`
  - as above (with some initial data)

# Kitchen view

`/kitchen`
  - displays a list of orders in the order they were placed
  - the list must include:
    - table number (or remote order number)
    - complete data about ordered dishes
  - on the list there must be an option to change order status to order completed
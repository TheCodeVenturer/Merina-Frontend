# Hi, There

## Challanges in Frontend

### Application Designed using this flow
1. Designed Left Side Bar
2. Next Designed NavBar
3. Next Designed About Section
4. Next Designed Activity Section
5. > #### Then Designed Analytics sectin
   > * Designed OverAll Analytics
   > * Designed Revenue Chart
   > * Designed MicroPayments
   > * Designed Monthly Subscriber
   > * Designed Yearly Subscriber
   > * Designed Top stories in last 30 days
   > * Designed Recent Activities
   > * Designed Top user in last 30 days
   > * Designed User by Location


### Challanges in the Above Flow:-
1. while Designing sideBar, I was using the Icon Components as value of key icon inside a object of all buttons, but it created a problem as it take time initialise those icon key which gives error when using map as it shows that icon has not loaded yet

5. > I was Very New to Chart.js so it too much challenging for me to mimic the exact design, so tackled it by completing the design from one side

    >First rendered the charts with all defaults copying from PrimeReact

    > Then first changed the BackGround and Hover Colour

    > Then designed the tooltip, it's teeth, modified text inside it using callbacks, aligned it

    >If the bar was rounded on top then changed it as given

    >In Line charts the data was in decimals so changed labels, accordingly so that only integer part shows up 

    >The Main problem arised with the yearly subscriber Line Chart as there might be many points in a year but display the year only and found the solution with chartjs-adapter-date-fns package

    >Next the first label was not visible in the Graph

    >So set scales bounds to "ticks" to include the first lavel

    >The Major Problem while designing this arised that which package to use as PrimeReact also have no support for geo maps and found chartjs-chart-geo to render the <a href="./app/components/analytics/userbyLocation.jsx">Map </a>


## Challenges in Backend

### Workflow of Backend
1. Designed Passport-local support with serializing and deserializing
2. Designed Passport-Google-oauth2.0 support
3. NodeMailer Setup for sending mails
4. Designed Passport-Magic Login setup

### Challenges in the Above Flow
1. 
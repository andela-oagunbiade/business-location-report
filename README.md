# business-location-report

### Requirements
- Nodejs >= 'v7.6.0'
- Postgres server

### Setup
- Clone repo
- Run `npm install`
- Create `.env` with credentials as shown in `.env.sample` file
- Run `npm run db:migrate`
- Run `npm run db:seed`
- Run `npm start`

- Make GET Request `http://localhost:3330/reports/state-government/1` to get
report for the state with id of `1` in the state government table

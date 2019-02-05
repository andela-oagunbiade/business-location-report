# business-location-report
- Proof of concept for generating employee census report based on location

### Environment Requirements
- Nodejs >= 'v7.6.0'
- Postgres server

### Setup
- Clone repo
- Run `npm install`
- Create `.env` with credentials as shown in `.env.sample` file
- Run `npm run db:migrate`
- Run `npm run db:seed`
- Run `npm start`

- Make GET Request `http://localhost:3330/reports/local-government/1` to get
report for the local govermnet with id of `1` in the local government table
- Make GET Request `http://localhost:3330/reports/state-government/1` to get
report for the state with id of `1` in the state government table

* Params for the requests above can be alternated based on seeded data


### Improvement Plan
- Caching of computed results can be done to limit processing time when the data starts to grow

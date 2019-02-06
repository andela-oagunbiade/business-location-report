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
report for the local govermnet with id of `1` in the local government table.

Sample Response:
```json
{
  localGovernment: "Ikeja",
  totalNumOfEmployeesInLocalGovernment: 9150,
  totalNumOfFemaleEmployeesInLocalGovernment: 1700,
  totalNumOfMaleEmployeesInLocalGovernment: 7450
}
```

- Make GET Request `http://localhost:3330/reports/state-government/1` to get
report for the state with id of `1` in the state government table.

Sample Response:
```json
{
  stateGovernment: "Lagos",
  totalNumberOfEmployeesInStateGovernment: 18050,
  totalNumOfFemaleEmployeesInStateGovernment: 3300,
  totalNumOfMaleEmployeesInStateGovernment: 14750,
  breakdown: [
    {
    localGovernment: "Ikeja",
    totalNumOfEmployeesInLocalGovernment: 9150,
    totalNumOfFemaleEmployeesInLocalGovernment: 1700,
    totalNumOfMaleEmployeesInLocalGovernment: 7450
    },
    {
    localGovernment: "Alimosho",
    totalNumOfEmployeesInLocalGovernment: 8900,
    totalNumOfFemaleEmployeesInLocalGovernment: 1600,
    totalNumOfMaleEmployeesInLocalGovernment: 7300
    }
  ]
}
```

- Make GET Request `http://localhost:3330/reports/state-government/1` to get
report for the state with id of `1` in the state government table.

Sample Response:
```json
{
  federalGovernment: "Nigeria",
  totalNumberOfEmployees: 57550,
  totalNumOfFemaleEmployeesInCountry: 7800,
  totalNumOfMaleEmployeesInCountry: 49750,
  breakdown: [
    {
      stateGovernment: "Lagos",
      totalNumberOfEmployeesInStateGovernment: 18050,
      totalNumOfFemaleEmployeesInStateGovernment: 3300,
      totalNumOfMaleEmployeesInStateGovernment: 14750,
      breakdown: [
        {
        localGovernment: "Ikeja",
        totalNumOfEmployeesInLocalGovernment: 9150,
        totalNumOfFemaleEmployeesInLocalGovernment: 1700,
        totalNumOfMaleEmployeesInLocalGovernment: 7450
        },
        {
        localGovernment: "Alimosho",
        totalNumOfEmployeesInLocalGovernment: 8900,
        totalNumOfFemaleEmployeesInLocalGovernment: 1600,
        totalNumOfMaleEmployeesInLocalGovernment: 7300
        }
      ]
    },
    {
      stateGovernment: "Abuja",
      totalNumberOfEmployeesInStateGovernment: 39500,
      totalNumOfFemaleEmployeesInStateGovernment: 4500,
      totalNumOfMaleEmployeesInStateGovernment: 35000,
      breakdown: [
        {
        localGovernment: "Abaji",
        totalNumOfEmployeesInLocalGovernment: 23700,
        totalNumOfFemaleEmployeesInLocalGovernment: 2700,
        totalNumOfMaleEmployeesInLocalGovernment: 21000
        },
        {
        localGovernment: "Garki",
        totalNumOfEmployeesInLocalGovernment: 15800,
        totalNumOfFemaleEmployeesInLocalGovernment: 1800,
        totalNumOfMaleEmployeesInLocalGovernment: 14000
        }
      ]
    }
  ]
}
```

* Params for the requests above can be alternated based on seeded data


### Improvement Plan
- Caching of computed results can be done to limit processing time when the data starts to grow

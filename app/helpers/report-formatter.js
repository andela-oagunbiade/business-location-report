const formatLocalGovernmentBusinessInfo = (info) => {
  let totalNumOfFemaleEmployeesInLocalGovernment = 0
  let totalNumOfMaleEmployeesInLocalGovernment = 0

  info.Businesses.forEach((business) => {
    totalNumOfFemaleEmployeesInLocalGovernment += business.numberOfFemale
    totalNumOfMaleEmployeesInLocalGovernment += business.numberOfMale
  })

  return {
    localGovernment: info.name,
    totalNumOfEmployeesInLocalGovernment: totalNumOfFemaleEmployeesInLocalGovernment + totalNumOfMaleEmployeesInLocalGovernment,
    totalNumOfFemaleEmployeesInLocalGovernment: totalNumOfFemaleEmployeesInLocalGovernment,
    totalNumOfMaleEmployeesInLocalGovernment: totalNumOfMaleEmployeesInLocalGovernment
  }
}


const formatStateGovernmentBusinessInfo = (info, name) => {
  let totalNumOfFemaleEmployeesInStateGovernment = 0
  let totalNumOfMaleEmployeesInStateGovernment = 0

  const formattedInfo = info.map((row) => {
    const formattedLocalGovernmentInfo = formatLocalGovernmentBusinessInfo(row)

    totalNumOfFemaleEmployeesInStateGovernment += formattedLocalGovernmentInfo.totalNumOfFemaleEmployeesInLocalGovernment
    totalNumOfMaleEmployeesInStateGovernment += formattedLocalGovernmentInfo.totalNumOfMaleEmployeesInLocalGovernment

    return formattedLocalGovernmentInfo
  })

  return {
    stateGovernment: name,
    totalNumberOfEmployeesInStateGovernment: totalNumOfFemaleEmployeesInStateGovernment + totalNumOfMaleEmployeesInStateGovernment,
    totalNumOfFemaleEmployeesInStateGovernment,
    totalNumOfMaleEmployeesInStateGovernment,
    breakdown: formattedInfo
  }
}

const formatFederalGovernmentBusinessInfo = (info, name) => {
  let totalNumOfFemaleEmployeesInCountry = 0
  let totalNumOfMaleEmployeesInCountry = 0

  const formattedInfo = info.map((row) => {
    const formattedStateGovernmentInfo = formatStateGovernmentBusinessInfo(row.LocalGovernments, row.name)

    totalNumOfFemaleEmployeesInCountry += formattedStateGovernmentInfo.totalNumOfFemaleEmployeesInStateGovernment
    totalNumOfMaleEmployeesInCountry += formattedStateGovernmentInfo.totalNumOfMaleEmployeesInStateGovernment

    return formattedStateGovernmentInfo
  })

  return {
    federalGovernment: name,
    totalNumberOfEmployees: totalNumOfFemaleEmployeesInCountry + totalNumOfMaleEmployeesInCountry,
    totalNumOfFemaleEmployeesInCountry,
    totalNumOfMaleEmployeesInCountry,
    breakdown: formattedInfo
  }
}

module.exports = {
  formatLocalGovernmentBusinessInfo,
  formatStateGovernmentBusinessInfo,
  formatFederalGovernmentBusinessInfo
}

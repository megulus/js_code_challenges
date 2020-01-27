

const dayOfProgrammer = (year) => {
  const DAY_NUMBER = 256
  let months
  if (year !== 1918) {
    if (isLeapYear(year)) {
      months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      
    }
    else {
      months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }
  }
  else {
    months = [31, 15, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  }
  let count_days = 0
  let count_months = 0
  while (count_days < DAY_NUMBER) {
    count_days += months[count_months]
    count_months += 1
  }
  const day = count_days > DAY_NUMBER ? DAY_NUMBER - (count_days - months[count_months - 1]) : DAY_NUMBER - count_days
  const month = count_months < 10 ? '0' + count_months : count_months
  return day + '.' + month + '.' + year

  function isLeapYear (year) {
    if (year < 1918) {
      if (year % 4 === 0) return true
    }
    else if (year > 1918) {
      if (year % 400 === 0) return true
      else if (year % 4 === 0 && year % 100 !== 0) return true
    }
    return false
  }
}

console.log('dayOfProgrammer(): ' + dayOfProgrammer(1918))
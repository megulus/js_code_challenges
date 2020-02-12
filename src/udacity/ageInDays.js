/* Given your birthday and the current date, calclate your age 
in days. Compensate for leap days. Assume that the birthday and current
date are correct dates (and no time travel). Simply put, if you were 
born on January 1, 2012 and today's date is January 2, 2012, then 
you are 1 day old.
*/

// Take 1: My blank slate approach.

const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 400 === 0) return true
    if (year % 100 === 0) return false
    return true
  }
  return false
}

const daysInYear = (year) => {
  if (isLeapYear(year)) return 366
  return 365
}

const daysInMonths = (year) => {
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (isLeapYear(year)) months[1] = 29
  return months
}

const getFullYearDays = (year1, year2) => {
  let days = 0
  let fullYear = year1 + 1
  while (fullYear < year2) {
    days += daysInYear(fullYear)
    fullYear += 1
  }
  return days
}

const ageInDaysOne = (m1, d1, y1, m2, d2, y2) => {
  // basic steps: get partial year days, and get full year days
  let days = 0
  if (y2 - y1 === 0) {
    if (m2 - m1 === 0) return d2 - d1
    const months = daysInMonths(y1)
    days += months[m1] - d1
    for (const month of months.slice(m1 + 1, m2)) {
      days += month
    }
    days += d2
    return days
  }
  if (y2 - y1 > 1) days += getFullYearDays(y1, y2)
  // get partial year days for birth year:
  // birth month days - m1, + all days for remaining months in year
  const birthYearMonths = daysInMonths(y1)
  days += (birthYearMonths[m1] - d1)
  for (const month of birthYearMonths.slice(m1 + 1)) {
    days += month
  }
  const currentYearMonths = daysInMonths(y2)
  for (const month of currentYearMonths.slice(0, m2)) {
    days += month
  }
  days += d2
  return days
}


// Take 2: Post Udacity Lesson approach.
// Udacity Steps:
// 0. Don't panic.
// 1. What are the inputs?
// 2. What are the outputs?
// 3. Work through some examples by hand. (This will also generate test cases for the code.)
// 4. Simple mechanical solution
// 5. Don't optimize prematurely! SIMPLE and CORRECT first.

// iteration one: approximation that assumes all months have 30 days
// NEXT STEP: define an approximate daysBetweenDates procedure that would 
// produce the correct results given a correct nextDay procedure
const nextDay = (year, month, day) => {
  if (day < daysInMonth(month, year)) {
    return [year, month, day += 1]
  }
  else {
    if (month < 12) {
      return [year, month += 1, 1]
    }
    else {
      return [year += 1, 1, 1]
    }
  }
}

const daysInMonth = (month, year) => {
  const nonLeap = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const leap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (!isLeapYear(year)) return nonLeap[month - 1]
  return leap[month - 1]
}

const dateIsBefore = (year1, month1, day1, year2, month2, day2) => {
  if (year1 < year2) return true
  if (year1 === year2) {
    if (month1 < month2) return true
    return day1 < day2
  }
  return false
}

const daysBetweenDates = (y1, m1, d1, year2, month2, day2) => {
  let month1 = m1
  let day1 = d1
  let year1 = y1
  let days = 0
  while (dateIsBefore(year1, month1, day1, year2, month2, day2)) {
    const [y, m, d] = nextDay(year1, month1, day1)
    days += 1
    year1 = y
    month1 = m
    day1 = d
  }
  return days
}





// console.log('ageInDaysOne(Jan 1 2018, Jan 2 2018): ' + ageInDaysOne(0, 1, 2018, 0, 2, 2018))
// console.log('ageInDaysOne(Jan 1 2018, Feb 2 2018): ' + ageInDaysOne(0, 1, 2018, 1, 2, 2018))
// console.log('ageInDaysOne(Feb 4 1975, July 12 1980): ' + ageInDaysOne(1, 4, 1975, 6, 12, 1980))
// console.log('ageInDaysOne(Dec 30 2017, Dec 30 2017): ' + ageInDaysOne(11, 30, 2017, 11, 30, 2017))
// console.log('ageInDaysOne(Dec 30 2017, Dec 30 2017): ' + ageInDaysOne(11, 30, 2017, 0, 1, 2018))
// console.log('ageInDaysOne(Dec 30 2017, Dec 30 2017): ' + ageInDaysOne(5, 30, 2017, 5, 30, 2018))
console.log('daysBetweenDates(5, 30, 2017, 5, 30, 2018): ' + daysBetweenDates(2017, 5, 30, 2017, 5, 30))
console.log('daysBetweenDates(2012,1,1,2012,2,28) (ans: 58): ' + daysBetweenDates(2012, 1, 1, 2012, 2, 28))
console.log('daysBetweenDates(2012, 1, 1, 2012, 3, 1) (ans: 60): ' + daysBetweenDates(2012, 1, 1, 2012, 3, 1))
console.log('daysBetweenDates(2011,6,30,2012,6,30) (ans: 366): ' + daysBetweenDates(2011, 6, 30, 2012, 6, 30))
console.log('daysBetweenDates((2011,1,1,2012,8,8) (ans: 585): ' + daysBetweenDates(2011, 1, 1, 2012, 8, 8))
console.log('daysBetweenDates((2011,1,1,2012,8,8) (ans: 36523): ' + daysBetweenDates(1900, 1, 1, 1999, 12, 31))
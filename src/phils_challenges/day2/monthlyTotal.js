// Q4: 20 minutes. Write a function collatefy that, given a bunch of charges 
// at particular timestamps, returns a list of monthly totals.

// collatefy([
//   { time: new Date("2019-12-17T03:24:00", value: 216 },
//   { time: new Date("2019-11-11T03:00:00", value: 4 },
//   { time: new Date("2019-12-14T03:01:00", value: 100 }
// ]) => [{ month: “2019-12”, total: 316 }, { month: “2019-11”, total: 4 }]

// create a hash table { 'YYYY-MM' : total }
// iterate through the array of time stamps
//   for each timestamp, pull out the month and year - this will be the key in the hash table
//   if the key exists in the table already - increase its total (total += value), otherwise create it (total = value)
// iterate through the hash; according to the example, it doesn't seam to matter that the array
// returned has the months in order, so we will iterate through, create objects in form
// { month: 'YYYY-MM', total: 4 }

const collatefy = (arr) => {
  const totalsByMonth = {}
  for (const transaction of arr) {
    const date = transaction['time']
    const year = date.getFullYear()
    const month = 1 + date.getMonth()
    const key = year.toString() + '-' + month.toString()
    if (key in totalsByMonth) {
      totalsByMonth[key] += parseInt(transaction['value'])
    }
    else {
      totalsByMonth[key] = parseInt(transaction['value'])
    }
  }
  const monthlyTotals = []
  for (const monthStr of Object.keys(totalsByMonth)) {
    const monthly = { month: monthStr, total: totalsByMonth[monthStr] }
    monthlyTotals.push(monthly)
  }
  return monthlyTotals
}

const stringfyCollatefy = (arr) => {
  for (const monthTotalObj of arr) {
    console.log('month: ' + monthTotalObj['month'] + ' , total: ' + monthTotalObj['total'])
  }
}



// const collated = collatefy([{ time: new Date("2019-12-17T03:24:00"), value: 216 }, { time: new Date("2019-11-11T03:00:00"), value: 4 }, { time: new Date("2019-12-14T03:01:00"), value: 100 }])
// console.log('monthly totals ' + collatefy([{ time: new Date("2019-12-17T03:24:00"), value: 216 }, { time: new Date("2019-11-11T03:00:00"), value: 4 }, { time: new Date("2019-12-14T03:01:00"), value: 100 }]))
// stringfyCollatefy(collated)
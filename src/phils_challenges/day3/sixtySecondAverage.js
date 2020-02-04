// Write a function initialize that, given a list of numeric data points, returns 
// an object containing aggregation functions.For now, the only aggregation function is 
// avg60, which returns a 60 second average for a given time

// aggregations = initialize([
//   { date: new Date("1995-12-17T03:24:20"), value: 4 },
//   { date: new Date("1995-12-17T03:24:00"), value: 3 },
//   { date: new Date("1995-12-17T03:24:40"), value: 17 }
// ])
// aggregations.avg60(new Date("1995-12-17T03:25:00")) => 8
// aggregations.avg60(new Date("1995-12-17T03:24:30")) => 3.5
// aggregations.avg60(new Date("1995-12-17T03:24:00")) => null

const initialize = (arr) => {
  const data = arr.sort((a, b) => a.date - b.date)
  return {
    avg60: (d) => {
      let sum = 0
      let count = 0
      for (const item of data) {
        const diff = d.getTime() - item.date.getTime()
        if (diff > 0 && diff <= 60000) {
          sum += item.value
          count += 1
        }
      }
      return (sum * 1.0) / count || null
    }
  }
}

// const aggregations = initialize([{ date: new Date("1995-12-17T03:24:20"), value: 4 }, { date: new Date("1995-12-17T03:24:00"), value: 3 }, { date: new Date("1995-12-17T03:24:40"), value: 17 }])
// console.log('aggregations.avg60(new Date("1995-12-17T03:25:00")): ' + aggregations.avg60(new Date("1995-12-17T03:25:00")))
// console.log('aggregations.avg60(new Date("1995-12-17T03:24:30")): ' + aggregations.avg60(new Date("1995-12-17T03:24:30")))
// console.log('aggregations.avg60(new Date("1995-12-17T03:24:00")): ' + aggregations.avg60(new Date("1995-12-17T03:24:00")))
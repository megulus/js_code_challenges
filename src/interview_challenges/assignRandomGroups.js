// totally stumbled on this one in interview; recreating it here as penance

/*
 Write a function to assign groups for A/B testing based on an array of probabilities
 i.e., given an array [0.7, 0.3], we want to return group 0 70% of the time, and
 group 1 30% of the time
 the numbers in the array will add up to 1
*/

/*
Takeaways and insights:
- the approach that worked here was visualizing a number line, where the probabilities
  in the array were added in sequence. I.e., if the input array is [0.7, 0.2, 0.1], 
  visualize a number line: 0 ------ 0.7 --- 0.9 -- 1
- so, when we iterate through these values, each probability "bucket" is the space between the
  value at i and the previous value on the number line. E.g., 
  bucket 0: [0, 0.7] (arr[i] = 0.7)
  bucket 1: [0.7, 0.9] (arr[i] = 0.2)
  bucket 2: [0.9, 1] (arr[i] = 0.1)
  if we generate the random number, say, 0.74, we set our threshold to the number line value of
  previous + the value at i, or 0.7 and determine that our number is not in this bucket. So
  we go to the next bucket, which is 0.7 + 0.2, or 0.9. Our number is in this bucket, so we return
  that bucket number (1).
  We count on our random numbers being uniformly distributed in the range [0, 1), and thus each 
  random number will fall into this particular bucket 0 70% of the time, bucket 1 20% of the time, and
  bucket 2 10% of the time.
*/


const assignGroup = (arr) => {
  const random = Math.random()
  let threshold = 0
  for (let i = 0; i < arr.length; i++) {
    threshold += arr[i]
    if (random <= threshold) return i
  }
}

const runAssignGroup = (arr, numRuns) => {
  const counts = {}
  for (let i = 0; i < numRuns; i++) {
    const group = assignGroup(arr)
    if (!(group in counts)) {
      counts[group] = 1
    }
    else {
      counts[group] += 1
    }
  }
  console.log('group counts: ' + JSON.stringify(counts))
}
 
runAssignGroup([0.7, 0.3], 100)
runAssignGroup([0.7, 0.2, 0.1], 100)
runAssignGroup([0.5, 0.1, 0.2, 0.2], 100)

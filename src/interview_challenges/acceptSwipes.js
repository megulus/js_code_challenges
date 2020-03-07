/*
Given a stream of input, if duplicates arrive within a certain time window of each other, only accept the first one.

For example, if the time window is 5 minutes and you have this stream

"Harry" arrives at 12:01 --> accept
"Sam" arrives at 12:02 --> accept
"Rebecca" arrives at 12:05 --> accept
"Rebecca" arrives at 12:06 --> reject
"Harry" arrives at 12:06 –> accept
"Rebecca" arrives at 12:10 --> accept

Real-world example if candidate is from NYC - metrocard reader accepts a stream of cards and won't let you scan twice within the same 15 minutes.
*/

const initialize = () => {
  const swipes = {}
  return {
    swipe: (name) => {
      const newtime = new Date().getTime()
      if (name in swipes) {
        const oldtime = swipes[name]
        if (newtime - oldtime < 5000) {
          return false
        }
        swipes[name] = newtime
        return true
      }
      else {
        swipes[name] = newtime
        return true
      }
    }
  }
}

// naive sleep function b/c on the spot I couldn't think of
// a better way to do this...
function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

const swipeObj = initialize()
console.log('starting...')
console.log('Harry swiped: ' + swipeObj.swipe('Harry'))
console.log('after Harry')
sleep(1000)
console.log('Sam swiped ' + swipeObj.swipe('Sam'))
console.log('after Sam')
sleep(3000)
console.log('Rebecca first time ' + swipeObj.swipe('Rebecca'))
sleep(1000)
console.log('Rebecca second time ' + swipeObj.swipe('Rebecca'))
console.log('Harry second time: ' + swipeObj.swipe('Harry'))
sleep(4000)
console.log('Rebecca third time ' + swipeObj.swipe('Rebecca'))
  
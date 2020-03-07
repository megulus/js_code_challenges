/*
ELEVATOR BEHAVIOR:

- 3 elevators, n floors
- elevators respond to calls
  - a call means a user pressed "up" or "down" button from any floor between 0 and n - 1
  - from floor 0, only "up" is possible and from n - 1, only "down"
- elevator travels to destination floors (pressed by user once inside elevator)
- if a user presses "up" and then selects a floor below current floor, elevator will continue responding to
  destination floors above (if any) before handling a call below
*/

/*
OBJECTS, INSTANCE VARS, METHODS


1. ElevatorBank Class:

Responsibilities:
- track elevators in a collection
- delegate calls to elevators
  - call method
  - add calls to an elevator's call array
  - determine whether there is a free elevator, and assign it to handle calls
*/



class ElevatorBank {
  constructor(obj = {}) {
    const { numElevators, numFloors } = obj
    this.elevators = {}
    for (let i = 0; i < numElevators; i++) {
      this.elevators[i] = new Elevator({ id: i, numFloors: numFloors })
    }
    this.numFloors = numFloors
    this.numElevators = numElevators || 3
    this.callBacklog = []
  }

  call(floor, direction) {
    // takes an integer floor, string direction "up" || "down"
    // return value: none
    // side effects: modifies an elevator's destinations list
    // handle case where there's no free elevator in necessary direction:
    // - add floor to the call backlog
  }

  handleTick() {
    // move each elevator with a destination queue one floor per tick
    for (const elev of Object.keys(this.elevators)) {
      elev.tick()
    }
  }

}



/*
2. Elevator Class

Responsibilities:
- track current floor
- track direction of travel
- maintain a list of destinations (i.e., ordered)
- when the elevator has completed its current destination list, it emits an event (callback) to tell elevator bank that it's free
- add destinations to its own list via a addDestination method (this is how a user selects a floor)

Assumptions:
- when Elevator class is created, currentFloor will be 0

*/

class Elevator {
  constructor(obj = {}) {
    this.id = obj.id || null
    this.currentFloor = 0
    this.numFloors = obj.numFloors
    this.directionOfTravel = null // values can be null (if elevator free), up or down
    this.destinations = []
    this.deferredDestinations = []
    this.doorsOpen = false
  }

  isValidDestination(floor) {
    if (floor < 0 || floor > this.numFloors - 1) throw new Error('Invalid floor')
    else {
      if (this.directionOfTravel === null) return true
      else {
        if (this.directionOfTravel === 'up' && floor > this.currentFloor) return true
        if (this.directionOfTravel === 'down' && floor < this.currentFloor) return true
      }
      return false
    }
  }

  addDestination(floor) {
    // takes an integer floor
    // return value: none
    // side effects: if floor is consistent with direction of travel (i.e., it's above current
    //   floor when the elevator is traveling up) it will be added to destinations
    //   otherwise, it's handled after the elevator's current destinations are completed
    if (this.isValidDestination(floor)) {
      this.destinations.push(floor)
      this.destinations.sort()
    }
    else {
      // isValidDestination would throw an error for an invalid floor (e.g., negative), so 
      // if we get here, we can assume the floor is a valid deferred destination
      this.deferredDestinations.push(floor)
      this.deferredDestinations.sort()
    }
    this.doorsOpen = false
  }

  move() {
    if (this.directionOfTravel === 'up') this.currentFloor += 1
    else if (this.directionOfTravel === 'down') this.currentFloor -= 1
    if (this.currentFloor === this.destinations[0]) {
      this.doorsOpen = true
      this.destinations.shift()
    }
  }

  tick() {
    if (!this.doorsOpen && this.directionOfTravel !== null) {
      this.move()
    }
  }



}


// calling code:

const eb = new ElevatorBank({ numElevators: 3, numFloors: 8 })
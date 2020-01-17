export class GrumpReporter {

  constructor(obj = {}) {
    this.level = obj.level || null
    this.time = obj.time || null
  }

  validateGrump = (grumpLevel) => {
    if (!(typeof grumpLevel === 'number')) throw new Error('grump level must be a number')
    if (grumpLevel < 0 || grumpLevel > 10) throw new Error('grump level must be between 0 and 10')
  }

  recordGrump = (grumpLevel) => {
    this.validateGrump(grumpLevel)
    this.level = grumpLevel
    this.time = Date.now()
  }

  grumpLevel = () => {
    const now = Date.now()
    const minutesElapsed = Math.floor((now - this.time) / 60000)
    const confidence = Math.pow(0.5, minutesElapsed)
    return {
      'level': this.level,
      'confidence': confidence
    }
  }

}


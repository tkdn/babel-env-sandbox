/**
 * Class, destructuring, template literal
 * 
 */
class SampleClass {
  constructor (
    firstName = 'Charles',
    lastName = 'Bukowski'
  ) {
    this.firstName = firstName
    this.lastName = lastName
  }
  getName () {
    const { firstName, lastName } = this
    return `${firstName} ${lastName}`
  }
}

export default new SampleClass().getName() === 'Charles Bukowski'

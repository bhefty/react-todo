let moment = require('moment')
console.log(moment().format())

let now = moment()
console.log('Current timestamp: ' + now.unix())

let timestamp = 1480793672
let currentMoment = moment.unix(timestamp)
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm A'))

console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'))

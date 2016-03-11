export default function secondsToMinutes (a) {
  var b = a / 60
  var c = a / 60
  c = c.toString().split('.')[0]
  var d = Math.round(parseFloat('0.' + b.toString().split('.')[1]) * 60).toString()
  if (+d < 10) {
    d = '0' + d
  }
  return c + ':' + d
}

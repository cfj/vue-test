export default function clocktime (a) {
  var b = Math.floor(a / 3600)
  var c = Math.floor((a - b * 3600) / 60)
  var d = Math.floor(a - b * 3600 - c * 60)
  if (c < 10) {
    c = '0' + c
  }
  if (d < 10) {
    d = '0' + d
  }
  if (b < 1) {
    return c + ':' + d
  }
  return b + ':' + c + ':' + d
}

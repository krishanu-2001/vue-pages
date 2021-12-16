let lapKeys = [
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift'],
  ['ctrl', 'fn', 'os', 'alt', 'space', 'alt', 'ctrl', '.com'],
  ['visit', 'url', 'www', '.', 'krishanu-2001', '.git', 'hub', '.io'],
]

let styleElements = [
  {
    width: '500px',
    gridTemplateColumns:
      'auto auto auto auto auto auto auto auto auto auto auto auto auto 60px',
  },
  {
    gridTemplateColumns:
      '75px auto auto auto auto auto auto auto auto auto auto auto 80px',
  },
  {
    gridTemplateColumns:
      '90px auto auto auto auto auto auto auto auto auto auto 90px',
  },
  {
    textAlign: 'center',
    gridTemplateColumns: 'auto auto auto auto 200px auto auto auto',
  },
]

module.exports = {
  lapKeys: lapKeys,
  styleElements: styleElements,
}

function createElement (type, props, ...children) {
  const $el = document.createElement(type)
  Object.keys(props).forEach(prop => $el[prop] = props[prop])
  $el.append(...children)
  return $el
}

const words = [
  'computer',
  'desk',
  'book',
  'chair'
]

const $form = document.getElementById('form')
const $word = document.getElementById('word')
const $words = document.getElementById('words')
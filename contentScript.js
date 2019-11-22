function Panel() {
  // this.create()
  // this.translate(selectText)
  // this.setPosition(event)
}
Panel.prototype.create = function () {
  let html = `
          <header>
            快查单词
          </header>
          <hr>
          <main>
            content
          </main>`
  let container = document.createElement('div');
  container.innerHTML = html
  container.classList.add('_panel')
  document.body.appendChild(container)

  this.container = container
}

Panel.prototype.translate = function (raw) {
  this.container.querySelector('header').innerText = raw
  fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh&dt=t&q=${raw}`)
    .then(res => {
      return res.json()
    })
    .then(result => {
      this.container.querySelector('main').innerText = result[0][0][0]
      console.log(result);
      console.log(result[0][0][1], result[0][0][0]);
    })

}

Panel.prototype.setPosition = function ({x, y}) {
  console.log(x, y);
  this.container.style.left = `${x}px`
  this.container.style.top = `${y}px`
}
let panel = new Panel()

document.addEventListener('mouseup', event => {
  let selectText = window.getSelection().toString().trim()
  if (selectText === '') return
  console.log(selectText);
  panel.create()
  panel.translate(selectText)
  panel.setPosition({x: event.clientX, y: event.clientY})
})
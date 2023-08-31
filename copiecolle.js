const event = new CustomEvent('personnalEvent', { detail : { 'myData': 'mon événement perso' } })
const element = document.getElementById('navbar')

element.addEventListener('personnalEvent', displayMe)

element.dispatchEvent(event)

function displayMe(e) {
  console.log(e.detail.myData)
}
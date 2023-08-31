const myEvent = new CustomEvent('personnalEvent', {
   detail: { data: 'personnalEvent'}
})

const button = document.getElementById('button')

const displayMe = (e) => {
   console.log(e.detail.data)}

button.addEventListener('personnalEvent', displayMe)

button.addEventListener('click', () => {
   button.dispatchEvent(myEvent)
})

/*button.removeEventListener('personnalEvent', displayMe)*/
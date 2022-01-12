console.log('inside javascript changing')

const toggleBtn = document.getElementById('toggle-btn')
const cloudBanner = document.getElementById('cloud-banner')

toggleBtn.addEventListener('click',(e) =>{
    console.log('what is e', e)
    console.log('i am clicking')
})
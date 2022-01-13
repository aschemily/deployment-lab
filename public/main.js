console.log('inside javascript changing')

const toggleBtn = document.getElementById('toggle-btn')
const addForm = document.getElementById('add-new-cloud')
const imgInput = document.getElementById('img-url')


addForm.addEventListener('submit',(e)=>{
    e.preventDefault()
   console.log(imgInput.value)
  const newImg = document.createElement('img')
  newImg.src = imgInput.value
  document.body.appendChild(newImg)
  Rollbar.info('adding new photo')

})


//TOGGLE CLOUD
function toggleCloud(){
const cloudBanner = document.getElementById('cloud-banner')
    if(cloudBanner.style.display == 'none'){
        cloudBanner.style.display = "block"
       Rollbar.warning("this is a warning")
    }else{
        cloudBanner.style.display = "none"
       Rollbar.error("this is a error")
    }

}

toggleBtn.addEventListener('click',toggleCloud)
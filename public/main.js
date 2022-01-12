console.log('inside javascript changing')

const toggleBtn = document.getElementById('toggle-btn')



function toggleCloud(){
const cloudBanner = document.getElementById('cloud-banner')
    if(cloudBanner.style.display == 'none'){
        cloudBanner.style.display = "block"
    }else{
        cloudBanner.style.display = "none"
    }

}

toggleBtn.addEventListener('click',toggleCloud)
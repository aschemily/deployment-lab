console.log('inside javascript changing')

const toggleBtn = document.getElementById('toggle-btn')
let cloudBanner = document.getElementById('cloud-banner')


function toggleCloud(){

    if(cloudBanner.style.display == 'none'){
        cloudBanner.style.display = "block"
    }else{
        cloudBanner.style.display = "none"
    }

}

toggleBtn.addEventListener('click',toggleCloud())
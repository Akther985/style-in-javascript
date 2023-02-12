const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid red';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '5px';
    section.style.paddingLeft = '50px'
    section.style.backgroundColor = 'red';

}
const placescontainer = document.getElementById('places-container');
placescontainer.style.backgroundColor = 'black';
placescontainer.style.color = '#fff';

const placeeecontainer = document.getElementById('placeee-container');
placeeecontainer.classList.add('text-center');
placeeecontainer.classList.remove('big-text');
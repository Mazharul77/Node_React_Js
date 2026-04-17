const img_gallery = document.getElementById('image_gallery');
const all_img = img_gallery.querySelectorAll('img');
const explore_linkedin = document.getElementById('explore_linkedin');

const premimum_user = false;
console.log(`Image Gallery Container: ${img_gallery}`);

//now need to concole all images nodelist or html collection
console.log(`All Images Node list in the Gallery: ${all_img.forEach((img) => console.log(img))}`);

/*
older onclick() event listener :
 previously used but it's not recommended to use it because
  it can only assign one event handler to an element,
   and if you assign another handler, it will overwrite the previous one.
    This can lead to unexpected behavior and make it difficult to manage multiple
     event handlers for the same element.
*/

// cnclick() smple event listener example: let choose a specific image and add a click event listener to it using the onclick() method.
// document.getElementById('presentation').onclick = function () {
//     console.log(' ......... Presentation Image is clicked ! ..........\n');
//     alert('Alert!\n You clicked on the presentation image!');
// }

// bubbling

img_gallery.addEventListener('click', (e) => {
    console.log(`===== Clicked Images inside the image_galley 'ul'-tag(Top parent of the event ) . ======\n\n`);

    if (e.target.tagName === 'IMG') {
        console.log(`Clicked on Image: ${e.target.src}`);
        e.target.style.border = '2px solid red';

        const parentNode = e.target.parentNode;
        parentNode.style.border = '2px solid blue';

        console.log(`The Taget Element: ${e.target.tagName}`);
        console.log(`The Current Element: ${e.currentTarget.tagName}`);
        console.log(`Parent Element: ${e.target.parentElement.tagName}\n`);
        console.log(`The Event Target's -> parentNode: ${parentNode}\n\n`);

        console.log(`Position of the event: ${e.clientX}, ${e.clientY}`);
        console.log(`Page Positin of the event: ${e.pageX}, ${e.pageY}`);
        console.log(`Property: ${e.bubbles}`);

        console.log(`The Event Type: ${e.type}`);
        console.log(`srcElement Attribute Value: ${e.srcElement}`);
        console.log(`toElement Attribute Value: ${e.toElement}`);
        console.log(` `);
        console.log(`The event phase: ${e.eventPhase}`);
        console.log(`The Clicking Time: ${e.timeStamp}`);

        console.log(`User IP address: ${e.screenX}, ${e.screenY}`);
        console.log(`Client location: ${e.clientX}, ${e.clientY}`);
        console.log(`Offset Location: ${e.offsetX}, ${e.offsetY}`);
        console.log(`Related Target: ${e.relatedTarget}`);

        console.log(`Browser Language: ${e.view.navigator.language}`);
        console.log(`User Process Id: ${e.view.navigator.platform}`);
        console.log(`User Agent(Browser/client Details): ${e.view.navigator.userAgent}`);
        console.log(`Clicked User Geo Location: ${e.view.navigator.geolocation}`);

        // now we will remove that specific clicked 'image element with li' if type is IMG
        const to_remove_elem = e.target.parentNode;
        console.log(`Current Target Id: ${e.target.id}`);
        console.log('To be removed Element:', to_remove_elem)
        to_remove_elem.remove();

    }

}, false); // true for capturing phase, false for bubbling phase

document.getElementById('formal_pic').addEventListener('click', (e) => {
    // for stopping the event bubbling we can use e.stopPropagation() method
    e.stopPropagation();

    console.log(`===== Formal Pic is clicked inside the 'li'-tag.\n
        Event Bubbling is normally happened here, so the event will propagate up to the parent elements if not already stopped.  =====\n\n`);
}, false); // false for bubbling phase, true for capturing phase

// capturing example for the event listener
explore_linkedin.addEventListener('click', (e) => {
    e.preventDefault(); // for preventing the default behavior of the event, in this case, it will prevent the default behavior of the anchor tag which is navigating to the href link.
    // e.stopPropagation(); // for stopping the event bubling, so the event will not propagate up to the parent elements.
    console.log(`===== Explore LinkedIn Button is clicked. ======\n\n`);
    alert('Explore LinkedIn Button is clicked!');

}, false); // true for capturing phase, false for bubbling phase & the parent event should be also true for the capturing phsase

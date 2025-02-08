// const headings = document.getElementsByClassName('header');
// console.log(headings);

// const para = document.getElementById('para');
// console.log(para);

// const list = document.querySelector('.header');
// console.log(list);

// alert('Hello World!');
// prompt('What is your name?');
// confirm('Are you sure?');

// const body = document.querySelector('body');
// body.append('Hello World!');

// const body = document.querySelector('body')
// const newDiv = document.createElement('div');
// newDiv.innerHTML = "<b>Hello World!</b>"
// body.append(newDiv)

// const newDiv = document.createElement('div')
// const bold = document.createElement('b')
// bold.innerText = 'Hello World!'
// newDiv.append(bold)
// body.append(newDiv)

// const para = document.getElementById('para')
// para.remove()
// para.setAttribute('onclick', 'alert("Hello")')
// para.setAttribute('id', 'p5')
// para.classList.add('quote')
// para.classList.remove('para')
// para.classList.toggle('paragraph', false) //Nếu có r thì xóa bỏ, không thì thêm vào
// para.style.color = 'red'
// para.style.backgroundColor = 'blue'

// function openMe() {
//     const open = document.getElementById('demo');
//     //Change the style attribute directly
//     // open.style.display = 'block';
//     //Change the class
//     open.className = "open";
// }

// function closeMe() {
//     const close = document.getElementById('demo')
//     //Change the style attribute directly
//     // close.style.display = 'none'
//     //Change the class
//     close.className = "close"
// }

/*Name this external file gallery.js*/

function upDate(previewPic) {
  /* In this function you should 
     1) change the url for the background image of the div with the id = "image" 
     to the source file of the preview image
     */
  
  const urlImage = `url(${previewPic.src})`;
  document.getElementById('image').style.backgroundImage = urlImage
  /*
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  document.getElementById('image').innerText = previewPic.alt;
}

function unDo() {
  /* In this function you should 
 1) Update the url for the background image of the div with the id = "image" 
 back to the orginal-image.  You can use the css code to see what that original URL was
 */
  document.getElementById('image').style.backgroundImage = "url('')"
  /*
  2) Change the text  of the div with the id = "image" 
  back to the original text.  You can use the html code to see what that original text was
  */
  document.getElementById('image').innerText = 'Hover over an image below to display here.'

}
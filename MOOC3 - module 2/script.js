function upDate(previewPic) {
  const urlImage = `url(${previewPic.src})`;
  document.getElementById('image').style.backgroundImage = urlImage
  document.getElementById('image').innerText = previewPic.alt;
  console.log('Image updated:', previewPic.alt);
}

function unDo() {
  document.getElementById('image').style.backgroundImage = "url('')"
  document.getElementById('image').innerText = 'Hover over an image below to display here.'
  console.log('Image reset to original');
}

function changeText() {
  const text = document.getElementById('input');
  if (text.value === '') {
    alert("Name cannot be empty");
  }
}

function clearText() {
  const text = document.getElementById('text');
  text.innerText = '';
}

function initialize(){
  const image = document.getElementsByClassName('preview');
  const random = Math.floor(Math.random() * image.length);
  upDate(image[random]);
}

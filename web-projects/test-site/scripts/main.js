let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/boy.gif') {
      myImage.setAttribute('src', 'images/boy1.gif');
    } else {
      myImage.setAttribute('src', 'images/boy.gif');
    }
}
function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = '超可爱表情包，' + name + '！';
  }
  
  function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
  } 
  
  let storedName = localStorage.getItem('name');
  if(!storedName) {
     setUserName();
  } else {
     setHeading(storedName);
  }
  
  let myButton = document.querySelector('button'); 
  myButton.onclick = setUserName;
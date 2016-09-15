function getOther (val) {
  var element=document.getElementByClassName('other');

  if(val === "Other") {
    element.style.display='block';
  } else {
    element.style.display='none';
  }
}

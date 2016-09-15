alert("form.js");

function getOther (val) {
  var element=document.getElementById('other');

  if(val === 'Other') {
    element.style.display='block';
  } else {
    element.style.display='none';
  }
}

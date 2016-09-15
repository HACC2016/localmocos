var elements = $('select');
elements.on('change', function (event) {
  console.log(event);
  var input = $(this).next('.other').find('input');
  if(event.target.value === "Other") {
    input.css('display', 'block');
  } else {
    input.css('display', 'none');
  }
})

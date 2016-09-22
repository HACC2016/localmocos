$(function () {
  var elements = $("input[type='checkbox']");
  elements.change(function (event) {
    var input = $(this).parent().siblings(".other");
    if(event.target.parentElement.innerText.toLowerCase() === "other") {
      event.target.value = null;
      if(this.checked===true){
        input.css({"visibility": "visible", "display": "block"}).attr("disabled", false);
        } else {
          input.css({"visibility": "none", "display": "none"}).attr("disabled", true);
        }

      }
  });
})

$(function () {
  var elements = $("input[type='checkbox']");
  elements.change(function (event) {
    var input = $(this).parent().siblings(".other");
    if(event.target.parentElement.innerText.toLowerCase() === "other") {
      console.log(event.target.value);
      input.css({"visibility": "visible", "display": "block"}).attr("disabled", false);
    } else {
      input.css("visibility", "none").attr("disabled", true);
    }
  });
})

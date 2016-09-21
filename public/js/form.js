$(function () {
  var elements = $("select");
  console.log(elements.length);
  elements.change(function (event) {
    var input = $(this).next(".other");
    if(event.target.value === "other") {
      input.css({"visibility": "visible", "display": "block"}).attr("disabled", false);
    } else {
      input.css("visibility", "none").attr("disabled", true);
    }
  });
})

// elements.change(function (event) {
//   var input = $(this).find("input").each();
//   if(event.target.value === "Other"){
//     input.show();
//   } else {
//     input.hide();
//   }
// });
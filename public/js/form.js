var elements = $("select");
elements.on("change", function (event) {
  console.log(event);
  var input = $(this).next("div.other").find("input");
  if(event.target.value === "Other") {
    input.css("visibility", "visible");
  } else {
    input.css("display", "none");
  }
});

// elements.change(function (event) {
//   var input = $(this).find("input").each();
//   if(event.target.value === "Other"){
//     input.show();
//   } else {
//     input.hide();
//   }
// });
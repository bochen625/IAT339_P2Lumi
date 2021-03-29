$(document).ready(function(){
  $(".shoppingCartButton").click(function(){
    $("#blackBackground").toggleClass("show");
  });
});

$(document).ready(function(){
  $(".close").click(function(){
    $("#blackBackground").toggleClass("hide");
  });
});

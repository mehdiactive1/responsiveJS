
$(window).resize(function() {
  var width = $(window).width();
  if (width > 1024){
    $("#res-js").css("background-color", "yellow");
  }
  else if (width > 768){
    $("#res-js").css("background-color", "orange");
  }
  else if (width > 500){
    $("#res-js").css("background-color", "red");
  }
  else {
    $("#res-js").css("background-color", "pink");
  }
});


$(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
var current =(scrollHeight - scrollPosition) / scrollHeight;

	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
	    alert("end")
	}
});

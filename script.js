$(document).ready(function () {
    $(".nav-link").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
    $("#view-more").click(function(event){
        var check = $(".view").hasClass("d-none");
        if(check){
            $(".view").removeClass("d-none");
            $("#view-more").html("View Less");
        }
        else{
            $(".view").addClass("d-none");
            $("#view-more").html("View more");
        }
    });
  });

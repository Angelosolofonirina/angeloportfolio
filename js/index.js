$(document).ready(function(){
    $(".bouton2").click(function(){
      $(this).addClass("remove_bg");
      $(".bouton1").addClass("add_back");
    });

    $(".bouton3").click(function(){
        $(this).addClass("remove_bg");
        $(".bouton1").addClass("add_back");
        $(".bouton2").addClass("add_back");
      });
  });
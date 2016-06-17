$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var destination = $("input:radio[name=destination]:checked").val();
    var activites = $("input:radio[name=activites]:checked").val();
    var transportaion = $("input:radio[name=transportaion]:checked").val();
    var persontype = $("input:radio[name=persontype]:checked").val();
    var food = $("input:radio[name=food]:checked").val();

    $("#output").text(destination + activites + transportaion + persontype + food);


  });
});

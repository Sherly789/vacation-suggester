$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var destination = $("input:radio[name=destination]:checked").val();
    var activites = $("input:radio[name=activites]:checked").val();
    var transportaion = $("input:radio[name=transportaion]:checked").val();
    var persontype = $("input:radio[name=persontype]:checked").val();
    var food = $("input:radio[name=food]:checked").val();

    if (destination==="City") {
      $("#output").text("You should go to SF");
    } else if (destination==="Mountains") {
      $("#output").text("You should go to Seattle");
    } else if (destination==="Beach") {
      $("#output").text("You should go to Mexico");
    }

  });
});

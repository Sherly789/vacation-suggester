$(document).ready(function() {
debugger;
  $("#survey form").submit(function(event) {
    var nameInput = $("#name").val();
    var destinationInput = $("input:radio[name=destination]:checked").val();
    var activitesInput = $("input:radio[name=activites]:checked").val();
    var transportaionInput = $("input:radio[name=transportaion]:checked").val();
    var persontypeInput = $("input:radio[name=person type]:checked").val();
    var foodInput = $("input:radio[name=food]:checked").val();

    $("#output").text("Hello " + nameInput + " you like ")

    event.preventDefault();
  });
});

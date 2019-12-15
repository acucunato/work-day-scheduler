
$(document).ready(function(){
  $(".saveBtn").on("click", function(){
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);

    //create var time = localStorage.getItem("time") grab it by the Key.. then the value will poll  


  })

  $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

})

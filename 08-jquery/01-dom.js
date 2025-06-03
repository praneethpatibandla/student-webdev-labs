$(document).ready(function () {
  $("#copy").on("click", function () {
    const text = $("#userInput1").val();
    $("#output1").text(text);
  });

  $("#userInput2").on("input", function () {
    const text = $(this).val();
    $("#output2").text(text);
  });
});

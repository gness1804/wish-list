$(document).ready(function () {


  var input = $(".new-item-form--name");
  var submit = $(".new-item-form--submit");

  submit.on("click", function (event) {
    event.preventDefault();
    var text = input.val();

    // debugger;
    $(".item-list").append(moreText(text));
    input.val("");
  });

  input.on("keyup", function (key) {
    var isItEmpty = (input.val() === "")
    submit.attr("disabled", false);
    if (input.val() === "") {
      submit.attr("disabled", true);
    }
  });

  function moreText(text){
    return `
    <section>
      <p>${text}</p>
      <button class="removeThis">Remove Item</button>
    </section>`
  }

  // input.on("keyup", function (key) {
  //   var isItEmpty = (input.val() === "")
  //   submit.attr("disabled", isItEmpty);
  // }

}); //end of jQuery body

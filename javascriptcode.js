window.androidObj = function AndroidClass(){};

var button = document.createElement("button");
button.addEventListener ("click", function() {
  window.androidObj.textToAndroid(input.value);
});
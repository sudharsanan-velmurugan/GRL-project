
function userInput(distance, time) {
  enteredData = { distance, time };
  return enteredData;
}
function measure(enteredData) {
  let object = enteredData;
  let measuredSpeed = object.distance / object.time;
  object.measuredSpeed = measuredSpeed;
  return object;
}

function dataSet(array, object) {
  let index = array.length;
  array.splice(index, 0, object);
}

var array = [];
const store = document.querySelector("#store");
store.addEventListener("click", () => {
  let distance = document.querySelector("#distance").value;
  let time = document.querySelector("#time").value;
  let enteredData = userInput(distance, time);
  let object = measure(enteredData);
  dataSet(array, object);
});
const display = document.querySelector("#display");
display.addEventListener("click", () => {
  const print = document.querySelector("#print");
  for (let i = 0; i < array.length; i++) {
    print.innerText += `
        Distance: ${array[i].distance}
        Time: ${array[i].time}
        MeasuredSpeed: ${array[i].measuredSpeed}
        `;
  }
});

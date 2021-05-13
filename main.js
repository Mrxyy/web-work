const first = document.querySelector("#number1");
const second = document.querySelector("#number2");

const result = document.querySelector(".result");

if (window.Worker) {
  const myWorker = new Worker("worker.js");

  first.onchange = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log("1 工作");
  };

  second.onchange = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log("2 工作");
  };

  myWorker.onmessage = function (e) {
    result.textContent = e.data;
    console.log("Message received from worker");
  };
} else {
  console.log("Your browser doesn't support web workers.");
}

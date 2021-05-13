onmessage = function (e) {
  console.log("Worker: Message received from main script");
  const result = e.data[0] * e.data[1];
  if (isNaN(result)) {
    postMessage("输入数字");
  } else {
    const workerResult = "Result: " + result;
    console.log("ok", this);
    postMessage(workerResult);
  }
};

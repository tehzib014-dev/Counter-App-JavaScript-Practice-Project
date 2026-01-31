let countOutput = document.getElementById("input");
let count = 0;
const reset = () => {
  count = 0;
  countOutput.textContent = count;
};

let increase = () => {
  count++;
  countOutput.textContent = count;
};
let increase10 = () => {
  count = count + 10;
  countOutput.textContent = count;
};

let decrease = () => {
  count--;
  countOutput.textContent = count;
};
let decrease10 = () => {
  count = count - 10;
  countOutput.textContent = count;
};

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Silakan masukkan angka yang valid.");
    return;
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Tidak bisa membagi dengan nol!");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Operator tidak dikenali");
      return;
  }

  document.getElementById("result").textContent = result;
}

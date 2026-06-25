function convert() {
  const degree = parseFloat(document.getElementById("degree").value);

  const fahrenheit = (degree * 9) / 5 + 32;

  document.getElementById("fahrenheit").innerText =
    `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
}

function convert() {
  const usd = document.getElementById("usd").value;

  const inr = usd * 83.5;

  document.getElementById("result").innerText = `INR: ₹${inr}`;
}

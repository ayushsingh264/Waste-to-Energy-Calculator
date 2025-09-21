function calculate() {
  const wasteKg = parseFloat(document.getElementById('wasteInput').value);

  if (isNaN(wasteKg) || wasteKg <= 0) {
    alert("Please enter a valid amount of waste in kg.");
    return;
  }

  const biogas = (wasteKg * 0.3).toFixed(2);        // 0.3 m³/kg
  const energy = (biogas * 6).toFixed(2);           // 6 kWh/m³
  const byproducts = (wasteKg * 0.2).toFixed(2);    // 0.2 kg/kg

  document.getElementById('biogas').innerText = biogas;
  document.getElementById('energy').innerText = energy;
  document.getElementById('byproducts').innerText = byproducts;
}

function calculateIncome() {
  // Get inputs
  const address = document.getElementById("address").value;
  const state = document.getElementById("state").value;
  const city = document.getElementById("city").value;
  const bedrooms = document.getElementById("bedrooms").value;
  const bathrooms = document.getElementById("bathrooms").value;
  const quality = document.getElementById("quality").value;
  const amenities = document.querySelectorAll('input[name="amenities"]:checked');
  const locationRank = document.getElementById("location-rank").value;
  
  // Look up average nightly rate
  let nightlyRate = 0;
  if (state in stateRates) {
    nightlyRate = stateRates[state];
    if (city in cityRates[state]) {
      nightlyRate = cityRates[state][city];
    }
  }
  
  // Calculate income based on inputs
  let income = nightlyRate * 365 * locationRank;
  if (quality === "average") {
    income += 100 * bedrooms + 75 * bathrooms;
  } else if (quality === "high-end") {
    income += 200 * bedrooms + 150 * bathrooms;
  } else if (quality === "luxury") {
    income += 300 * bedrooms + 225 * bathrooms;
  }
  
  for (let i = 0; i < amenities.length; i++) {
    const amenity = amenities[i].value;
    if (amenity === "hot-tub") {
      income += 25;
    } else if (amenity === "pool") {
      income += 50;
    } else if (amenity === "deck") {
      income += 10;
    } else if (amenity === "view") {
      income += 15;
    } else if (amenity === "waterfront") {
      income += 100;
    }
  }
  
  // Output result
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = `The estimated annual income for ${address}, ${city}, ${state} is $${income.toLocaleString()}.`;
}

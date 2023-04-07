function getStateName(state) {
  const states = {
    'AL': 'Alabama',
    'AK': 'Alaska',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware',
    'FL': 'Florida',
    'GA': 'Georgia',
    'HI': 'Hawaii',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'IA': 'Iowa',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'ME': 'Maine',
    'MD': 'Maryland',
    'MA': 'Massachusetts',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MS': 'Mississippi',
    'MO': 'Missouri',
    'MT': 'Montana',
    'NE': 'Nebraska',
    'NV': 'Nevada',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NY': 'New York',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VT': 'Vermont',
    'VA': 'Virginia',
    'WA': 'Washington',
    'WV': 'West Virginia',
    'WI': 'Wisconsin',
    'WY': 'Wyoming'
  };

  if (state.length === 2) {
    return states[state.toUpperCase()] || state;
  } else {
    return state;
  }
}

function estimateIncome(address, city, state, bedrooms, bathrooms, quality, location, hotTub, pool, waterfront, views, deck) {
  // Code to estimate income based on the input parameters
  // ...
  // Return the estimated income
  return 5000;
}

function calculateIncome() {
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = getStateName(document.getElementById('state').value);
  const bedrooms = document.getElementById('bedrooms').value;
  const bathrooms = document.getElementById('bathrooms').value;
  const quality = document.getElementById('quality').value;
  const location = document.getElementById('location').value;
  const hotTub = document.getElementById('hot-tub').checked ? 1 : 0;
  const pool = document.getElementById('pool').checked ? 1 : 0;
  const waterfront = document.getElementById('waterfront').checked ? 1 : 0;
  const views = document.getElementById('views').checked ? 1 : 0;
  const deck = document.getElementById('deck').checked ? 1 : 0;
  const income = estimateIncome(address, city, state, bedrooms, bathrooms, quality, location, hotTub, pool, waterfront, views, deck);
  document.getElementById('result').innerHTML = 'Estimated Income: $' + income.toFixed(2);
}


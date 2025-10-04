fetch('https://openexchangerates.org/api/latest.json?app_id=YOUR_APP_ID')
  .then(res => res.json())
  .then(data => console.log(data.rates.UZS));


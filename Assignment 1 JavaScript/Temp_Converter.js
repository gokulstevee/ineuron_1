function ConvertToCelsius(f) {
  let c = f - 32;
  c = c * (5 / 9);
  return c;
}

function ConvertToFahrenheit(c) {
  let f = (c * 9) / 5;
  f = f + 32;
  return f;
}

console.log(`60°C is ${ConvertToFahrenheit(60)}°F`);

console.log(`45°F is ${ConvertToCelsius(45)}`);

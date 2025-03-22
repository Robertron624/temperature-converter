export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

export function fahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

export function kelvinToCelsius(kelvin: number): number {
  return kelvin - 273.15;
}

export function celsiusToKelvin(celsius: number): number {
  return celsius + 273.15;
}

export function fahrenheitToKelvin(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9 + 273.15;
}

export function kelvinToFahrenheit(kelvin: number): number {
  return kelvin * 9 / 5 - 459.67
}

export function trimNumber(number: number, decimalPlaces: number = 2): number {
  return parseFloat(number.toFixed(decimalPlaces));
}
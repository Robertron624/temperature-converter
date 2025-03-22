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

export function convertTemperature(value: number, unitFrom: string, unitTo: string): number {
  if (unitFrom === unitTo) return value; // If the units are the same, there is no need to convert

  const conversions: Record<string, (val: number) => number> = {
    "celsius_fahrenheit": celsiusToFahrenheit,
    "fahrenheit_celsius": fahrenheitToCelsius,
    "kelvin_celsius": kelvinToCelsius,
    "celsius_kelvin": celsiusToKelvin,
    "fahrenheit_kelvin": fahrenheitToKelvin,
    "kelvin_fahrenheit": kelvinToFahrenheit,
  };

  const key = `${unitFrom}_${unitTo}`; // It forms the key to search for the conversion function

  return conversions[key] ? conversions[key](value) : value;
}

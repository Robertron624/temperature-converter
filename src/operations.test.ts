import { describe, expect, it } from "vitest";
import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  kelvinToCelsius,
  celsiusToKelvin,
  fahrenheitToKelvin,
  kelvinToFahrenheit,
  trimNumber,
  convertTemperature,
} from "./operations";

describe("Temperature Conversion Functions", () => {
  it("converts Celsius to Fahrenheit", () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
    expect(celsiusToFahrenheit(100)).toBe(212);
  });

  it("converts Fahrenheit to Celsius", () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
    expect(fahrenheitToCelsius(212)).toBe(100);
  });

  it("converts Kelvin to Celsius", () => {
    expect(kelvinToCelsius(273.15)).toBe(0);
    expect(kelvinToCelsius(373.15)).toBe(100);
  });

  it("converts Celsius to Kelvin", () => {
    expect(celsiusToKelvin(0)).toBe(273.15);
    expect(celsiusToKelvin(100)).toBe(373.15);
  });

  it("converts Fahrenheit to Kelvin", () => {
    expect(trimNumber(fahrenheitToKelvin(32), 2)).toBe(273.15);
    expect(trimNumber(fahrenheitToKelvin(212), 2)).toBe(373.15);
  });

  it("converts Kelvin to Fahrenheit", () => {
    expect(trimNumber(kelvinToFahrenheit(273.15), 2)).toBe(32);
    expect(trimNumber(kelvinToFahrenheit(373.15), 2)).toBe(212);
  });
});

describe("trimNumber function", () => {
  it("rounds numbers to 2 decimal places by default", () => {
    expect(trimNumber(12.3456)).toBe(12.35);
  });

  it("rounds numbers to specified decimal places", () => {
    expect(trimNumber(12.3456, 3)).toBe(12.346);
  });
});

describe("convertTemperature function", () => {
  it("returns the same value when unitFrom and unitTo are the same", () => {
    expect(convertTemperature(100, "celsius", "celsius")).toBe(100);
  });

  it("correctly converts between temperature units", () => {
    expect(convertTemperature(0, "celsius", "fahrenheit")).toBe(32);
    expect(convertTemperature(32, "fahrenheit", "celsius")).toBe(0);
    expect(convertTemperature(273.15, "kelvin", "celsius")).toBe(0);
    expect(convertTemperature(0, "celsius", "kelvin")).toBe(273.15);
    expect(trimNumber(convertTemperature(32, "fahrenheit", "kelvin"), 2)).toBe(273.15);
    expect(trimNumber(convertTemperature(273.15, "kelvin", "fahrenheit"), 2)).toBe(32);
  });

  it("returns the same value if conversion key is invalid", () => {
    expect(convertTemperature(100, "invalid", "unit")).toBe(100);
  });
});

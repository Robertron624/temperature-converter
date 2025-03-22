import "./style.css";

import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  kelvinToCelsius,
  celsiusToKelvin,
  fahrenheitToKelvin,
  kelvinToFahrenheit,
  trimNumber,
} from "./operations";

function main() {
  const temperatureConverterForm = document.querySelector(
    "form#temperature-converter"
  );

  const valueToConvert = document.querySelector<HTMLInputElement>(
    "input#value-to-convert"
  );
  const result = document.querySelector<HTMLSpanElement>("#result");

  const unitFromSelect =
    document.querySelector<HTMLSelectElement>("select#unit-from");
  const unitToSelect =
    document.querySelector<HTMLSelectElement>("select#unit-to");

  const submitButton = document.querySelector<HTMLButtonElement>(
    'button[type="submit"]'
  );

  function checkIfAllFieldsAreFilled() {
    if (valueToConvert?.value && unitFromSelect?.value && unitToSelect?.value) {

      // Check if values for unitFormSelect and unitToSelect values are either: celsius, fahrenheit or kelvin
      if (
        ["celsius", "fahrenheit", "kelvin"].includes(unitFromSelect.value) &&
        ["celsius", "fahrenheit", "kelvin"].includes(unitToSelect.value)
      ) {
        submitButton?.removeAttribute("disabled");
      } else {
        submitButton?.setAttribute("disabled", "disabled");
      }
    } else {
      submitButton?.setAttribute("disabled", "disabled");
    }
  }

  if (!temperatureConverterForm) {
    return null;
  }

  temperatureConverterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = parseFloat(valueToConvert?.value ?? "0");
    const unitForm = unitFromSelect?.value;
    const unitTo = unitToSelect?.value;
    let convertedValue: number;

    if (unitForm === "celsius" && unitTo === "fahrenheit") {
      convertedValue = celsiusToFahrenheit(value);
    } else if (unitForm === "fahrenheit" && unitTo === "celsius") {
      convertedValue = fahrenheitToCelsius(value);
    } else if (unitForm === "kelvin" && unitTo === "celsius") {
      convertedValue = kelvinToCelsius(value);
    } else if (unitForm === "celsius" && unitTo === "kelvin") {
      convertedValue = celsiusToKelvin(value);
    } else if (unitForm === "fahrenheit" && unitTo === "kelvin") {
      convertedValue = fahrenheitToKelvin(value);
    } else if (unitForm === "kelvin" && unitTo === "fahrenheit") {
      convertedValue = kelvinToFahrenheit(value);
    } else {
      convertedValue = value;
    }

    if (isNaN(convertedValue)) {
      convertedValue = 0;
    }

    console.log("Converted value: ", convertedValue);

    // using the trimNumber function to round the converted value to 2 decimal places
    const convertedValueRounded = trimNumber(convertedValue);

    const finalText = `${value} ${unitForm} is equal to ${convertedValueRounded} ${unitTo}`;

    if (result) result.textContent = finalText;
  });

  // By default the submit button is disabled, so we need to enable it, when the value to convert is filled
  // when the select of the unit from and unit to have either celsius, fahrenheit or kelvin selected
  // and when the value to convert is filled
  valueToConvert?.addEventListener("input", () => {
    checkIfAllFieldsAreFilled();
  });

  unitFromSelect?.addEventListener("change", () => {
    checkIfAllFieldsAreFilled();
  });

  unitToSelect?.addEventListener("change", () => {
    checkIfAllFieldsAreFilled();
  });
}

document.addEventListener("DOMContentLoaded", main);

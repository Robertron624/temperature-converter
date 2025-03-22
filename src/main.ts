import "./style.css";

import {
  trimNumber,
  convertTemperature,
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
    const unitForm = unitFromSelect?.value ?? "celsius";
    const unitTo = unitToSelect?.value ?? "fahrenheit";
    
    let convertedValue = convertTemperature(value, unitForm, unitTo);

    if (isNaN(convertedValue)) {
      convertedValue = 0;
    }

    // using the trimNumber function to round the converted value to 2 decimal places
    const convertedValueRounded = trimNumber(convertedValue);

    const finalText = `${value} ${unitForm} is equal to ${convertedValueRounded} ${unitTo}`;

    if (result) result.textContent = finalText;
  });

  // By default the submit button is disabled, so we need to enable it, when the value to convert is filled
  // when the select of the unit from and unit to have either Celsius, Fahrenheit or kelvin selected
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

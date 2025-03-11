import './style.css'

function celsiusToFahrenheit(celsius: number): number {
  return celsius * 9 / 5 + 32
}

function fahrenheitToCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5 / 9
}

function kelvinToCelsius(kelvin: number): number {
  return kelvin - 273.15
}

function celsiusToKelvin(celsius: number): number {
  return celsius + 273.15
}

function fahrenheitToKelvin(fahrenheit: number): number {
  return (fahrenheit - 32) * 5 / 9 + 273.15
}

function kelvinToFahrenheit(kelvin: number): number {
  return kelvin * 9 / 5 - 459.67
}


function main() {
  const temperatureConverterForm = document.querySelector('form#temperature-converter')
  console.log(temperatureConverterForm)

  const valueToConvert = document.querySelector<HTMLInputElement>('input#value-to-convert')
  const result = document.querySelector<HTMLSpanElement>('p#result')
  
  const unitFromSelect = document.querySelector<HTMLSelectElement>('select#unit-from')
  const unitToSelect = document.querySelector<HTMLSelectElement>('select#unit-to')

  const submitButton = document.querySelector<HTMLButtonElement>('button[type="submit"]')

  function checkIfAllFieldsAreFilled() {
    if(valueToConvert?.value && unitFromSelect?.value && unitToSelect?.value) {
      // submitButton?.removeAttribute('disabled')

      // Check if values for unitFormSelect and unitToSelect values are either: celsius, fahrenheit or kelvin
      if(['celsius', 'fahrenheit', 'kelvin'].includes(unitFromSelect.value) && ['celsius', 'fahrenheit', 'kelvin'].includes(unitToSelect.value)) {
        submitButton?.removeAttribute('disabled')
      } else {
        submitButton?.setAttribute('disabled', 'disabled')
      }
    } else {
      submitButton?.setAttribute('disabled', 'disabled')
    }
  }

  if(!temperatureConverterForm) {
    return null
  }

  temperatureConverterForm.addEventListener('submit', (event) => {
    console.log('submit')
    event.preventDefault()
    const value = parseFloat(valueToConvert?.value ?? '0')
    const unitForm = unitFromSelect?.value
    const unitTo = unitToSelect?.value
    let convertedValue: number

    if (unitForm === 'celsius' && unitTo === 'fahrenheit') {
      convertedValue = celsiusToFahrenheit(value)
    } else if (unitForm === 'fahrenheit' && unitTo === 'celsius') {
      convertedValue = fahrenheitToCelsius(value)
    } else if (unitForm === 'kelvin' && unitTo === 'celsius') {
      convertedValue = kelvinToCelsius(value)
    } else if (unitForm === 'celsius' && unitTo === 'kelvin') {
      convertedValue = celsiusToKelvin(value)
    }
    else if (unitForm === 'fahrenheit' && unitTo === 'kelvin') {
      convertedValue = fahrenheitToKelvin(value)
    }
    else if (unitForm === 'kelvin' && unitTo === 'fahrenheit') {
      convertedValue = kelvinToFahrenheit(value)
    }
    else {
      convertedValue = value
    }

    if(isNaN(convertedValue)) {
      convertedValue = 0
    }

    if(result)
      result.textContent = convertedValue.toString();

    
  })

  // By default the submit button is disabled, so we need to enable it, when the value to convert is filled
  // when the select of the unit from and unit to have either celsius, fahrenheit or kelvin selected
  // and when the value to convert is filled
  valueToConvert?.addEventListener('input', () => {
    console.log('valueToConvert')
    checkIfAllFieldsAreFilled()
  })

  unitFromSelect?.addEventListener('change', () => {
    console.log('unitFromSelect')
    checkIfAllFieldsAreFilled()
  })

  unitToSelect?.addEventListener('change', () => {
    console.log('unitToSelect')
    checkIfAllFieldsAreFilled()
  })
  
}

document.addEventListener('DOMContentLoaded', main)
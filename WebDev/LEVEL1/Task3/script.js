const form = document.querySelector("#converter-form");
const temperatureInput = document.querySelector("#temperature");
const inputUnit = document.querySelector("#input-unit");
const inputError = document.querySelector("#input-error");
const results = {
  C: document.querySelector("#celsius-result"),
  F: document.querySelector("#fahrenheit-result"),
  K: document.querySelector("#kelvin-result")
};

function formatTemperature(value) {
  return Number(value.toFixed(2)).toLocaleString("en-US", {
    maximumFractionDigits: 2
  });
}

function showError(message) {
  inputError.textContent = message;
  temperatureInput.setAttribute("aria-invalid", "true");
}

function clearError() {
  inputError.textContent = "";
  temperatureInput.removeAttribute("aria-invalid");
}

function convertTemperature(value, unit) {
  let celsius;

  if (unit === "C") celsius = value;
  if (unit === "F") celsius = (value - 32) * (5 / 9);
  if (unit === "K") celsius = value - 273.15;

  return {
    C: celsius,
    F: celsius * (9 / 5) + 32,
    K: celsius + 273.15
  };
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const rawValue = temperatureInput.value.trim();
  const value = Number(rawValue);
  const unit = inputUnit.value;

  if (!rawValue || !Number.isFinite(value)) {
    showError("Enter a numeric temperature to continue.");
    temperatureInput.focus();
    return;
  }

  const converted = convertTemperature(value, unit);
  if (converted.K < 0) {
    showError("That temperature is below absolute zero.");
    temperatureInput.focus();
    return;
  }

  clearError();
  Object.entries(results).forEach(([resultUnit, element]) => {
    element.textContent = formatTemperature(converted[resultUnit]);
  });
});

temperatureInput.addEventListener("input", () => {
  if (temperatureInput.getAttribute("aria-invalid") === "true") clearError();
});

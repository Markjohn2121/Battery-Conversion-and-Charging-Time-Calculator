function convertmAhToAh() {
  var mAh = parseFloat(document.getElementById("mAhInput").value);
  var Ah = mAh / 1000;
  document.getElementById("AhOutput").innerHTML = Ah.toFixed(3) + " Ah";
}

function convertAhTomAh() {
  var Ah = parseFloat(document.getElementById("AhInput").value);
  var mAh = Ah * 1000;
  document.getElementById("mAhOutput").innerHTML = mAh + " mAh";
}

function convertWattsTomAh() {
  var watts = parseFloat(document.getElementById("wattsInput").value);
  var voltage = parseFloat(document.getElementById("voltageInput").value);
  var mAh = (watts / voltage) * 1000;
  document.getElementById("mAhWattsOutput").innerHTML = mAh + " mAh";
  var Ah = mAh / 1000;
  document.getElementById("AhWattsOutput").innerHTML = Ah.toFixed(3) + " Ah";
}

function calculateChargingTime() {
  var batteryCapacity = parseFloat(document.getElementById("capacityInput").value);
  var chargingCurrent = parseFloat(document.getElementById("currentInput").value);
  var chargingTime = batteryCapacity / chargingCurrent;
  var hours = Math.floor(chargingTime);
  var minutes = Math.floor((chargingTime % 1) * 60);
  var seconds = Math.floor((((chargingTime % 1) * 60) % 1) * 60);
  document.getElementById("chargingTimeOutput").innerHTML = hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
}

function calculateBatteryLife() {
  var batteryCapacity = parseFloat(document.getElementById("capacityInput").value);
  var devices = document.getElementsByClassName("device");
  var batteryLifeOutput = document.getElementById("batteryLifeOutput");

  var totalDeviceConsumption = 0;
  for (var i = 0; i < devices.length; i++) {
    var deviceAh = parseFloat(devices[i].value);
    totalDeviceConsumption += deviceAh;
  }

  var remainingBatteryCapacity = batteryCapacity - totalDeviceConsumption;
  var remainingTime = remainingBatteryCapacity / (parseFloat(document.getElementById("currentInput").value) / 1000);
  var remainingHours = Math.floor(remainingTime);
  var remainingMinutes = Math.floor((remainingTime % 1) * 60);
  var remainingSeconds = Math.floor((((remainingTime % 1) * 60) % 1) * 60);

  batteryLifeOutput.innerHTML = remainingHours + " hours, " + remainingMinutes + " minutes, " + remainingSeconds + " seconds";
}

function addDeviceInput() {
  var deviceContainer = document.getElementById("deviceContainer");

  var newDeviceInput = document.createElement("input");
  newDeviceInput.type = "number";
  newDeviceInput.className = "device";
  newDeviceInput.placeholder = "Device (Ah)";

  deviceContainer.appendChild(newDeviceInput);
}

function removeDeviceInput() {
  var deviceContainer = document.getElementById("deviceContainer");
  var devices = deviceContainer.getElementsByClassName("device");

  if (devices.length > 0) {
    deviceContainer.removeChild(devices[devices.length - 1]);
  }
}

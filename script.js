
        function convertTemperature() {
            const fromUnit = document.getElementById('fromUnit').value;
            const toUnit = document.getElementById('toUnit').value;
            const temperature = parseFloat(document.getElementById('temperature').value);

            if (isNaN(temperature)) {
                document.getElementById('result').textContent = "Please enter a valid temperature.";
                return;
            }

            let convertedTemp;

            switch (fromUnit) {
                case 'C':
                    if (toUnit === 'F') {
                        convertedTemp = (temperature * 9 / 5) + 32;
                    } else if (toUnit === 'K') {
                        convertedTemp = temperature + 273.15;
                    } else if (toUnit === 'R') {
                        convertedTemp = (temperature + 273.15) * 9 / 5;
                    } else {
                        convertedTemp = temperature;
                    }
                    break;

                case 'F':
                    if (toUnit === 'C') {
                        convertedTemp = (temperature - 32) * 5 / 9;
                    } else if (toUnit === 'K') {
                        convertedTemp = (temperature - 32) * 5 / 9 + 273.15;
                    } else if (toUnit === 'R') {
                        convertedTemp = temperature + 459.67;
                    } else {
                        convertedTemp = temperature;
                    }
                    break;

                case 'K':
                    if (toUnit === 'C') {
                        convertedTemp = temperature - 273.15;
                    } else if (toUnit === 'F') {
                        convertedTemp = (temperature - 273.15) * 9 / 5 + 32;
                    } else if (toUnit === 'R') {
                        convertedTemp = temperature * 9 / 5;
                    } else {
                        convertedTemp = temperature;
                    }
                    break;

                case 'R':
                    if (toUnit === 'C') {
                        convertedTemp = (temperature - 491.67) * 5 / 9;
                    } else if (toUnit === 'K') {
                        convertedTemp = temperature * 5 / 9;
                    } else if (toUnit === 'F') {
                        convertedTemp = temperature - 459.67;
                    } else {
                        convertedTemp = temperature;
                    }
                    break;
            }

            document.getElementById('result').textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${toUnit}`;
        }
    

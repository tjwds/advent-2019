const fs = require('fs');
const readline = require('readline');

const inputInterface = readline.createInterface({
    input: fs.createReadStream('input/20191201.txt'),
    output: process.stdout,
    console: false
});

let total_fuel = 0;

// to find the fuel required for a module, 
// take its mass, divide by three, round down, and subtract 2.
const module_fuel = mass => {
    // ~~ is NOT twice, quickly approximating Math.floor
    let required_fuel = ~~(Number(mass) / 3) - 2;
    if (required_fuel > 0) {
        total_fuel += required_fuel;
        module_fuel(required_fuel);
    }
}

inputInterface.on('line', line => {
    module_fuel(line);
});

inputInterface.on('close', () => {
    console.log(total_fuel);
})

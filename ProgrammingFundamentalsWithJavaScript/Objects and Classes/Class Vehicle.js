class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = Object.assign({}, parts);
        this.parts.quality = this.parts.engine * this.parts.power;
        this.fuel = fuel;
    }

    fuel() {
        return this.parts.quality;
    }

    drive(fuelLost) {
        this.fuel -= fuelLost;
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);

vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

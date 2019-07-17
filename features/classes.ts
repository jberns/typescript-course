class Vehicle {
  constructor(public color: string) { }

  protected drive(): void {
    console.log('chugga chugga');
  }
  public honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);


class CarClass extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  };
  protected drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
  }
}

const newCar = new CarClass(4, 'red');
newCar.startDrivingProcess();
newCar.honk();
newCar.color;


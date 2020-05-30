handleMarket(name) {
  const cars = this.state.cars.concat() //клонирование
  const car = cars.find(c => c.name === name)
  car.marked = !car.marked
}

/** 1 */
handleMarket(name) {
  const cars = this.state.cars.concat() //клонирование
  const car = cars.find(c => c.name === name)
  car.marked = !car.marked
}


/** 2 */
titleChange(name) {
  this.setState({title: name})
}
...
<input 
  onCange={(e)=>this.titleChange(e.target.value)}
  value={this.state.title}
/>
    

/** 3 */
...
<div>{this.props.children}</div>


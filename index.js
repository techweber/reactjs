import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Car from './AppCar.js';
import reportWebVitals from './reportWebVitals';

// class Car {
// 	constructor(name){
// 		this.brand = name;
// 	}

// 	present() {
// 		return 'I have a '+ this.brand;
// 	}
// }

// class Model extends Car {
// 	constructor(name,mod){
// 		super(name);
// 		this.model = mod;
// 	}

// 	show(){
// 		return this.present() + ', it is a '+ this.model;
// 	}
// }

// var mycar = new Model("Honda","Accord");

// const myfirstelement = mycar.show();

// const myelement = (
// 	<div>
// 		<h1>I am a Header</h1>
// 		<h1>I am a Header Too.</h1>
// 	</div>
// 	);

// // const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

// ReactDOM.render(myelement,document.getElementById('root'));

// class Car extends React.Component {
//    render() {
//     return <h2>I am a Car!</h2>;
//   }
// }

// class Garage extends React.Component {
// 	render() {
// 		return (
// 		<div>
// 		<h1>Who lives in my Garage?</h1>
// 		<Car />
// 		</div>
// 		);
// 	}
// }


// class Car extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			brand: "Ford",
// 			model: "Mustag",
// 			color: "red",
// 			year: 1964
// 		};
// 	}

// 	changeColor = () => {
// 		this.setState({color:"blue"});
// 	}

// 	render() {
// 		return (
// 			<div>
// 			<h1>My {this.state.brand}</h1>
// 			<p>
// 			It is a {this.state.color} {this.state.model} 
// 			from {this.state.year}.
// 			</p>
// 			<button
// 			type="button"
// 			onClick={this.changeColor}
// 			>Change color</button>
// 			</div>
// 			);
// 	}
// }

// class Garage extends React.Component {
// 	render() {
// 		const carinfo = {name: "Ford",model: "Mustang"};
// 		return (
// 		<div>
// 		<h1>Who lives in my Garage?</h1>
// 		<Car brand={carinfo['name'] + ' ' + carinfo['model']} />
// 		</div>
// 		);
// 	}
// }

// class Container extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {show: true};
// 	}

// 	delHeader = () => {
// 		this.setState({show: false});
// 	}

// 	render() {
// 		let myheader;
// 		if(this.state.show){
// 			myheader = <Child />;
// 		};
// 		return (
// 			<div>
// 			{myheader}
// 			<button type="button" onClick={this.delHeader}>Delete Header</button>
// 			</div>
// 		);
// 	}

// }


// class Child extends React.Component{
// 	componentWillUnmount(){
// 		alert('The component named Header is about to be unmounted');
// 	}
// 	render(){
// 		return (
// 		<h1>Hello World</h1>
// 		);
// 	}
// }

// class Football extends React.Component {
//   shoot = (a, b) => {
//     alert(b.type);
    
//     'b' represents the React event that triggered the function,
//     in this case the 'click' event
    
//   }
//   render() {
//     return (
//       <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
//     );
//   }
// }

// ReactDOM.render(<Football />, document.getElementById('root'));

// class MyForm extends React.Component {

// 	constructor(props){
// 		super(props);
// 		this.state = { username: '', age: null, errormessage:'' };
// 	}


// 	myChangeHandler = (event) => {
// 		let nam = event.target.name;
// 		let val = event.target.value;
// 		let err = '';
// 		if(nam==='age'){
// 			if(val!='' && !Number(val)){
// 				err = <strong>Your age must be a number</strong>;
// 			}
// 		}
// 		this.setState({errormessage: err});
// 		this.setState({[nam]:val});
// 	}

// 	render () {
// 		return (
// 			<form onSubmit={this.mySubmitHandler}>
// 			<h1>Hello {this.state.username}{this.state.age}</h1>
// 			<p>Enter your name:</p>
// 			<input type="text" name="username" onChange={this.myChangeHandler} />
// 			<p>Enter your age:</p>
// 			<input type="text" name="age" onChange={this.myChangeHandler} />
// 			<input type="submit" />
// 			{this.state.errormessage}
// 			</form>
// 		);
// 	}
// }

// class MyForm extends React.Component {

// 	constructor(props){
// 		super(props);
// 		this.state = { 
// 			description: 'The content of a text area goes in the value attribute', 
// 		};
// 	}

// 	render () {
// 		return (
// 			<form>
// 			<textarea value={this.state.description} />
// 			</form>
// 		);
// 	}
// }


class MyForm extends React.Component {

	constructor(props){
		super(props);
		this.state = { 
			mycar: 'Volvo', 
		};
	}

	render () {
		return (
			<form>
			<select value={this.state.mycar}>
			<option value="Ford">Ford</option>
			<option value="Volvo">Volvo</option>
			<option value="Fiat">Fiat</option>
			</select>
			</form>
		);
	}
}






ReactDOM.render(<MyForm />, document.getElementById('root'));


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

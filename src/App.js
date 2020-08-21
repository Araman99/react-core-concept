import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = ['Aman','Nowshin','Nahid','Hasan']
  const products = [{name: 'Photoshop',
  price: '$99.99'},
  {name: 'Illustrator',
  price: '$60.99'},
  {name: 'PDF Reader',
  price: '$9.99'},
]

  return (
    <div className="App">
      <header className="App-header">
        <p>Start developing with react</p>
        <Counter></Counter>
        <ul>
          {
            name.map(name => <li>{name}</li>)
          }
        </ul>
        <div>
        {
          products.map(pd =><Product product = {pd}></Product> )
        }
        </div>
        <Person name="Amanur Rahman" job="Web Developer, love to programming"></Person>
        <Person name="Ashrafur Rahman" job="Web Developer, love to programming"></Person>
        <Person name="Atikur Rahman" job='Student'></Person>
        <Person name="Habibia Jannat Nowshin" job='Student'></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handelIncrease =() => {
    setCount(count+1);
  };
  return(
    <div>
        <h4>Count: {count}</h4>
        <button onClick={handelIncrease}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:"1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: '200px',
    width: '200px',
    float: 'left',
    fontSize: '16px',
    margin: '10px'
  }
  console.log(props);
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h1>{props.product.price}</h1>
      <button>Buy Now</button>
    </div>
    )
}

function Person(props){
  return <div style={{color: "cyan",border: '4px solid yellow'}}>
  <h1>Name: {props.name}</h1>
<h3>My Profession: {props.job}</h3>
  </div>
}
export default App;

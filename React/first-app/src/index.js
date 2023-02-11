import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//.****************** Importing Custom components************************
import Card from "./Components/Card"
import Avatar from "./Components/Avatar"

const root = ReactDOM.createRoot(document.getElementById('root'));

//.****************************************************************************************************

// const Info_Style = {
//   backgroundColor: "cyan",
//   color: "black",
//   padding: "30px"
// }
// const MyName = (
//   <div>
//     <h1 style={{ backgroundColor: "#FF0000", color: "black" }}> Name : Faraz Ali Ahmad</h1>

//     <h1 style={Info_Style}> Roll : 191044</h1> //.    Passing Style

//     <h1 style={{ backgroundColor: "green", color: "white" }}> Branch : CSE </h1>
//   </div>
// )

// root.render(MyName);

//.****************************************************************************************************


// function Welcome(props) //.       Components with parameter
// {
//   return <h1>This is Faraz {props.lastName}</h1>
// }

// function Card({FirstName , ...props}) {
//   return (
//     <div>
//       <h1>Computer Science Engineering  </h1>
//       <h3>Name using Destructureing : {FirstName} {props.middleName} {props.lName}</h3>
//       <h1></h1>
//     </div>
//   )
// }

// let name = "Ali Ahmad"
// let mName = "Ali"

// root.render //.   Using multiple props
//   (
//     <>
//       <Welcome lastName={name} />
//       <Welcome lastName={name} />
//       <Welcome lastName={name} />

//       <Card FirstName="Faraz" middleName= {mName} lName = "Ahmad"/>
//     </>
//   )

//.************************************** Components Nesting   ************************************************

// function Card({ FullName, ...props }) {

//   const Card_Style= {
//     padding: "10px",
//     border : "2px solid black",
//     boxShadow :"2px 2px 2px grey",
//     margin : "20px"
//   }


//   return (
//     <div style={Card_Style}>
//       <Avatar image={props.image} name={FullName} />
//       <h1>Computer Science Engineering  </h1>
//       <h1>Name : {FullName} </h1>
//       <h1>Roll : {props.roll}</h1>
//     </div>
//   )
// }

// function Avatar(props) {
//   return (
//     <img src={props.image} alt={props.name} />
//   );
// }

const grid_box = {
  display :"grid",
  gridTemplateColumns : "auto auto auto"
}


let name = "Faraz Ali Ahmad";
let image_Source = "https://via.placeholder.com/200"

root.render(
  <div style={grid_box}>
    <Card FullName={name} roll="191044" image = {image_Source} />;
    <Card FullName={name} roll="191044" image = {image_Source} />;
    <Card FullName={name} roll="191044" image = {image_Source} />;
    <Card FullName={name} roll="191044" image = {image_Source} />;
    <Card FullName={name} roll="191044" image = {image_Source} />;
    <Card FullName={name} roll="191044" image = {image_Source} />;
  </div>
)





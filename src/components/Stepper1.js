import React from "react";

export default function Stepper1(props) {
    console.log(props.data);
    return (
        <div>
            <h4>Full Name : </h4><input type="text" name="name" value={props.data.name} onChange={props.handleChange} required/>
            <h4>Age : </h4><input type="number" name="age" value={props.data.age} onChange={props.handleChange}/>
            <h4>Marriage Status : </h4>
            <select name="status" value={props.data.status} onChange={props.handleChange}>
                <option name="NoOption" value="NoOption"> Select an option </option>
                <option name="Single" value="Single"> Single </option>
                <option name="Married" value="Married"> Married </option>
                <option name="Divorced" value="Divorced"> Divorced </option>
            </select>
        </div>
    )
}
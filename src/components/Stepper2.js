import React from "react";

export default function Stepper2(props) {
    console.log(props.data);
    return (
        <div>
            <h4>Role : </h4><input type="text" name="role" value={props.data.role} onChange={props.handleChange}/>
            <h4>Experience in years : </h4><input type="number" name="experience" value={props.data.experience} onChange={props.handleChange}/>
            <h4>Pay-Range : </h4>
            <select name="payrange" value={props.data.payrange} onChange={props.handleChange}>
                <option name="NoOption" value="NoOption"> Select an option </option>
                <option name="range1" value="range1"> 0-10 LPA </option>
                <option name="range2" value="range2"> 10-20 LPA </option>
                <option name="range3" value="range3"> 20+ LPA </option>
            </select>
        </div>
    )
}
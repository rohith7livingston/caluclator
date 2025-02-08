import React, { useState } from "react";
import './Index.css';
import axios from 'axios';
import Button from "./Buttons";
let Index = () => {
  const [Result, SetResult] = useState("");
  const handleClick = (e) => {
    SetResult(Result.concat(e.target.value));
  };
  const clear = () => {
    SetResult("");
  };
  const backspace = () => {
    SetResult(Result.slice(0, -1));
  };
  const calculate = () => {
    try {
        const calculation = eval(Result).toString(); 
        SetResult(calculation);
        console.log({calculation});
        axios.post('http://localhost:3001/calculator', { result: calculation })
    } catch (error) {
        SetResult("Error");
    }
};
const history = async (req,res) =>
{
  try{
    const response = await axios.get("http://localhost:3001/calculator/history");

    // Log the full response
    console.log("Full Response:", response);

    // Log just the data part
    console.log("History Data:", response.data);
  }
  catch(err)
  {
    console.log(err.message);
  }
};
  return (
    <div className="Calci">
        <input type="text" className="textfield" value={Result} readOnly />
        <div className="Keypad">
        <Button className="clear" onClick={clear} label={"clear"}/>
          <Button className="X" onClick={backspace} label={"X"}/>
          <Button className="reminder" onClick={handleClick} label={"%"}/>
          <Button className="mul" value={"*"} onClick={handleClick} label={"*"}/>
          <Button className="7" value={7} onClick={handleClick} label={"7"}/>
          <Button className="8" value={8} onClick={handleClick} label={"8"}/>
          <Button className="9" value={9} onClick={handleClick} label={"9"}/>
          <Button className="divison" value={"/"} onClick={handleClick} label={"/"}/>
          <Button className="3" value={3} onClick={handleClick} label={"3"}/>
          <Button className="4" value={4} onClick={handleClick} label={"4"}/>
          <Button className="5" value={5} onClick={handleClick} label={"5"}/>
          <Button className="subtract" value={"-"} onClick={handleClick} label={"-"}/>
          <Button className="1" value={1} onClick={handleClick} label={"1"}/>
          <Button className="2" value={2} onClick={handleClick} label={"2"}/>
          <Button className="_" value={"."} onClick={handleClick} label={"."}/>
          <Button className="add" value={"+"} onClick={handleClick} label={"+"}/>
          <Button className="0" value={0} onClick={handleClick} label={"0"}/>
          <Button className="0" value={0} onClick={handleClick} label={"00"}/>
          <Button className="equal" onClick={calculate} label={"="}/>
        </div>
        <button className="history" valur={history} onClick={history}>History</button>
    </div>
  );
}

export default Index;

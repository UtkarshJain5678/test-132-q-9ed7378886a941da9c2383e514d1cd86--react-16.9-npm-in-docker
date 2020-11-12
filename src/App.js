import React, { useState } from "react";
import { evaluate } from "mathjs";
import Grid from "@material-ui/core/Grid";
// import logo from './logo.svg';
import './App.css';

function App() {
  const [expression, setExpression] = useState("0");
  const handleClick = (value) => {
    const newValue = expression.toString() + value;
    setExpression(newValue);
  };

  const calculateResult = () => {
    try {
      if (expression.includes("%")) {
        const newExpression = expression.replace("%", "/100*");
        var calculatedValue = evaluate(newExpression);
        setExpression(calculatedValue);
      } else {
        const calculatedValue = evaluate(expression);
        if (calculatedValue === Infinity || calculatedValue === -Infinity) {
          // alert("Wrong Expression Given");
          setExpression("Math Error");
        } else {
          setExpression(calculatedValue);
        }
      }
    } catch (ex) {
      // alert("An Math Error Occured");
      setExpression("Math Error");
    }
    // console.log(expression);
  };

  const clearAll = () => {
    setExpression("0");
  };

  const deleteFunction = () => {
    // if (expression.toString().length === 0) {
    //   alert("No values to delete");
    //   setExpression("0");
      // console.log("Yaha AAYA");
    // }
    // console.log(expression.slice(0,expression.length-1));
    try{
      var updatedDeletedExpression = expression.toString().slice(0, expression.toString().length - 1);
      setExpression(updatedDeletedExpression);
    }catch (ex) {
      // alert("An Math Error Occured");
      setExpression("Math Error");
    }
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="display">{expression}</div>
      <div>
        <Grid container>
          <Grid item xs={3}>
            <button className="bttn" id="clear" onClick={() => clearAll()}>
              AC
            </button>
          </Grid>

          <Grid item xs={3}>
            <button
              className="bttn"
              id="delete"
              onClick={() => deleteFunction()}
            >
              DELETE
            </button>
          </Grid>

          <Grid item xs={3}>
            <button
              className="bttn"
              id="equal"
              onClick={() => calculateResult()}
            >
              =
            </button>
          </Grid>

          <Grid item xs={3}>
            <button
              className="bttn operator"
              id="divide"
              onClick={() => handleClick("/")}
            >
              /
            </button>
          </Grid>

          <Grid item xs={3}>
            <button className="bttn" id="7" onClick={() => handleClick("7")}>
              7
            </button>
          </Grid>

          <Grid item xs={3}>
            <button className="bttn" id="8" onClick={() => handleClick("8")}>
              8
            </button>
          </Grid>

          <Grid item xs={3}>
            <button className="bttn" id="9" onClick={() => handleClick("9")}>
              9
            </button>
          </Grid>

          <Grid item xs={3}>
            <button
              className="bttn operator"
              id="multiply"
              onClick={() => handleClick("*")}
            >
              *
            </button>
          </Grid>

          <Grid item xs={3}>
            <button className="bttn" id="4" onClick={() => handleClick("4")}>
              4
            </button>
          </Grid>

          <Grid item xs={3}>
            <button className="bttn" id="5" onClick={() => handleClick("5")}>
              5
            </button>
          </Grid>

          <Grid item xs={3}>
            <button className="bttn" id="6" onClick={() => handleClick("6")}>
              6
            </button>
          </Grid>

          <Grid item xs={3}>
            <button
              className="bttn operator"
              id="subtract"
              onClick={() => handleClick("-")}
            >
              -
            </button>
          </Grid>

          <Grid item xs={3}>
            <button className="bttn" id="1" onClick={() => handleClick("1")}>
              1
            </button>
          </Grid>

          <Grid item xs={3}>
            <button className="bttn" id="2" onClick={() => handleClick("2")}>
              2
            </button>
          </Grid>

          <Grid item xs={3}>
            <button className="bttn" id="3" onClick={() => handleClick("3")}>
              3
            </button>
          </Grid>

          <Grid item xs={3}>
            <button
              className="bttn operator"
              id="add"
              onClick={() => handleClick("+")}
            >
              +
            </button>
          </Grid>

          <Grid item xs={6}>
            <button className="bttn" id="0" onClick={() => handleClick("0")}>
              0
            </button>
          </Grid>

          <Grid item xs={3}>
            <button className="bttn" id="dot" onClick={() => handleClick(".")}>
              .
            </button>
          </Grid>

          <Grid item xs={3}>
            <button
              className="bttn operator"
              id="percentile"
              onClick={() => handleClick("%")}
            >
              %
            </button>
          </Grid>
        </Grid>
      </div>

    </div>
  );
}

export default App;
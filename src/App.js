import "./App.css";

import { useState } from 'react';
function App() {
const [weight ,setweight]=useState(0);
const [height ,setheight]=useState(0);
const [bmi ,setbmi]=useState(' ');
const [message ,setmessage]=useState(' ');

// loginc......
let bmical=(e)=>{
  e.preventDefault();
  if(weight===0 || height===0){
    alert('please enter valid weight and valid height');

  }
  else{
    let bmi=(weight/(height*height)*703);
    setbmi(bmi.toFixed(1));

    if(bmi<25){
      setmessage('you are underweight');
    }
    else if(bmi>=25 && bmi<=30){
      setmessage('you are healthy weight');

    }
    else{
      setmessage('You ar overweight')
    }
  }

}
// reload....
let reload=()=>{
  window.location.reload();
}






  return (
    <div className="App">
      <div className="container">
        <div className="uu">

        <h1 className="center">BMI Calculator</h1>
        <form onSubmit={bmical}>
          <div>
            <label>weight (lbs)</label>
            <input
              type="number"
              placeholder="Enter the weight value"
              value={weight}
              onChange={(e) => {
                setweight(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Height in (lbs)</label>
            <input
              type="number"
              placeholder="Enter the height value"
              value={height}
              onChange={(e) => {
                setheight(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onclick={reload} type="submit">
              reload
            </button>
          </div>
          <div className="centre">
            <h3>your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default App;

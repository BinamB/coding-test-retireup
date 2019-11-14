import React from 'react';
import PostTable from './table/post';
import data from './data/returns'; //import json data

import RangeSlider from './slider/slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import './css/main.css';

//make it stateful so that we can dynamically change values
class App extends React.Component{ 

  constructor(props){
    var sorted = data.sort((a,b)=> a.year - b.year); //sort by ascending order
    //slider changes as you add or remove data from your database 
    var min = sorted[0]["year"];
    var max = sorted[data.length-1]["year"];

    //props to be exported for slider and table
    super(props);
    this.state = {
      data: sorted,
      min: min,
      max: max,
      sliderValues: [min, max]
    }; 
  }

  handleChange = sliderValues => {
    this.setState({ sliderValues });
  };

  render(){
    const { sliderValues } = this.state;

      return (  
        <div class = "container">
          {/* Slider Component */}
            <RangeSlider
            min={this.state.min}
            max={this.state.max}
            onChange={this.handleChange}
            defaultValue={sliderValues}
            />
            <h5 class="rangeNum">{sliderValues[0]} - {sliderValues[1]}</h5>
          {/* Table Component */}
            <PostTable 
              data={this.state.data}
              range={sliderValues}
              />
        </div>
        );
  }
}

export default App;

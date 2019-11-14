import React from 'react';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default function RangeSlider(props) {
  const m = props.min;
  const M = props.max;
  const marks = {1926:m, 2018:M}; //figure out to make this dynamic 
  const wrapperStyle = { width: "70%", margin: 50, marginLeft:"20%"};
  return (
      <div style = {wrapperStyle}>
        <Range
        placement="top"
        min={m}
        max={M}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        marks={marks}
        allowCross = {false}
        />
      </div>
    );
  }
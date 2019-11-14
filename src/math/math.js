import React from 'react';
import '../css/post.css';

export default function CumulativeReturns(props) {
    let cur = props.cur;
    let init = props.init;
    let res = (cur-init)/init;//cumulative returns result here
    return (
        <div class={res < 0 ? "negatives" : ""}>{res.toFixed(3)}</div>  //fixed to 3 decimal places
    );
  }
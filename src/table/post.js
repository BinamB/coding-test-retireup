import React from 'react';
import CumulativeReturns from '../math/math'
import '../css/post.css';


export default function PostTable(props){
    let start = props.range[0]-1926;
    let end = props.range[1]-1925;
    let tableData = props.data.slice(start, end);//range of table data to be shown
    let initial = tableData[0].totalReturn;//keep track of initial year in the range for calculations

    return(
        <table>
            <h5 class="tableTitle">S&P 500 Total Returns By Year</h5>
            <tr>
                <th>Year</th>
                <th>Total Return</th>
                <th>Cumulative Returns</th>
            </tr>
                {
                    tableData.map(row => (
                        <tr>
                            <td>{row.year}</td>
                            <td class={row.totalReturn < 0 ? "negatives": ""}>{row.totalReturn}</td>
                            <td><CumulativeReturns init={initial} cur={row.totalReturn}/></td>
                        </tr>
                    ))
                }
        </table>
    );
}
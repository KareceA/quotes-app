import axios from "axios";
import React, { useState } from "react";
import '../App.css';

function RandomOuotes() {
    const [quote, setQuote] = useState()

    //this runs the function anytime the component is leaded
    // useEffect(() => {
    //     getQuote();
    //   }, []);

    const getQuote = () =>{
        axios.get('https://api.quotable.io/random')
        .then(
            response => {
                console.log(response)
                setQuote(response.data)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    } 

    return(
        <div className="App">
            <button onClick={getQuote}></button>
            {/* <ul>
          {quote.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))} */}
        {/* </ul> */}
        </div>
    )

}

export default RandomOuotes;
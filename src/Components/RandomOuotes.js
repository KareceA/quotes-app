import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css";

function RandomOuotes() {
  const [quote, setQuote] = useState(null);

  //   this runs the function anytime the component is leaded
  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      console.log(response);
      setQuote(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      {quote && (
        <div>
          <h2>{quote.author}</h2>
          <p>{quote.content}</p>
        </div>
      )}
      <button onClick={getQuote}>Generate Quote</button>
    </div>
  );
}

export default RandomOuotes;

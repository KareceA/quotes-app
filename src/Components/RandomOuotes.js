import axios from "axios";
import React, { useState, useEffect } from "react";
import "./RandomQuote.css";

function RandomOuotes() {
  const [quote, setQuote] = useState(null);

  //   this runs the function anytime the component is loaded
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
    //add a background pattern later
    <div className="App">
      {quote && (
        <div>
          <p className="quote-content">{'"' + quote.content + '"'}</p>
          <p className="quote-author">{"-" + quote.author}</p>
        </div>
      )}
      <button className="quote-button" onClick={getQuote}>
        New Quote
      </button>
    </div>
  );
}

export default RandomOuotes;

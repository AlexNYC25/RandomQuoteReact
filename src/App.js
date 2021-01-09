
import './App.css';
import React from 'react';



function App() {
  const[quoteNumber, setQuoteNumber] = React.useState(-1);
  let quotesObject = {
    quotes : [
      {
        quote: "Creativity is intelligence having fun.",
        author: "Albert Einstein",
        image: "https://www.nobelprize.org/images/einstein-12923-content-portrait-mobile-tiny.jpg"
      },
      {
        quote: "I destroy my enemies when I make them my friends.",
        author: "Abraham Lincoln",
        image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU5MDUzMTE0Mzk2MTI0OTUy/abraham-lincoln-1809---18652c-sixteenth-president-of-the-united-states-of-america-photo-by-stock-montagestock-montagegetty-images_promo.jpg"
      },
      {
        quote: "Champions keep playing until they get it right.",
        author: "Billie Jean King",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/BJK_headshot_2011_5x7_300dpi.jpg/428px-BJK_headshot_2011_5x7_300dpi.jpg"
      },
      {
        quote: "Genius is 1% inspiration, 99% perspiration.",
        author: "Thomas Edison",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/800px-Thomas_Edison2.jpg"
      },
      {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/480px-Mahatma-Gandhi%2C_studio%2C_1931.jpg"

      },
      {
        quote: "Numbing the pain for a while will only make it worse when you finally feel it.",
        author: "Albus Dumbledore",
        image: "https://upload.wikimedia.org/wikipedia/en/f/fe/Dumbledore_and_Elder_Wand.JPG"
      }
    ]
  }

  let getNewNumber = () => {
    let maxNumberOfElements = quotesObject.quotes.length  
    let newNumber = Math.floor(Math.random() * Math.floor(maxNumberOfElements))
    while(newNumber === quoteNumber){
      newNumber = Math.floor(Math.random() * Math.floor(maxNumberOfElements))
    }
    setQuoteNumber(newNumber);
  }

  if(quoteNumber === -1){
    getNewNumber()
  }

  let retrieveQuote = (number) => {
    if(number < 0){
      return ""
    }
    let arr = quotesObject.quotes;

    return arr[number].quote
  }

  let retrieveAuthor = (number) => {
    if(number < 0){
      return ""
    }
    let arr = quotesObject.quotes;

    return arr[number].author
  }

  let retrieveImage = (number) => {
    if(number < 0){
      return ""
    }
    let arr = quotesObject.quotes;
    return arr[number].image
  }

  return (
    <div id="mainApp" className="App container">
      <div id="welcome-message" class="pt-2">
        <p className="h1">Hello and I Hope one of these quotes may inspire you</p>

      </div>
      <br />
      <div id="quote-area" className="container rounded-3">
        <p id="quote-text" className="h2 text-center p-1">
          <strong>{ retrieveQuote(quoteNumber) }</strong>
        </p>
        <img src={retrieveImage(quoteNumber)} alt="quote author"/>
        <p id="quote-author" className="h3 text-center p-1 pt-3 ">
          <i>{retrieveAuthor(quoteNumber)}</i>
        </p>
        <button
          className="btn btn-primary pb-2"
          type="submit"
          onClick={getNewNumber}
        >
          Get a New Quote
        </button>
        <br />
      </div>
    </div>
  );
}

export default App;

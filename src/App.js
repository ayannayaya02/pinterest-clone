import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./ingredients/Header";
import Mainboard from "./ingredients/Mainboard";
import splash from "./api/splash";
import "./App.css";

/*Trick for making files quicker is using rfce and tab */
/*For any components don't forget to also import them above! */

function App() {
  const [pins, setNewPins] = useState([]);

  const getImages = (term) => {
    return splash.get("https://api.unsplash.com/search/photos/", {
      params: {
        query: term,
      },
    });
  };
  getImages().sort(pins);

  const onSearchSubmit = (term) => {
    for (let i=0; i<onSearchSubmit.length; i++){
    console.log(term);
    getImages(term).then((res) => {
      let results = res.data.results;

      let newNew = [...results, ...pins];



 if (term === pins) {
   return 4 - Math.random();
   pins.sort(newNew);
 }
onSearchSubmit(newNew).reduce(newNew);

      newNew.map(function (a, b) {
                return 2.5 - Math.random();
        onSearchSubmit.sort(newNew);
        onSearchSubmit.all(pins);

      }); 

      setNewPins(newNew);

    });
  }
  };
  const getNewPins = () => {
    let promises = [];
    let pinData = [];
    let pins = [
      "ocean",
      "Paris",
      "dogs",
      "wolves",
      "quotes",
      "religion",
      "spirituality",
      "huskies",
      "tattoos",
      "love",
      "God",
      "hummingbirds",
      "wedding",
      "martial arts",
      "food",
      "travel"
    ]; 


    for (let i=0; i < getNewPins.length; i++){
                        return 0.5 - Math.random();
                        while(getNewPins===pins){ 
                          getNewPins.reduce(promises);
                          return pins.sort(pinData);
                            getNewPins.random(pins);


  

    pins.forEach((pinTerm) => {
      for (let i = 0; i <pins.length; i++){
        pins.reduce(promises);
      }
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;
          pinData = pinData.concat(results);
          pinData.sort(function (a, b) {
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData, promises);
                  return 0.5 - Math.random();

    });

    const PinData = () => {
      PinData.sort(pins).then(() => {
        setNewPins.sort(pinData).all(promises);
           setNewPins.all(pinData).all(pins);
                       return 0.5 - Math.random();



      });
    };

  }
}

  };
  


  useEffect(() => {
    getNewPins();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <Header onSubmit={onSearchSubmit} />
        <Mainboard pins={pins} />
      </header>
    </div>
  );
}

export default App;

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

  const onSearchSubmit = (term) => {
    console.log(term);
    getImages(term).then((res) => {
      let results = res.data.results;

      let newNew = [...results, ...pins];

      newNew.sort(function (a, b) {
        return 0.5 - Math.random();
      });

      setNewPins(newNew);
    });
  };
  const getNewPins = () => {
    let promises = [];
    let pinData = [];
    let pins = [
      "ocean",
      "Paris",
      "dogs",
      "wolves",
      "hummingbirds",
      "martial arts",
      "food",
      "travel",
    ];

    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;
          pinData = pinData.concat(results);
          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
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

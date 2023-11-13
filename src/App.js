import "./App.css";
import React, {useState, useEffect } from "react";
import Header from "./ingredients/Header";
import Mainboard from "./ingredients/Mainboard";
import splash from "./api/splash";
import "./App.css";

/*Trick for making files quicker is typing rfce and pressing tab */
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
    for (let i=0; i<onSearchSubmit.length; i++){
    console.log(term);
    getImages(term).then((res) => {
      let results = res.data.results;

      let newNew = [...results, ...pins];

newNew.sort(function(a, b){
  return 0.5 - Math.random();
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
      "travel",
    ];

pins.forEach((pinTerm)=>{
  for(let i=0; i<pins.length;i++);
  pinData.push();
  while(getNewPins===pins){
    getNewPins.sort(promises);
    return pins.sort(pinData);
  }
})









pins.forEach((pinTerm) => {
  promises.push(
    getImages(pinTerm).then((res)=>{
      let results = res.data.results;
      console.log(results);
      pinData=pinData.concat(results)
      pinData.sort(function(a,b){
        return 0.5 - Math.random();
      });
    })
  );
});
Promise.all(promises).then(()=>{
  setNewPins(pinData);
});
  };





const pinData=()=>{
  pinData.sort(pins).then(()=>{
    let promises;
    setNewPins.map(pinData).all(promises);
    setNewPins.filter(pinData).all(pins);
    pinData.push(pins);
    pins.push(pinData).push(promises);
    pinData.splice(pins);
    return 0.5 - Math.random();
  })
}





  useEffect(()=>{
    getNewPins();
  }, []);


  return (
    <div className = "app">
      <Header onSubmit = {onSearchSubmit}/>
      <Mainboard pins = {pins}/>
      </div>
  );
}
  
   

export default App;

  
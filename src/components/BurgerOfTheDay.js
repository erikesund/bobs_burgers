import React from "react";
import "../BurgerOfTheDay.css"

const BurgerOfTheDay = ({foundBurger}) => {

  return (
  <div className="chalkboard">
    <img src="/chalkboard.png" alt="Chalkboard" width="250px"></img>
    <div className="centered">
      Burger of the Day: { 
        foundBurger != null?  foundBurger.name : "There is no burger of the day in this episode :("
      }
    </div>
    <div className="bottom">
      {foundBurger != null? <p>Price: {foundBurger.price}</p>: null}
    </div>
  </div>
  )
};


export default BurgerOfTheDay;
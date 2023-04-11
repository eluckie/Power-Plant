import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import { newPlant, storeState, stateControl, changeState, feed, blueFood, hydrate, superWater, closed, drawBlinds } from './js/plant.js';

window.onload = function () {

  // This function has side effects because we are manipulating the DOM.
  // Manipulating the DOM will always be a side effect. 
  // Note that we only use one of our functions to alter soil. 
  // You can easily add more.
  document.getElementById('feed').onclick = function () {
    const newState = stateControl(blueFood);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('feed2').onclick = function () {
    const newPlantState = newPlant(blueFood);
    document.getElementById('new-soil').innerText = `Soil: ${newPlantState.soil}`;
  };

  document.getElementById('little-feed').onclick = function () {
    const newState = stateControl(feed);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('little-feed2').onclick = function () {
    const newPlantState = newPlant(feed);
    document.getElementById('new-soil').innerText = `Soil: ${newPlantState.soil}`;
  };

  document.getElementById('hydrate').onclick = function () {
    const newState = stateControl(superWater);
    document.getElementById('water-value').innerText = `Water: ${newState.water}`;
  };

  document.getElementById('hydrate2').onclick = function () {
    const newPlantState = newPlant(superWater);
    document.getElementById('new-water').innerText = `Water: ${newPlantState.water}`;
  };

  document.getElementById('little-hydrate').onclick = function () {
    const newState = stateControl(hydrate);
    document.getElementById('water-value').innerText = `Water: ${newState.water}`;
  };

  document.getElementById('little-hydrate2').onclick = function () {
    const newPlantState = newPlant(hydrate);
    document.getElementById('new-water').innerText = `Water: ${newPlantState.water}`;
  };

  document.getElementById('drawBlinds').onclick = function () {
    const newState = stateControl(closed);
    document.getElementById('sun-value').innerText = `No Sun: ${newState.sun}`;
  };

  document.getElementById('drawBlinds2').onclick = function () {
    const newPlantState = newPlant(closed);
    document.getElementById('new-sun').innerText = `No Sun: ${newPlantState.sun}`;
  };

  document.getElementById('sun').onclick = function () {
    const newState = stateControl(drawBlinds);
    document.getElementById('sun-value').innerText = `Sun: ${newState.sun}`;
  };

  document.getElementById('sun2').onclick = function () {
    const newPlantState = newPlant(drawBlinds);
    document.getElementById('new-sun').innerText = `Sun: ${newPlantState.sun}`;
  };

  // document.getElementById('new-plant').onclick = function () {
  //   // const createNewPlant = newPlant();
  //   let newDiv = document.createElement('div');
  //   let div = document.getElementById('new');
    
  //   newDiv.innerText = `New plant created! Take care of me`;
  //   div.append(newDiv);
  // };

  // This function doesn't actually do anything useful in this application 
  // — it just demonstrates how we can "look" at the current state 
  // (which the DOM is holding anyway). 
  // However, students often do need the ability to see the current state 
  // without changing it so it's included here for reference.
  document.getElementById('show-state').onclick = function () {
    // We just need to call stateControl() without arguments 
    // to see our current state.
    const currentState = stateControl();

    document.getElementById('total-value').innerText = `Soil: ${currentState.soil}\nWater: ${currentState.water}\nSun: ${currentState.sun}`;
  };
};

storeState();
changeState();
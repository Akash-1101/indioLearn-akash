import Header  from './components/Header';
import Become from "./components/Become";
import WhyChooseUs from "./components/WhyChooseUs"
import WhatWillYouLearn from "./components/WhatWillYouLearn"
import PlacementAssitance from "./components/PlacementAssitance"
import Kickoffyourjourney from "./components/Kickoffyourjourney"
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Become/>
      <WhyChooseUs/>
      <WhatWillYouLearn/>
      <PlacementAssitance/>
      <Kickoffyourjourney/>
    </div>
  );
}

export default App;

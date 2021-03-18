import React, {useState} from "react";
import Nav from "./Nav";
import Spotlight from "./Spotlight"
import HogList from "./HogList"

import hogs from "../porkers_data";

import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

const pigPics = {
  'Babe':babe,
  'Porkchop':porkchop,
  'Cherub':cherub,
  'Piggy smalls':piggy_smalls,
  'Trouble':trouble,
  'Piglet':piglet,
  'Peppa':peppa,
  'Truffle Shuffle':truffle_shuffle,
  'Bailey':bailey,
  'Galaxy Note':galaxy_note,
  'Leggo My Eggo':leggo_my_eggo,
  'Augustus Gloop':augustus_gloop
}


function App() {
  const [spotlightPig, setSpotlight] = useState(hogs[0])

  const changeSpotlight = (name) => {
    const filtered = hogs.filter(hog => hog.name === name)[0]
    setSpotlight(filtered)
  }

  return (
    <div className="App">
      <Nav />
      <Spotlight pig={spotlightPig} img={pigPics[spotlightPig.name]} />
      <HogList pigList={hogs} pigPics={pigPics} changeSpotlight={changeSpotlight}/>
    </div>
  );
}

export default App;

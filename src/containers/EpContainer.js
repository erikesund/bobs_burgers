import React, {useEffect, useState} from "react";
import EpisodeList from "../components/EpisodeList";
import EpisodeDetails from "../components/EpisodeDetails";

function EpContainer() {
  const [episodes, setEpisodes] = useState([])

  async function getEpisodes() {
    const url = 'https://bobsburgers-api.herokuapp.com/episodes/';
    const response = await fetch(url);
    const data = await response.json();
    setEpisodes(data);
  }

  useEffect(() => {
    getEpisodes();
  }, []);

return (
  <>
  <h2>This is the EpisodeContainer</h2>
  <hr></hr>
  <EpisodeList episodes={episodes}/>
  <hr></hr>
  <EpisodeDetails/>
  </>
)
}

export default EpContainer;
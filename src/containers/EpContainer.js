import React, {useEffect, useState} from "react";
import EpisodeList from "../components/EpisodeList";
import EpisodeDetails from "../components/EpisodeDetails";
import SeasonSelect from "../components/SeasonSelect";

function EpContainer() {
  const [episodes, setEpisodes] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState("1");

  async function getEpisodes() {
    const url = 'https://bobsburgers-api.herokuapp.com/episodes/';
    const response = await fetch(url);
    const data = await response.json();
    setEpisodes(data);
  }

  async function getBurgers(){
    const url = 'https://bobsburgers-api.herokuapp.com/burgerOfTheDay/';
    const response = await fetch(url);
    const data = await response.json();
    setBurgers(data);
  }

  useEffect(() => {
    getEpisodes();
    getBurgers();
  }, []);

return (
  <>
  <hr></hr>
  <SeasonSelect episodes={episodes} onSeasonSelected={setSelectedSeason}/>
  <hr></hr>
  <EpisodeDetails episode={selectedEpisode} burgers={burgers}/>
  <hr></hr>
  <EpisodeList episodes={episodes} season={setSelectedSeason} onEpisodeClick={setSelectedEpisode}/>
  </>
)
}

export default EpContainer;
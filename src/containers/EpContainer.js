import "../EpContainer.css";
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
    getSeasons(data);
    setSelectedEpisode(data[0])
  }

  async function getBurgers(){
    const url = 'https://bobsburgers-api.herokuapp.com/burgerOfTheDay/';
    const response = await fetch(url);
    const data = await response.json();
    setBurgers(data);
  }

  function getSeasons (episodes) {
    var seasons = [];
    seasons = episodes.filter(episode => {
      const isDuplicate = seasons.includes(episode.season)
        if (!isDuplicate) {
          seasons.push(episode.season);
        }
      setSeasons(seasons);
      });

  };

  useEffect(() => {
    getEpisodes();
    getBurgers();
  }, []);

return (
  <div id="main-container">
    <SeasonSelect episodes={episodes} seasons={seasons} onSeasonSelected={setSelectedSeason}/>
      <div id="list-and-details">
        <div class="content-container">
        <EpisodeList episodes={episodes} season={selectedSeason} onEpisodeClick={setSelectedEpisode}/>
        </div>
        <div class="content-container">
        <EpisodeDetails episode={selectedEpisode} burgers={burgers}/>
        </div>
      </div>
  </div>
)
}

export default EpContainer;
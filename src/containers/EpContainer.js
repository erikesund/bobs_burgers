import React, {useEffect, useState} from "react";
import EpisodeList from "../components/EpisodeList";
import EpisodeDetails from "../components/EpisodeDetails";
import SeasonSelect from "../components/SeasonSelect";

function EpContainer() {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);

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
  <hr></hr>
  <SeasonSelect episodes={episodes} onSeasonSelected={setSelectedSeason}/>
  <hr></hr>
  <EpisodeDetails episode={selectedEpisode}/>
  <hr></hr>
  <EpisodeList episodes={episodes} onEpisodeClick={setSelectedEpisode}/>
  </>
)
}

export default EpContainer;
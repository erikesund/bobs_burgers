import React from "react";

function SeasonSelect ({seasons, onSeasonSelected}) {
  const seasonOptions = seasons.map((season, index) => (
    <option key={season} value={season}>{season}</option>)
    )

    function onChange(e) {
      const season = e.target.value;
      onSeasonSelected(season);
    }

  return (
  <div id="season-selector">
  Select a season:
  <select onChange={onChange}>{seasonOptions}</select>
  </div>
  )
}


export default SeasonSelect;
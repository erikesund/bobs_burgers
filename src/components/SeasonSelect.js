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
  <>
  Select a season:
  <select onChange={onChange}>{seasonOptions}</select>
  </>
  )
}


export default SeasonSelect;
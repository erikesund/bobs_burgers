import React from "react";

function SeasonSelect ({episodes}) {
  const uniqueSeasonNumbers = [];
  const seasonOptions = episodes.filter(episode => {
    <option></option>
    const isDuplicate = uniqueSeasonNumbers.includes(episode.season);
    if (!isDuplicate) {
      uniqueSeasonNumbers.push(episode.season);

      // return true;
    }
    // return false;
    <option>{uniqueSeasonNumbers}</option>
  });
  console.log(uniqueSeasonNumbers)
  
  return (
  <>
  Please select a season:  
  <select>{seasonOptions}</select>
  </>
  )
}


export default SeasonSelect;
import React from "react";

function SeasonSelect ({episodes}) {
  const uniqueSeasonNumbers = [];
  var seasonOptions = episodes.filter(episode => {
    const isDuplicate = uniqueSeasonNumbers.includes(episode.season)
      if (!isDuplicate) {
        uniqueSeasonNumbers.push(episode.season);
      }
    return uniqueSeasonNumbers;
    });

    seasonOptions = uniqueSeasonNumbers.forEach((season) => <option>{season}</option>)
    // console.log(uniqueSeasonNumbers)
    // seasonOptions = uniqueSeasonNumbers;
    console.log(seasonOptions)

  

  return (
  <>
  Please select a season:  
  {/* <select>{uniqueSeasonNumbers}</select> */}
  <select>{seasonOptions}</select>
  {seasonOptions}
  {uniqueSeasonNumbers}
  <hr></hr>
  </>
  )
}


export default SeasonSelect;
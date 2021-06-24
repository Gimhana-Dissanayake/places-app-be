const API_KEY = "";

async function getCoordsForAddress(address) {
  const coords = await new Promise(function (resolve, reject) {
    setTimeout(resolve, 500);
  }).then(function () {
    return {
      lat: 40.7484474,
      lng: -73.9871516,
    };
  });
  return coords;
}

module.exports = getCoordsForAddress;

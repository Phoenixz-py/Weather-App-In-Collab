const apikey = "ySEexcyT625xN4x0DoZ5OQ7ygtNtoqEn";
function getWeather() {
  const searchBar = document.getElementById("searchInput");
  if (!searchBar) {
    alert("ERROR DAWG");
    return;
  }
  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch(
    `https://api.tomorrow.io/v4/weather/realtime?location=${encodeURIComponent(
      searchBar.value
    )}&apikey=${apikey}`,
    options
  )
    .then((res) => res.json())
    .then((res) => {
      if (!res.data) {
        alert("ERROR DAWG");
        return;
      }
      const stuff = res.data.values;
      document.getElementById("searchBar").innerText = res.location.name;
      document.getElementById("temperature").innerText = stuff.temperature;
      document.getElementById("humidity").innerText = stuff.humidity;
      document.getElementById("windSpeed").innerText = stuff.windSpeed;
      document.getElementById("uvIndex").innerText = stuff.uvIndex;

      document.getElementById("data1").style.display = "block";
    })

    .catch((err) => {
      console.error("error fetching weather data", err);
      alert("Failed to fetch weather data. Please try again.");
    });
}

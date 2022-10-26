import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <div class="container">
          <div class="weather-app-wrapper">
            <div class="weather-app">
              <h1 id="city">
                <div className="header">Berlin</div>
              </h1>

              <Date />

              <img
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt="Clear"
                id="icon"
                className="current-weather-icon"
              />

              <div className="temperature">
                <strong id="temperature">14</strong>°
                <span className="units">C</span>
              </div>

              <Search />

              <CurrentConditions />

              <div className="weekly-temp" id="forecast" />

              <footer>
                <a
                  href="https://github.com/SarahAllison92/Vanilla-weather-app"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  Open-source code
                </a>
                by Sarah Allison
              </footer>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;

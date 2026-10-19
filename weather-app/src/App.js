import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import MainPage from "./components/MainPage";
import { useWeather } from "./useWeather";
import "./App.css";
import "./styles/fonts.css";
import "./styles/global.css";
import "./styles/index.css";

function App() {
  const { data,  error, search } = useWeather();

  return (
    <div className="app">
      <MainPage/>
      <SearchForm onSearch={search} />

      {error && <ErrorMessage text={error} />}
      {data && <WeatherCard weather={data} />}
    </div>
  );
}

export default App;
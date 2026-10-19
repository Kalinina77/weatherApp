import { useState } from "react";

function SearchForm({ onSearch }) {
    const [city, setCity] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (city.trim() === "") {
        return;
        }
        onSearch(city.trim());
    }

    return (
    <div>
        <h2>Введите город чтобы узнать погоду</h2>
        <form className="search" onSubmit={handleSubmit}>
            
            <input
                className="search__input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Введите город"
            />
            <button className="search__button" type="submit">Найти</button>
        </form>
    </div>
    );
}

export default SearchForm;
import { useState, useEffect } from "react";

const MainPage = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1 className="weather__title">Weather</h1>
      <p>Время сейчас: {now.toLocaleTimeString("ru-RU")}</p>
    </div>
  );
};

export default MainPage
import React, { useEffect, useState } from "react";
import "../App.css";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      className={`button ${dark ? "dark" : "light"} theme-toggle`}
      onClick={() => setDark(!dark)}
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;
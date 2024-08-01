import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const LanguageList = () => {
  const [languages] = useState([
    { name: "C++", progress: 100, className: "web-progress", years: 3 },
    { name: "Python", progress: 100, className: "python-progress", years: 3 },
    { name: "HTML/CSS", progress:55, className: "java-progress", years: 2.5 },
    { name: "JavaScript", progress: 50, className: "golang-progress", years: 2 },
    { name: "TypeScript", progress: 50, className: "vhdl-progress", years: 2 },
    { name: "SQL", progress: 50, className: "sql-progress", years: 2 },
    { name: "Java", progress: 25, className: "c-progress", years: 1 },
  ]);

  return (
    <div>
      <h2 className="Languages">Languages</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <span>{language.name}: {`${language.years} years`}</span>
            <ProgressBar progress={language.progress} className={language.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;
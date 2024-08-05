import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [devs] = useState([
    { name: "Visual Studio Code", progress: 100, className: "postman-progress", years: 4},
    { name: "MongoDB", progress: 40, className: "azure-progress", years: 1.5 },
    { name: "Git", progress: 100, className: "pbi-progress", years: 4},
    { name: "Sublime Text", progress: 70, className: "github-progress", years: 3 },
    { name: "Docker", progress: 25, className: "docker-progress", years: 1 },
  ]);

  return (
    <div>
      <h2 className="Develop">Development Tools</h2>
      <ul>
        {devs.map((dev, index) => (
          <li key={index}>
            <span>{dev.name}: {`${dev.years} years`}</span>
            <ProgressBar progress={dev.progress} className={dev.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
import React from "react";

function Formations({datas}) { 
  return (
  <div className="cursus mb3">
      <h2 className="h2">Formations</h2>
      {datas.map(item => (
          <div className="grid-row" key={item.id}>
          <div className="grid-item">
              <p className="grid-date">{item.date}</p>

          </div>
          <div className="grid-item">
              <h3 className="grid-title">{item.title}</h3>
              <p className="grid-text">{item.text}</p>
              <p className="grid-location">{item.location}</p>

          </div>
      </div>
      ))}
      
  </div>
  )
}

export default Formations;

import React, { useState } from "react";
import { data } from "./data";

function BirthdayList() {
  const [birthday, setBirthday] = useState(data);

  //console.log(data);

  return (
    <>
      <section className="container">
        <div className="container_wrapper">
          <h3>{birthday.length} birthdays today</h3>
          {birthday.map((person) => {
            const { id, name, age, image } = person;
            return (
              <article key={id} className="person">
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>{age}</p>
              </article>
            );
          })}
          <button className="btn" onClick={() => setBirthday([])}>
            Clear All
          </button>
        </div>
      </section>
    </>
  );
}

export default BirthdayList;

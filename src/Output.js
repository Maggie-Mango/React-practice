import React, { useState, useEffect } from "react";

function Output({ data }) {
  const format = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };
  const [date, setDate] = useState(new Date().toLocaleString("en-US", format));

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date().toLocaleString("en-US", format));
    }, 0.25 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!data) {
    return <p>{date}</p>;
  } else if (Array.isArray(data)) {
    return (
      <div>
        {data.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </div>
    );
  } else {
    return <div>{data}</div>;
  }
}

export default Output;

import React, { useEffect, useState } from "react";

Clock.propTypes = {};

function formatDate(date) {
  if (!date) return "";
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  //   return `${hours}:${minutes}:${seconds}`;
  return `${hours}:${minutes}:${seconds}`;
}

function Clock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    //sau moi giay thi lay gio hien tai
    const clockInterval = setInterval(() => {
      const now = new Date();
      //HH:MM:SS
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);
    return () =>{
        //clean-up
        console.log("clock cleanup");
        clearInterval(clockInterval);
    }
  }, []);

  return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

export default Clock;

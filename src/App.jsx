import "./App.css";
import "./styles/font.css";
import Clock from "/clock.gif";
import Worm from "/worm.gif";
import Toaster from "/toaster.gif";
import Mouth from "/mouth.gif";
import Bell from "/bell.gif";
import Jesus from "/jesus.gif";
import Timer from "./components/Timer.jsx";
import { useEffect, useState } from "react";
import alarm from "/assets_backsound.mp3";

const sound = new Audio(alarm);

const Countdown = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds((prevMs) => prevMs - 1);
        } else if (seconds > 0) {
          setSeconds((prevSec) => prevSec - 1);
          setMilliseconds(99);
        } else if (minutes > 0) {
          setMinutes((prevMin) => prevMin - 1);
          setSeconds(59);
          setMilliseconds(99);
        } else if (hours > 0) {
          setHours((prevHours) => prevHours - 1);
          setMinutes(59);
          setSeconds(59);
          setMilliseconds(99);
        } else {
          setIsRunning(false);
          sound.play();
        }
        setTimeout(() => {
          sound.pause();
          sound.currentTime = 0;
        }, 4000);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [milliseconds, seconds, minutes, hours, isRunning]);

  const startTimer = () => {
    if (hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds !== 0) {
      setIsRunning(true);
      sound.pause();
      sound.currentTime = 0;
    } else {
      window.alert("Add Time.");
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const stopTimer = () => {
    resetTimer();
    sound.pause();
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    sound.pause();
    sound.currentTime = 0;
  };

  const changeSeconds = (e) => {
    setSeconds(parseInt(e.target.value, 10));
  };

  const changeMinutes = (e) => {
    setMinutes(parseInt(e.target.value, 10));
  };

  const changeHours = (e) => {
    setHours(parseInt(e.target.value, 10));
  };

  return (
    <>
      <div className="title">
        <h1 className="h1">Homer's Web Page</h1>
      </div>

      <div className="gif-container">
        <div className="gif-column">
          <div className="gif-column-1__row1">
            <img className="gif-emoji" src={Clock} alt="Clock" />
          </div>
          <div className="gif-column-1__row2">
            <img
              className="gif-emoji gif-emoji__bigger"
              src={Worm}
              alt="Worm"
            />
            <img className="gif-emoji" src={Toaster} alt="Toaster" />
          </div>
          <div className="gif-column-1__row3">
            <img
              className="gif-emoji gif-emoji__bigger"
              src={Toaster}
              alt="Toaster"
            />
            <img
              className="gif-emoji gif-emoji__bigger"
              src={Mouth}
              alt="Mouth"
            />
          </div>
          <div className="gif-column-1__row4">
            <img className="gif-emoji" src={Bell} alt="Bell" />
            <img className="gif-emoji gif-emoji__big" src={Clock} alt="Clock" />
          </div>
          <div className="gif-column-1__row5">
            <img
              className="gif-emoji gif-emoji__bigger"
              src={Worm}
              alt="Worm"
            />
            <img
              className="gif-emoji gif-emoji__bigger"
              src={Worm}
              alt="Worm"
            />
          </div>
        </div>

        <div className="gif-column2">
          <div className="gif-column-2__row1">
            <img
              className="gif-emoji gif-emoji-Jesus"
              src={Jesus}
              alt="Jesus"
            />
          </div>
          <Timer
            milliseconds={milliseconds}
            seconds={seconds}
            minutes={minutes}
            hours={hours}
            changeSeconds={changeSeconds}
            changeMinutes={changeMinutes}
            changeHours={changeHours}
            startTimer={startTimer}
            pauseTimer={pauseTimer}
            stopTimer={stopTimer}
            isRunning={isRunning}
          />
        </div>

        <div className="gif-column">
          <div className="gif-column-3__row1">
            <img
              className="gif-emoji gif-emoji__bigger"
              src={Worm}
              alt="Worm"
            />
            <img className="gif-emoji" src={Toaster} alt="Toaster" />
          </div>
          <div className="gif-column-3__row2">
            <img className="gif-emoji gif-emoji__big" src={Bell} alt="Bell" />
            <img
              className="gif-emoji gif-emoji__bigger"
              src={Mouth}
              alt="Mouth"
            />
          </div>
          <div className="gif-column-3__row3">
            <img
              className="gif-emoji gif-emoji__bigger"
              src={Toaster}
              alt="Toaster"
            />
            <img className="gif-emoji" src={Clock} alt="Clock" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;

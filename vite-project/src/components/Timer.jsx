import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";
import "./Timer.css";

export default function Timer({
  milliseconds,
  seconds,
  minutes,
  hours,
  changeHours,
  changeMinutes,
  changeSeconds,
  startTimer,
  pauseTimer,
  stopTimer,
  isRunning,
}) {
  return (
    <>
      <div className="border1">
        <div className="border2">
          <div className="Countdown-container">
            <div className="timerWrapper">
              <div className="counter">
                <label>Hours</label>
                <input value={hours} onChange={changeHours} />
              </div>
              <div className="counter">
                <label>Minutes</label>
                <input value={minutes} onChange={changeMinutes} />
              </div>
              <div className="counter">
                <label>Seconds</label>
                <input value={seconds} onChange={changeSeconds} />
              </div>
              <div className="counter">
                <label>Millisec</label>
                <input value={milliseconds} readOnly />
              </div>
            </div>

            <div className="button-container">
              {!isRunning ? (
                <button className="btn " onClick={startTimer}>
                  <BsFillPlayFill />
                </button>
              ) : (
                <button className="btn " onClick={pauseTimer}>
                  <BsPauseFill />
                </button>
              )}
              <button className="btn " onClick={stopTimer}>
                <BsStopFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

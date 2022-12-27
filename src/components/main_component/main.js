import "./main.css";
import CarTypes from "./carTypes";

export default function Main() {
  return (
    <>
      <div className="main">
        <h1>Select The Car Type You Want</h1>
        <h2>Play Around With The Car Options Of Your Choice</h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="heading">
            <h2>Car Options</h2>
          </div>
          <div className="body">
            <div className="listItem">
              <CarTypes/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

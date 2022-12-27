import { useEffect, useState } from "react";

function CarOptions({ cartype }) {
  const [carOption, setCarOption] = useState([]);
  const [carOptionList, setCarOptionList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CAR_OPTIONS_URL}/${cartype}`)
      .then((res) => res.json())
      .then((json) => {
        setCarOptionList(json.data);
        for (var val of json.data) {
          if (val.isDefault) setCarOption(val.name);
        }
      });
  }, [setCarOptionList, cartype]);
  useEffect(() => {
  }, [carOption]);
  return (
    <>
      <select
        name="caroption"
        id="caroption"
        onChange={(e) => setCarOption(e.target.value)}
        value={carOption}
      >
        {carOptionList &&
          carOptionList.map((val) => {
            return <option value={val.name}key={val.id}>{val.name}</option>;
          })}
      </select>
      <div className="cost">
        <h2>Car Selected : <span>{cartype}, {carOption}</span></h2>
      </div>
    </>
  );
}
export default CarOptions;
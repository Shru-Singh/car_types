
import { useEffect, useState } from "react";
import CarOptions from "./carOptions";

function CarTypes() {
  const [carType, setCarType] = useState([]);
  const [carTypeList, setCarTypeList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CAR_TYPES_URL}`)
      .then((res) => res.json())
      .then((json) => {
        setCarTypeList(json.data);
        for (var val of json.data) {
          if (val.isDefault) setCarType(val.value);
        }
      });
  }, []);
  useEffect(() => {
  }, [carType]);
  return (
    <div className="car">
      <select
        name="cartype"
        id="cartype"
        onChange={(e) => setCarType(e.target.value)}
        value={carType}
      >
        {carTypeList &&
          carTypeList.map((val) => {
            return <option value={val.value} key={val.id}>{val.label}</option>;
          })}
      </select>
      {carType && <CarOptions cartype={carType} />}
    </div>
  );
}

export default CarTypes;
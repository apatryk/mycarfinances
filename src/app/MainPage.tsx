import TextField from "@mui/material/TextField";
import { useState } from "react";


export const MainPage = () => {
  const [fuel, setFuel] = useState(0);
  const [distance, setDistance] = useState(0);
  const onFuelChange = (e: any) => setFuel(e.target.value);
  const onDistanceChange = (e: any) => setDistance(e.target.value);
  const fuelConsumptionCalc = () => console.log(((fuel / distance)*100).toFixed(2));
  return (
    <>
      <TextField
        id="filled-number"
        label="Zatankowane paliwo"
        type="number"
        value={fuel}
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        onChange={onFuelChange}
        
      />
      <TextField
        id="filled-number"
        label="Stan licznika"
        type="number"
        value={distance}
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        onChange={onDistanceChange}
      />
      <button onClick={fuelConsumptionCalc}></button>
    </>
  );
};

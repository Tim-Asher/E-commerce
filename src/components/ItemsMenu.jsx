import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const ItemsMenu = () => {
  const [radioValue, setRadioValue] = useState("1");
  const radios = [
    { name: "NEW ITEMS", value: "1" },
    { name: "MEN", value: "2" },
    { name: "WOMEN", value: "3" },
  ];
  return (
    <ButtonGroup>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={"outline-dark"}
          name="radio"
          value={radio.value}
          className=""
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default ItemsMenu;

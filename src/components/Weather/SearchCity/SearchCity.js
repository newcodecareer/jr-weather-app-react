import "./SearchCity.css";
import { useState } from "react";
import fetchWetherByCity from "../../../service/weatherService";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchCity = (props) => {
  const [city, setCity] = useState("");
  const [isChecked, setIsChecked] = useState("false");

  const onCityInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
  };

  //checkbox feat TODO feel it is not the best solution
  const onCheckBoxChange = (ev) => {
    const isChecked = ev.target.checked;
    let isBoxChecked = "";
    isChecked ? (isBoxChecked = "yes") : (isBoxChecked = "no");
    setIsChecked(isBoxChecked);
  };

  // set loading here, but use loading in parents, pass props from child to par
  const onButtonClick = async (event) => {
    event.preventDefault();
    props.setLoading(true);
    try {
      const weatherData = await fetchWetherByCity(city, isChecked);
      props.search(weatherData);
    } catch (error) {
      console.error("Failed to fetch city weather due to error: ", error);
    } finally {
      props.setLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={onButtonClick}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search city.."
            value={city}
            onChange={onCityInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Air quality"
            value={isChecked}
            onChange={onCheckBoxChange}
            className="air-quality"
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!city}>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchCity;

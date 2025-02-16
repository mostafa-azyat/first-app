"use client";
import { useState } from "react";
import "./Form.css";
import Module from "./Module";

export default function Form() {
  const [isErrorMessage, setIsErrorMessage] = useState(null);
  const [showViibility, setShowViibility] = useState(false);
  const [deviceName, setDeviceName] = useState({
    name: "",
    prenom: "",
    age: "",
    employer: false,
    Salary: "",
  });

  function handleFormSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    setIsErrorMessage(null);
    const { age, prenom } = deviceName;

    if (age < 18 || age > 100) {
      setIsErrorMessage("the age is not allowed");
    }else if (prenom.length < 4 || prenom.length > 12) {
      setIsErrorMessage("prenom is incorrect");
    }
    setShowViibility(true);
  }

  const isDisable =
    deviceName.name == "" || deviceName.prenom == "" || deviceName.age == "";

  function curser() {
    if (showViibility) {
      setShowViibility(false);
    }
  }

  return (
    <div onClick={curser}>
      <form className="form">
        <h1>Requesting A Loan</h1>

        <label htmlFor="Name">Name:</label>
        <input
          onChange={(event) => {
            setDeviceName({ ...deviceName, name: event.target.value });
          }}
          value={deviceName.name}
          type="text"
          placeholder="Exemple: Azyat..."
          id="Name"
        />

        <label htmlFor="Phone">prenom:</label>
        <input
          onChange={(event) => {
            setDeviceName({ ...deviceName, prenom: event.target.value });
          }}
          value={deviceName.prenom}
          type="text"
          placeholder="Exemple: Mostafa..."
          id="Phone"
        /> 

        <label htmlFor="Age">Age:</label>
        <input
          onChange={(event) => {
            setDeviceName({ ...deviceName, age: event.target.value });
          }}
          value={deviceName.age}
          type="text"
          placeholder="Exemple: 20"
          id="Age"
        />

        <label htmlFor="employer" className="employer">Are You an employer:</label>
        <input
          onChange={(event) => {
            setDeviceName({ ...deviceName, employer: event.target.checked });
          }}
          checked={deviceName.employer}
          type="checkbox"
          name=""
          id="employer"
        />

        <label htmlFor="Salary">Salary:</label>
        <select
          id="Salary"
          value={deviceName.Salary}
          onChange={(event) => {
            setDeviceName({ ...deviceName, Salary: event.target.value });
          }}
        >
          <option>Less Than 500$</option>
          <option>Between 500$ And 1500$</option>
          <option>Above 1500$</option>
        </select>

        <input
          onClick={handleFormSubmit}
          className={isDisable ? "disabled" : ""}
          disabled={isDisable}
          type="submit"
        />

        <Module errorMessage={isErrorMessage} isVisiblity={showViibility} />
      </form>
    </div>
  );
}

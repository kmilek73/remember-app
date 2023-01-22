import React from "react";
import "./EditEvents.css";
import {isValidNumberInput} from "./Utilis";


const EditEvents = props => {
  return (
    <div className="container">
      <div className="containerEdit" >
        <div className="title" htmlFor="name"><label htmlFor="name">Name</label></div>
        <div className="field">
          <input type="text" 
          id="name" 
          name="name" 
          value={props.name}
          placeholder="Wpisz Nazwę" 
          onChange={e=> props.onInputChange({[e.target.name]: [e.target.value]})} 
          />
        </div>
      </div>
      <div className="containerEdit">
        <div className="title"><label htmlFor="houer">Godz.:</label></div>
        <div className="field">
          <input type="text"
           id="houer" 
           name="houer" 
           value={props.houer} // czyści pole po input
           placeholder="Wpisz Godzinę" 
           onKeyPress={e=> isValidNumberInput(e)}
          onChange={e=> props.onInputChange({[e.target.name]: [e.target.value]})} 
           />
        </div>
      </div>
      <div className="containerEdit">
        <div className="title"><label htmlFor="minut">Min:</label></div>
        <div className="field">
          <input type="text" 
          id="minut" 
          name="minut" 
          value={props.minut} 
          placeholder="Wpisz Minutę" 
         onChange={e=> props.onInputChange({[e.target.name]: [e.target.value]})} 
          />
        </div>
      </div>

    

      <div className="containerEdit">
        <button className="btn" onClick={props.onSave}>Dodaj</button>
        <button className="btn" >Cancel</button>
        
      </div>
    </div>
  );
};

export default EditEvents;
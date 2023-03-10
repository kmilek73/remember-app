import React from "react";
import "./App.css";
import { Component } from "react";
import uniqid from "uniqid";
import Countdown from "./Countdown";
import EditEvents from "./EditEvents";


  constructor() {class App extends Component {
    super();
    this.state = {
      eating: [
        { id: 0, name: "śniadanie", houer: 13, minut: 0 },
        { id: 1, name: "Obiad", houer: 15, minut: 0 },
        { id: 2, name: "Kolacja", houer: 21, minut: 0 },
      ],
      editEating:
      {
        id: uniqid(), name: "", houer: -1, minut: -1
      }

    };
    this.handEditEvent = this.handEditEvent.bind(this);
    this.handSaveEvent = this.handSaveEvent.bind(this);
    this.handRemove = this.handRemove.bind(this);
    this.handEdit = this.handEdit.bind(this);
  }

  handEditEvent = (val) => {

    this.setState(prevState => {
      return {

        editEating: Object.assign(prevState.editEating, val)
      }
    })
  }

  handSaveEvent() {
    this.setState(prevState => {
      const editedEventsExists = prevState.eating.find(el => el.id === prevState.editEating.id
      );
      let updateEvents;
      if (editedEventsExists) {
        updateEvents = prevState.eating.map(el => {
          if (el.id === prevState.editEating.id) return prevState.editEating;
          else return el;
        });
      } else { updateEvents = [...prevState.eating, prevState.editEating] }
      return {
        eating: updateEvents,
        editEating: { id: uniqid(), name: "", houer: -1, minut: -1 }
      }

    });


  }


  handRemove(id) {
    this.setState(prevState => ({
      eating: prevState.eating.filter(el => el.id !== id)
    })
    )

  }

  handEdit(id) {
    this.setState(prevState => ({ editEating: { ...prevState.eating[id] } }));
  }



  render() {
    const eating = this.state.eating.map((el) => {
      return (
        <Countdown
          key={el.id}
          id={el.id}
          name={el.name}
          houer={el.houer}
          minut={el.minut}
          onRemove={id => this.handRemove(id)}
          onEditRemove={id => this.handEdit(id)}

        />
      );
    });

    return <div className="conatinerTaskToDo">
      {eating}
      <EditEvents
        name={this.state.editEating.name}
        houer={this.state.editEating.houer}
        minut={this.state.editEating.minut}
        onSave={(() => this.handSaveEvent())}
        onInputChange={val => this.handEditEvent(val)}
      />
    </div>;
  }
}

export default App;

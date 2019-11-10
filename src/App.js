import React, { Component } from "react";
import Tabel from "./tabel";
import Formular from "./formular";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacte: [
        { nume: "Ionescu", prenume: "Mircea", tel: "0745543432", id: 1 },
        { nume: "Avram", prenume: "Andreea", tel: "0723143768", id: 2 },
        { nume: "Popa", prenume: "Cristian", tel: "0761980654", id: 3 }
      ]
    };

    // This binding is necessary to make `this` work in the callback
    this.stergeContact = this.stergeContact.bind(this);
    this.adaugContact = this.adaugContact.bind(this);
  }

  stergeContact(ev) {
    const idSup = parseInt(ev.target.id);
    const { contacte } = this.state;
    const sirNou = contacte.filter(item => {
      return item.id !== idSup;
      //  Obiectul care are id === idSup nu se copiaza in noul sir
    });

    this.setState({
      contacte: sirNou
    });
  }

  adaugContact(contact) {
    const contacteNou = [...this.state.contacte, contact];
    this.setState({ contacte: contacteNou });
  }

  render() {
    return (
      <div className="container">
        <Tabel
          dateContacte={this.state.contacte}
          stergeContact={this.stergeContact}
        />
        <Formular adaugContact={this.adaugContact} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Tabel from "./tabel";
import Formular from "./formular";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacte: []
    };
    this.stergeContact = this.stergeContact.bind(this);
    this.adaugContact = this.adaugContact.bind(this);
    this.reincarc = this.reincarc.bind(this);
  }

  reincarc() {
    //  reincarc lista de contacte din baza de date
    return fetch("http://localhost/contactebd/api/listacon.php")
      .then(rezultat => {
        return rezultat.json();
      })
      .then(lista => this.setState({ contacte: lista }))
      .catch(error => console.log("Request failed: ", error));
  }

  stergeContact(ev) {
    //  Construiesc sirul de caractere care se trimite scriptului PHP
    const dateScript = `id=${ev.target.id}`;
    const config = {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: dateScript // body data type must match "Content-Type" header
    };

    //  Corectez in baza de date
    fetch("http://localhost/contactebd/api/delcon.php", config).then(
      this.reincarc
    ); 
  }

  adaugContact(contact) {
    //  Construiesc sirul de caractere care se trimite scriptului PHP
    const dateScript = `nume=${contact.nume}&prenume=${contact.prenume}&tel=${contact.tel}`;
    const config = {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: dateScript
    };

    //  Incarc contactul in baza de date
    fetch("http://localhost/contactebd/api/adacon.php", config).then(
      this.reincarc
    ); 
  }

  componentDidMount() {
    this.reincarc(); 
  }

  render() {
    const { contacte } = this.state;
    return (
      <div className="container">
        <h1 className="mt-4">Lista contactelor</h1>
        <Tabel dateContacte={contacte} stergeContact={this.stergeContact} />
        <h2 className="mt-4">Contact nou</h2>
        <Formular adaugContact={this.adaugContact} />
      </div>
    );
  }
}

export default App;

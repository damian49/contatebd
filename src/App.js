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

    fetch("http://localhost/contacte/api/listacon.php")
      .then(rezultat => {
        return rezultat.json();
      })
      .then(lista => this.setState({ contacte: lista }))
      .catch(error => console.log("Request failed", error));
  }

  stergeContact(ev) {
    const idSup = ev.target.id;
    //  Construiesc un obiect FormData
    const formData = new FormData();
    console.log(`id: ${idSup} adica ${parseInt(idSup)}`);
    formData.append("id", parseInt(idSup));
    //  Corectez in baza de date
    fetch("http://localhost/contacte/api/delcon.php", {
      body: formData,
      method: "post"
    }).then(this.reincarc);
  }

  adaugContact(contact) {
    //  Construiesc un obiect FormData
    const formData = new FormData();
    formData.append("nume", contact.nume);
    formData.append("prenume", contact.prenume);
    formData.append("tel", contact.tel);

    //  Incarc contactul in baza de date
    fetch("http://localhost/contacte/api/adacon.php", {
      body: formData,
      method: "post"
    }).then(this.reincarc);
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

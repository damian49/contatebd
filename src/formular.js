import React, { Component } from "react";

class Formular extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      nume: "",
      prenume: "",
      tel: "",
      id: 1000
    };

    //  Initializez obiectul "state"
    this.state = this.initialState;

    //  Functii de tratare a evenimentelor "change" si "submit"
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.adaugContact(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { nume, prenume, tel } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="nume">Nume</label>
            <input
              type="text"
              className="form-control"
              name="nume"
              id="nume"
              value={nume}
              onChange={this.handleChange}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="prenume">Prenume</label>
            <input
              type="text"
              className="form-control"
              name="prenume"
              id="prenume"
              value={prenume}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="tel">Telefon</label>
            <input
              type="text"
              className="form-control"
              name="tel"
              id="tel"
              value={tel}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Memorează
        </button>
      </form>
    );
  }
}

export default Formular;

import React, { Component } from "react";
class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Nume</th>
          <th>Prenume</th>
          <th>Telefon</th>
          <th>Sterge</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

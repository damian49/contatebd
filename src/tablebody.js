import React, { Component } from "react";
import TableRow from "./tablerow";
class TableBody extends Component {
  render() {
    const { dateContacte, stergeContact } = this.props;
    const lista = dateContacte.map(item => (
      <TableRow key={item.id} item={item} stergeContact={stergeContact} />
    ));

    return <tbody>{lista}</tbody>;
  }
}

export default TableBody;

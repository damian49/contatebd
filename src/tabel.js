import React, { Component } from "react";
import TableHeader from "./tableheader";
import TableBody from "./tablebody";
class Tabel extends Component {
  render() {
    const { dateContacte, stergeContact } = this.props;

    return (
      <table className="table table-bordered">
        <TableHeader />
        <TableBody dateContacte={dateContacte} stergeContact={stergeContact} />
      </table>
    );
  }
}

export default Tabel;

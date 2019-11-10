import React from "react";
import TableHeader from "./tableheader";
import TableBody from "./tablebody";

function Tabel(props) {
  const { dateContacte, stergeContact } = props;
  return (
    <table className="table table-bordered">
      <TableHeader />
      <TableBody dateContacte={dateContacte} stergeContact={stergeContact} />
    </table>
  );
}

export default Tabel;

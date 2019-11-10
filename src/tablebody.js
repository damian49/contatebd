import React from "react";
import TableRow from "./tablerow";

function TableBody(props) {
  const { dateContacte, stergeContact } = props;
  const lista = dateContacte.map(item => (
    <TableRow key={item.id} item={item} stergeContact={stergeContact} />
  ));

  return <tbody>{lista}</tbody>;
}

export default TableBody;

import React from "react";

function TableRow(props) {
  const { item, stergeContact } = props;
  const { nume, prenume, tel, id } = item;
  return (
    <tr>
      <td>{nume}</td>
      <td>{prenume}</td>
      <td>{tel}</td>
      <td>
        <button className="btn btn-primary" onClick={stergeContact} id={id}>
          Sterge
        </button>
      </td>
    </tr>
  );
}

export default TableRow;

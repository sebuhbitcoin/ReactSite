import React from "react";

const Table = (props) => {
  return (
    <div className="table">
      {props.visible && (
        <table>
          <tr key={"header"}>
            {Object.keys(props.data[0]).map((key) => {
              return <th>{key}</th>;
            })}
          </tr>
          {props.data.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default Table;

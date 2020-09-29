import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h3 className="logo">Appliance Efficiency Calculator</h3>
      <p className="result">
        Result: The {props.data.appliance} will use approximately £
        {props.data.totalAmount} per month
      </p>
    </div>
  );
}

export default Header;

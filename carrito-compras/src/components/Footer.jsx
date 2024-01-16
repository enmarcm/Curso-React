import React from "react";

const Footer = ({ prop = false }) => {
  return (
    <footer className="fixed right-4 left-4 bottom-2 text-left bg-gray-900 px-2 py-2 rounded-md opacity-65 backdrop-blur-3xl shadow-md">
      {prop && <h3> {JSON.stringify(prop)}</h3>}
      <h4 className="m-0 flex">Prueba tecnica de React ⚛️</h4>
      <span className="text-sm text-orange-400 opacity-80">@enmarcm</span>
      <h5 className="m-0 flex">Shopping Cart con useContext & useReducer</h5>
    </footer>
  );
};

export default Footer;

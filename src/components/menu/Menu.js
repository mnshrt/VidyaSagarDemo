import React from "react";

export default ({ close }) => (
  <div className="menu">
    <ul style={{listStyle:"none"}}>
      <li onClick={close}>Home</li>
      <li onClick={close}>Projects</li>
      <li onClick={close}>News and Events</li>
      <li onClick={close}>Gallery</li>
      <li onClick={close}>Career</li>
      <li onClick={close}>About Us</li>
      <li onClick={close}>Contributing</li>
      <li onClick={close}>Contact Us</li>
    </ul>
  </div>
);

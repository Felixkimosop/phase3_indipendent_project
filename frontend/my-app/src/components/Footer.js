import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-logo">
          <h1>My Mechanic</h1>
        </div>
        <div className="services">
          <h3>Our services</h3>
          <ul>
            <li>Engine Repair</li>
            <li>Windshield Replacement</li>
            <li>Tyre and puncture fix</li>
            <li>Paint Job</li>
            <li>Window replacement</li>
            <li>Body Customizations</li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <ul>
            <li>support@mymechanic.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

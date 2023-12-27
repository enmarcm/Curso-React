import React from "react";
import { Frame } from "./Frame";
import "./App.css";

const App = () => {
  return (
    <div className="desktop">
      <div className="overlap-wrapper">
        <div className="overlap">
          <p className="esto-es-una-landing">
            Esto es una Landing
            <br />
            Hecha con AMOR!
          </p>
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper-4">Comprar ahora</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-5">Ver más</div>
            </div>
          </div>
          <p className="lorem-ipsum-is">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also
          </p>
          <img className="image" alt="Image" src="https://s3-alpha-sig.figma.com/img/7d41/8658/129fb7d9c470f0c9051e3f93f971d38d?Expires=1699833600&Signature=YKLdDM0Hn3f3o7aWJSHohGIUHvIHU~XrWDjMRPgmzIRiyDRX6zJ0tDOzAQUkH4vAHDVMBQDgCQojqWhOPqqy5C6QDdcssNyNbHHIPNdft5Do24DRZL95KBB-A1Ot251lrQHF8OO0gcPOEex~Xrk5QrqKqgP2MfUZOrMkGbaV-CnBKcaXQXFNVusDmdadTBwjQ~qKJzF2XJs4FTO79Rwm27-D6OkdJn6QmjTQB39~G~25CMepHSgHO21pa0v9khPcDOY9Mx68zBPL2X~EV~RKZ-wiV2DYxvZpaI7Ig0Av3WeoU8wdPTDJQ31V0T70ch7axU5Bdb4FijQ53Gp7PxIrLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <Frame className="frame-1" />
        </div>
      </div>
    </div>
  );
};

export default App
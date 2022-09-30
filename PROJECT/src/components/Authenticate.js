import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import axios from "axios";

import "../css/Authenticate.css";
const Authenticate = ({ account }) => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="cam">
        <h1 style={{ color: "Yellow", position: "fixed", right: 20, top: 20 }}>
          CONNECTED
        </h1>
        <br />
        <QrReader
          onResult={async (result, error) => {
            if (!!result && !!result?.text) {
              let data = JSON.parse(result?.text);
              if (data.hash) {
                let res = await axios.get(
                  `https://api-rinkeby.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${data.hash}&apikey=${process.env.REACT_APP_ETHERSCAN_API_KEY}`
                );
                if (res) {
                  setMessage("Product is Authenticated ✅");
                  setAuth(true);
                }
              }
            }
            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "100%" }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            top: "50%",
          }}
        >
          <div>
            <h1>{message}</h1>
          </div>
        </div>
        <div style={{ position: "absolute", top: 90 ,right: 750}}>
          <h2>
          SHOW THE QR CODE IN THE CAMERA SECTION BELOW:
          </h2>
          <br />
          <h2><span>RELOAD TO RE-USE</span></h2>
        </div>
      </div>
    </>
  );
};

export default Authenticate;

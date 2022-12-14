import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import MainBar from "./MainBar";
import "../css/products.css";
import { REACT_APP_WALLET_ADD } from '../utils/constants'

const Greetings = () => {
  return (
    // <div id="get-started">
    <MainBar pageTitle="FAKE PRODUCT IDENTIFICATION !">
      {<h1 className="mfr-greetings"></h1>}
      <h1 className="secondary-txt">
        TO ADD YOUR PRODUCT CLICK ON ADD PRODUCT
      </h1>
      <h1 className="secondary-txt">
        CLICK ON DISTRIBUTOR'S LIST TO CHECK ALL REGISTERED DISTRIBUTORS
      </h1>
      <h1 className="secondary-txt">
        CLICK ON TRACKER TO SEE THE LOG
      </h1>
      <h1 className="secondary-txt">
        CLICK ON AUTHENTICATION TO SCAN THE QR CODE
      </h1>
    </MainBar>
    // </div>
  );
};
const GetStarted = ({ contract, account }) => {
  console.log("get started", account);
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  console.log(account);

  const checkAccount = () => {
    // console.log('account===>', account, 'process.env.REACT_APP_WALLET_ADD===>', REACT_APP_WALLET_ADD)
    // setShow(account === REACT_APP_WALLET_ADD);
    setShow(account ? true : false)
  };

  useEffect(() => {
    checkAccount();
  }, []);

  if (!show) {
    return (
      <div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <h2 className="primary-txt">OOPs 🙊 your company is not registerd</h2>
          <p className="primary-txt">
            Please do register your company to avail our services
          </p>
          <br />
          <a href="/google.com">Proceed to the Home Page</a>
        </div>
      </div>
    );
  }
  const arrURL = pathname.split("/");
  let currentPageURL = arrURL[2];
  let isLinkPage;
  if (arrURL.length >= 3) {
    isLinkPage = arrURL[2] === "";
  } else {
    isLinkPage = true;
  }

  return (
    <div className="main-container">
      <SideBar
        activeLink={currentPageURL}
        contract={contract}
        account={account}
      />
    {isLinkPage && <Greetings />}
      <Outlet />
    </div>
  );
};

export default GetStarted;

import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import FillableBar from "../components/FillableBar";
import Spacer from "../components/Spacer";
import Text from "../components/Text";
import { CircleProgress } from "../components/react-gradient-progress";
import Modal from "../components/DelegatorModal";

const HomeCarousel = (props) => {
  const [modalState, setModalState] = useState(false);

  const [addressEntryState, setAddressEntryState] = useState("");
  const [inputBorderColor, setInputBorderColor] = useState("#75f94c");

  const p = (props.stakingBalance / props.stakingCapacity) * 100;
  const pFixed = p.toFixed();
  const wtf = (props.stakingCapacity - props.stakingBalance)
    .toFixed()
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const tpor = Number(
    props.totalPaidOutRewards
      .toFixed()
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );

  const verifyAndSubmitAddress = (address) => {
    if (!/^(tz|KT)[1-2][K-Za-i][A-Za-z0-9]{32}$/.test(address)) {
      setInputBorderColor("#f94c4c");
      return;
    }
    setInputBorderColor("#75f94c");
    setModalState(true);
  };

  const CircleProgressColor = (props) => {
    const colors = ["#f94c4c", "#f78a00", "#cfc500", "#75f94c"];

    var ind = 3;

    if (props.percentage >= 90) ind = 0;
    else if (props.percentage >= 50) ind = 2;
    else if (props.percentage >= 75) ind = 1;
    // ind = Math.floor(props.percentage / 25);

    return (
      <CircleProgress
        percentage={Number(props.percentage)}
        strokeWidth={props.strokeWidth}
        fontSize={String(props.fontSize)}
        primaryColor={[colors[ind], colors[ind]]}
        secondaryColor="#484848"
        child={props.subtitle}
      />
    );
  };

  return (
    <div>
      {/* {modalState && ( */}
      <Modal
        visibility={modalState}
        onClose={setModalState}
        delegatorAddress={addressEntryState}
        payoutsArray={props.payoutsArray}
      />
      {/*)}*/}
      {/* Main container, row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // , paddingLeft: 50

          // alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Inner container 1, column */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="container">
            {/* Staking capacity */}
            <div
              style={{
                flexDirection: "column",
              }}
            >
              {/* <div className="inner-info-box"> */}
              <Text bad={p}>Free space</Text>
              <Text bad={p}>
                <CircleProgressColor
                  percentage={pFixed}
                  strokeWidth={8}
                  fontSize={28}
                  subtitle={<Text bad={p}>{wtf}ꜩ left</Text>}
                />
              </Text>
              {/* </div> */}
              <Text bad={p}>{props.delegators} delegators</Text>
            </div>
          </div>
          {/* End staking capacity */}

          <Spacer />

          <div
            className="container"
            style={{
              justifyContent: "center",
              alignContent: "center",
              justifyItems: "center",
              alignItems: "center",
              padding: "5px",
            }}
          >
            {/* Address rewards */}
            <div
              style={{
                padding: "5px",
              }}
            >
              <Text customFontSize={16} customFontWeight="bold">
                Check your rewards
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <form
                onSubmit={(e) => {
                  verifyAndSubmitAddress(addressEntryState);
                  e.preventDefault();
                }}
              >
                <input
                  width={75}
                  height={50}
                  type="text"
                  placeholder="Delegator address..."
                  className="input"
                  style={{
                    transition: "all .2s ease-in-out",
                    border: `1px solid ${inputBorderColor}`,
                  }}
                  onChange={(e) => {
                    setAddressEntryState(e.target.value);
                  }}
                />
              </form>

              <div style={{ padding: "5px" }} />

              <Button
                text="Go"
                textColor="#75f94c"
                width={75}
                height={50}
                backgroundColor="#484848"
                fontWeight="bold"
                fontSize={18}
                borderRadius={16}
                onClick={() => {
                  verifyAndSubmitAddress(addressEntryState);
                }}
              />
            </div>
          </div>
        </div>

        <Spacer />

        {/* Inner container 2, column */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Fee stuff prob */}
          <div className="container">
            <Text>Testing</Text>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                display: "inline-block",
              }}
            >
              <div></div>

              <p style={{ color: "white", fontFamily: "Roboto Mono" }}>
                Fee: {props.fee * 100}%
              </p>

              <Text>{Number(tpor)}ꜩ paid out</Text>
            </div>
          </div>

          <Spacer />

          <MiniInfoSpaced>
            <Text customFontSize={16}>Baking since block 349</Text>
          </MiniInfoSpaced>
        </div>

        {/* <Spacer /> */}
        {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
        {/* <div */}
        {/* className="container" */}
        {/* style={ */}
        {/* { */}
        {/* // justifyContent: "center", */}
        {/* // alignContent: "center", */}
        {/* // justifyItems: "center", */}
        {/* // alignItems: "center", */}
        {/* } */}
        {/* } */}
        {/* > */}
        {/* something else hjere */}
        {/* <div className="inner-info-box-row">stuff here</div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

const MiniInfoSpaced = ({ children }) => {
  return (
    <div>
      <Spacer />
      <div
        className="container"
        style={{
          padding: "5px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default HomeCarousel;

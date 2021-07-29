import React, { useState } from "react";
import Spacer from "../components/Spacer";
import Text from "../components/Text";
import { CircleProgress } from "../components/react-gradient-progress";
import Modal from "../components/DelegatorModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";

const Tezos = new TezosToolkit("https://sebuh.net:8732");
const wallet = new BeaconWallet({
  name: "Sebuh.net",
  iconUrl: "https://dex.sebuh.net/img/logo.f661f2e0.png",
  preferredNetwork: "mainnet",
});

const HomeCarousel = (props) => {
  const bakerAddress = "tz1R664EP6wjcM1RSUVJ7nrJisTpBW9QyJzP";
  const [modalState, setModalState] = useState(false);
  const [addressEntryState, setAddressEntryState] = useState("");
  const [inputBorderColor, setInputBorderColor] = useState("#75f94c");
  // const [bruh, setBruh] = useState();
  const [tableVisible, setTableVisible] = useState(false);
  const [totalDelegatorRewards, setTotalDelegatorRewards] = useState(0.0);
  const [gridJSData, setGridJSData] = useState([]);

  const p = (props.stakingBalance / props.stakingCapacity) * 100;
  const pFixed = p.toFixed();
  const wtf = (props.stakingCapacity - props.stakingBalance)
    .toFixed()
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const totalPaidOutRewards = Number(
    props.totalPaidOutRewards
      .toFixed()
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );

  const calculateDelegatorRewards = async (addr) => {
    var delRewardsEarned = 0.0;
    const apiResponse = await (
      await fetch(
        `https://api.tzkt.io/v1/rewards/delegators/${addr}?limit=1000`
      )
    ).json();

    const data = [];
    const g = [];

    apiResponse.reverse().forEach((element) => {
      if (element.baker.address === bakerAddress) {
        var thisCycleReward =
          (element.futureBlockRewards +
            element.ownBlockRewards +
            element.extraBlockRewards +
            element.futureEndorsementRewards +
            element.endorsementRewards +
            element.ownBlockFees +
            element.extraBlockFees +
            element.revelationRewards) /
          1000000;

        var balance = (element.balance / 1000000).toFixed(6);

        var stakingBalance = (element.stakingBalance / 1000000).toFixed(6);

        var reward = (
          thisCycleReward *
          (balance / stakingBalance) *
          0.95
        ).toFixed(6);

        delRewardsEarned += Number(reward);

        data.push({
          Cycle: element.cycle,
          Balance: (element.balance / 1000000).toFixed(2),
          Amount: reward,
        });

        g.push([element.cycle, (element.balance / 1000000).toFixed(2), reward]);
      } else console.log("Delegator not delegated for cycle");
    });

    setGridJSData(g.reverse());
    setTotalDelegatorRewards(delRewardsEarned);
    setTableVisible(true);
    console.log(gridJSData);
  };

  const verifyAndSubmitAddress = (address) => {
    if (!/^(tz|KT)[1-2][K-Za-i][A-Za-z0-9]{32}$/.test(address)) {
      setInputBorderColor("#f94c4c");
      return;
    }
    setInputBorderColor("#75f94c");
    calculateDelegatorRewards(address);
    setModalState(true);
  };

  const connectAndDelegateWallet = async () => {
    await wallet.requestPermissions({ network: { type: "mainnet" } });
    Tezos.setWalletProvider(wallet);
    await Tezos.wallet
      .setDelegate({
        source: await wallet.getPKH(),
        delegate: bakerAddress,
      })
      .send();
  };

  const CircleProgressColor = (props) => {
    const colors = ["#f94c4c", "#f78a00", "#cfc500", "#75f94c"];

    var ind = 3;
    var val = props.percentage > 100 ? 100 : props.percentage;
    if (props.percentage >= 90) ind = 0;
    else if (props.percentage >= 50) ind = 2;
    else if (props.percentage >= 75) ind = 1;
    // ind = Math.floor(props.percentage / 25);

    return (
      <CircleProgress
        percentage={Number(val)}
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Modal
          visibility={modalState}
          onClose={setModalState}
          delegatorAddress={addressEntryState}
          payoutsArray={props.payoutsArray}
          modalTableVisible={tableVisible}
          gridJSData={gridJSData}
          delRewardsEarned={totalDelegatorRewards}
        />
      </div>
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
                <span>
                  <button
                    style={{
                      width: 40,
                      height: 35,
                    }}
                    onClick={() => verifyAndSubmitAddress(addressEntryState)}
                  >
                    {" "}
                    {/* Close */}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </span>
              </form>

              <div style={{ padding: "5px" }} />

              {/* <Button
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
              /> */}
            </div>
          </div>
        </div>

        <Spacer />

        {/* Inner container 2, column */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <div className="container"> */}
          {/* <div
              style={{
                flexDirection: "row",
                display: "inline-block",
              }}
            > */}
          <div>
            <button
              style={{
                height: "5vh",
                width: "fit-content",
                fontSize: "1.75vh",
              }}
              onClick={() => {
                connectAndDelegateWallet();
              }}
            >
              Connect wallet to delegate
            </button>
          </div>
          {/* </div> */}
          {/* </div> */}

          <Spacer />

          {/* Fee stuff prob */}
          <div className="container">
            <div
              style={{
                flexDirection: "row",
                display: "inline-block",
              }}
            >
              <div></div>

              <Text>Fee: {props.fee * 100}%</Text>

              <Text>{Number(totalPaidOutRewards)}ꜩ paid out</Text>
            </div>
          </div>

          <MiniInfoSpaced>
            <Text customFontSize={16}>Baking since block 349</Text>
          </MiniInfoSpaced>

          <MiniInfoSpaced>
            {/* <FontAwesomeIcon icon={faExchangeAlt} color="white" size={100} /> */}
            <Text customFontSize={16}>
              1 SEB = {props.tokenPrice.toFixed(3)} XTZ
            </Text>
            <Text customFontSize={16}>
              1 XTZ = {(1.0 / props.tokenPrice).toFixed(2)} SEB
            </Text>
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

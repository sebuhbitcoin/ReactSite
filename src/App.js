import { useMediaQuery } from "react-responsive";
import React, { useState, useEffect } from "react";
import Spacer from "./components/Spacer";
import NavBarItem from "./components/NavBarItem";
import "./App.css";
import Text from "./components/Text";
import HomeCarousel from "./carousels/HomeCarousel";
import AboutCarousel from "./carousels/AboutCarousel";

const App = () => {
  // Responsive media queries
  const isBigScreen = useMediaQuery({ query: "(min-width: 1224px)" });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  // API related constants
  const bbBaseUri = "https://api.baking-bad.org/v2";
  const bakerAddress = "tz1R664EP6wjcM1RSUVJ7nrJisTpBW9QyJzP";

  // State vars
  const [carousel, setCarousel] = useState(0);
  const [stakingBalance, setStakingBalance] = useState(0.0);
  const [stakingCapacity, setStakingCapacity] = useState(1000.0);
  const [fee, setFee] = useState(0.1);
  const [delegators, setDelegators] = useState();
  const [totalPaidOutRewards, setTotalPaidOutRewards] = useState(0.0);
  const [payoutsArray, setPayoutsArray] = useState();
  const [tokenPrice, setTokenPrice] = useState(0.0);

  async function fetchData() {
    // Retrieve BB API Data
    getGeneralBakingData();
    getTotalDelegates();

    getRewardsData("tz1bBFRBHoU3j534nC2ZTP22rSikHGtfrabT");
  }

  async function getGeneralBakingData() {
    const bbResponse = await (
      await fetch(`${bbBaseUri}/bakers/${bakerAddress}`)
    ).json();
    setStakingBalance(bbResponse.stakingBalance);
    setStakingCapacity(bbResponse.stakingCapacity);
    setFee(bbResponse.fee);
  }

  async function getTotalDelegates() {
    fetch(
      "https://sebuh.net:8732/chains/main/blocks/head/context/delegates/tz1R664EP6wjcM1RSUVJ7nrJisTpBW9QyJzP",
      { method: "GET" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setDelegators(
          json.delegated_contracts.length
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
      });
  }

  async function getRewardsData(address) {
    const b = await (
      await fetch(
        "https://bapi.teztools.io/token/KT1981tPmXh4KrUQKZpQKb55kREX7QGJcF3E_0/price"
      )
    ).json();
    setTokenPrice(b.currentPrice);
    alert("THE CURRENT PRICE IS " + b.currentPrice);
    // idk why the f*** it has to be like this
    var currentArray = [];
    const tzStatsResp = await (
      await fetch(`https://api.tzstats.com/explorer/account/${bakerAddress}`)
    ).json();
    setTotalPaidOutRewards(tzStatsResp.total_rewards_earned);

    setPayoutsArray(currentArray);
    // console.log("payoutsArray loaded");
  }

  // Fetch data at root so it won't happen each time HomeCarousel is mounted
  useEffect(() => {
    async function a() {
      fetchData();
    }
    a();
    getRewardsData("tz1bBFRBHoU3j534nC2ZTP22rSikHGtfrabT");
  }, []);

  const NavBar = () => {
    return (
      <div className="navbar">
        <NavBarItem text="Home" onClick={() => setCarousel(0)} />
        <Spacer />
        <NavBarItem
          text="Farm"
          onClick={() => window.open("https://farm.sebuh.net/", "_blank")}
          tooltip={"https://farm.sebuh.net"}
        />
        <Spacer />
        <NavBarItem
          text="Swap"
          onClick={() => window.open("https://dex.sebuh.net/", "_blank")}
          tooltip={"https://dex.sebuh.net"}
        />
        <Spacer />
        <NavBarItem text="About" onClick={() => setCarousel(1)} />
      </div>
    );
  };

  const Carousel = () => {
    const screens = [
      <HomeCarousel
        stakingBalance={stakingBalance}
        stakingCapacity={stakingCapacity}
        fee={fee}
        delegators={delegators}
        totalPaidOutRewards={totalPaidOutRewards}
        payoutsArray={payoutsArray}
        tokenPrice={tokenPrice}
      />,
      <AboutCarousel isBigScreen={isBigScreen} />,
    ];
    return (
      <div
        style={{
          alignItems: "center",
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "center",
          justifySelf: "center",
        }}
      >
        {screens[carousel]}
      </div>
    );
  };

  return (
    <div className="app">
      {/* {isBigScreen && ( */}
      <div>
        {/* <Spacer /> */}
        <p className="wordmark">Sebuh.net XTZ Baker</p>
        <NavBar />
        <div
          style={{
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            justifyItems: "center",
            justifySelf: "center",
          }}
        >
          <Carousel />
        </div>

        <div className="footer">
          <Text
            customClassName="footer-text"
            customColor="#d3d3d3"
            customFontSize={12}
          >
            ©2021-{new Date().getFullYear()} All rights reserved.
            <br />
            Powered by Tezos Reward Distributor
          </Text>
          <Text
            customClassName="footer-text"
            customColor="#d3d3d3"
            customFontSize={12}
          >
            Site built by{" "}
            <a href="https://twitter.com/whattheclap/" target="_blank">
              whattheclap
            </a>
          </Text>
        </div>
      </div>

      {/* )}
      {isTabletOrMobile && (
        <div>
          <div className="navBar">
            <NavBarItem text="︁" />
          </div>
        </div>
      )} */}
    </div>
  );
};

// const NavDrawer = () => {};

export default App;

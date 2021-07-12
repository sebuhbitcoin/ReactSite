import React from "react";
import Spacer from "../components/Spacer";
import Text from "../components/Text";
const AboutCarousel = (props) => {
  return (
    <div>
      <Spacer />
      <div
        className="padded-out"
        style={{
          maxWidth: props.isBigScreen ? "65vw" : "100%",
        }}
      >
        <div className="container">
          <div style={{ padding: 10 }}>
            <Text>
              Sebuh has been involved in Crypto since 2011. In those days he was
              heavily involved with mining Bitcoin. Eventually He moved on to
              selling miners online and supporting people interested in getting
              involved in mining crypto. Over time he pushed for new user
              adoption and helped crypto get more popular. As time went on he
              got tired of the "miner problems" he was constantly dealing with.
              Eventually he tried to find other ways of supporting crypto
              without contributing to the ecological nightmare that proof of
              work crypto mining had become. In 2019 Sebuh fell in love with
              Tezos and everything it offered. After looking for ways to support
              the growth of Tezos Sebuh decided to become a Baker. After about a
              year of research and consuming every bit of information about
              Tezos he could find The Sebuh.net Tezos Bakery was launched. On
              March 17, 2021 the bakery went live on Tezos Mainnet.
            </Text>
            <Text
              customClassName="footer-text"
              customColor="#d3d3d3"
              customFontSize={14}
            >
              Powered by the <a href="https://tzkt.io/">TzKT</a>,{" "}
              <a href="https://tzstats.com/">TzStats</a>, and{" "}
              <a href="https://teztools.io/">TezTools</a> APIs
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCarousel;

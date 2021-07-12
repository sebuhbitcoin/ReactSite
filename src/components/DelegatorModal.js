import Text from "./Text";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Table from "./Table";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

const Modal = (props) => {
  // const [bruh, setBruh] = useState();
  // const [tableVisible, setTableVisible] = useState(false);

  // const calculateDelegatorRewards = async () => {
  //   // TODO: This has to be implemented for this code
  //   // var t_rewards = (
  //   //   (data[i].futureBlockRewards +
  //   //     data[i].ownBlockRewards +
  //   //     data[i].extraBlockRewards +
  //   //     data[i].futureEndorsementRewards +
  //   //     data[i].endorsementRewards +
  //   //     data[i].ownBlockFees +
  //   //     data[i].extraBlockFees +
  //   //     data[i].revelationRewards) /
  //   //   1000000
  //   // ).toFixed(6);

  //   // // Balance
  //   // var del_balance = (data[i].balance / 1000000).toFixed(6);
  //   // Staking balance
  //   // var staking_balance = (data[i].stakingBalance / 1000000).toFixed(6);
  //   // // Share
  //   // var del_share =
  //   // ((data[i].balance / data[i].stakingBalance) * 100).toFixed(3) + "%";

  //   // // Rewards
  //   // var del_rewards = (
  //   //   t_rewards *
  //   //   (del_balance / staking_balance) *
  //   //   (1 - fees / 100)
  //   // ).toFixed(6);

  //   const apiResponse = await (
  //     await fetch(
  //       `https://api.tzkt.io/v1/rewards/delegators/${props.delegatorAddress}?limit=1000`
  //     )
  //   ).json();

  //   console.log(apiResponse);

  //   const data = [];

  //   apiResponse.reverse().forEach((element) => {
  //     if (element.baker.address === bakerAddress) {
  //       console.log(element);
  //       var thisCycleReward =
  //         (element.futureBlockRewards +
  //           element.ownBlockRewards +
  //           element.extraBlockRewards +
  //           element.futureEndorsementRewards +
  //           element.endorsementRewards +
  //           element.ownBlockFees +
  //           element.extraBlockFees +
  //           element.revelationRewards) /
  //         1000000;

  //       var balance = (element.balance / 1000000).toFixed(6);
  //       console.log("Balance now is", balance);

  //       var stakingBalance = (element.stakingBalance / 1000000).toFixed(6);

  //       var reward = (
  //         thisCycleReward *
  //         (balance / stakingBalance) *
  //         0.95
  //       ).toFixed(6);

  //       totalRewardsEarned += Number(reward);

  //       console.log(element.cycle);
  //       console.log(reward);

  //       data.push({
  //         cycle: element.cycle,
  //         balance: element.balance,
  //         amount: reward,
  //       });
  //       console.log("For cycle", element.cycle, reward);
  //     } else console.log("Delegator not delegated for cycle");
  //   });
  //   console.log("Earned", totalRewardsEarned, "in total");
  //   setBruh(data);
  //   setTableVisible(true);
  //   console.log(bruh);
  // };

  const truncate = (str) =>
    `${str.substr(0, 7)}...${str.substr(str.length - 5, 5)}`;

  return (
    <div
      style={{
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "1000",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "20px",
        // boxShadow: "0 0 3px 1px #e3e3e3",
        justifyContent: "left",
        fontSize: "16px",
        color: "white",
        height: "90% ",
        width: "50%",
        transition: "all 125ms ease-in-out",
        opacity: props.visibility ? 1 : 0,
        visibility: props.visibility ? "visible" : "hidden",
        borderRadius: "16px",
      }}
    >
      <div className="modal">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Info for {truncate(props.delegatorAddress)}</Text>
          <button
            style={{
              width: 30,
              height: 30,
              marginLeft: "1vw",
            }}
            onClick={() => props.onClose()}
          >
            {" "}
            {/* Close */}
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text customFontSize={18}>
            Total earned: {props.delRewardsEarned.toFixed(2)} XTZ
          </Text>

          <Grid
            data={props.gridJSData}
            columns={["Cycle", "Balance", "Payout"]}
            search={false}
            sort={true}
            autoWidth={true}
            pagination={{ enabled: true, limit: 10 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;

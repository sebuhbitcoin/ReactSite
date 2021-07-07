import Text from "./Text";
import { useEffect } from "react";

const Modal = (props) => {
  // When this component is mounted, this function will be called.
  // It will be given a string, delegatorAddress, and an array, payoutsArray, which is an array of objects, from props.
  // Each element of payoutsArray has the following values:
  // address, a string
  // amount, a double
  // snapshotBalance, a double
  // It must loop through every element of payoutsArray. Then, it must check if the delegatorAddress is equal to address passed in.
  // If it is, it must add the amount value to a totalAmount variable.
  // Finally, the function will print out the totalAmount variable.
  // function calculateTotalAmount(delegatorAddress, payoutsArray) {
  // let totalAmount = 0.0;
  // for (var i = 0; i < payoutsArray.length; i++) {
  //   console.log(payoutsArray[i]);
  // }
  // let totalAmount = 0;
  // payoutsArray.forEach((element) => {
  //   if (element.address === delegatorAddress) {
  //     totalAmount += element.amount;
  //   }
  // });
  // console.log(totalAmount);
  // }

  const calculateDelegatorRewards = async () => {
    // TODO: This has to be implemented for this code
    // var t_rewards = (
    //   (data[i].futureBlockRewards +
    //     data[i].ownBlockRewards +
    //     data[i].extraBlockRewards +
    //     data[i].futureEndorsementRewards +
    //     data[i].endorsementRewards +
    //     data[i].ownBlockFees +
    //     data[i].extraBlockFees +
    //     data[i].revelationRewards) /
    //   1000000
    // ).toFixed(6);

    // // Balance
    // var del_balance = (data[i].balance / 1000000).toFixed(6);
    // Staking balance
    // var staking_balance = (data[i].stakingBalance / 1000000).toFixed(6);
    // // Share
    // var del_share =
    // ((data[i].balance / data[i].stakingBalance) * 100).toFixed(3) + "%";

    // // Rewards
    // var del_rewards = (
    //   t_rewards *
    //   (del_balance / staking_balance) *
    //   (1 - fees / 100)
    // ).toFixed(6);

    const apiResponse = await (
      await fetch(
        `https://api.tzkt.io/v1/rewards/delegators/${props.delegatorAddress}?limit=1000`
      )
    ).json();

    apiResponse.reverse().forEach((element) => {
      console.log(element);
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

      var del_balance = (element.balance / 1000000).toFixed(6);
      console.log("Balance now is", del_balance);

      var staking_balance = (element.stakingBalance / 1000000).toFixed(6);
      console.log("Staking balance now is", staking_balance);

      var del_share =
        ((element.balance / element.stakingBalance) * 100).toFixed(3) + "%";
      console.log("Share now is", del_share);

      var fees = 5;

      var del_rewards = (
        thisCycleReward *
        (del_balance / staking_balance) *
        (1 - fees / 100)
      ).toFixed(6);

      console.log("For cycle ", element.cycle, del_rewards);
    });
  };

  const truncate = (str) =>
    `${str.substr(0, 7)}...${str.substr(str.length - 5, 5)}`;

  if (props.visibility) {
    console.log(props.delegatorAddress);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // calculateTotalAmount(props.delegatorAddress, props.payoutsArray);
    calculateDelegatorRewards();
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "1000",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 0 75px 1px #e3e3e3",
        fontSize: "16px",
        color: "white",
        height: 500,
        width: 500,
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
            justifyContent: "center",
          }}
        >
          <Text>Info for {truncate(props.delegatorAddress)}</Text>
          <button
            style={{
              marginLeft: "1vw",
            }}
            onClick={() => props.onClose()}
          >
            {" "}
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

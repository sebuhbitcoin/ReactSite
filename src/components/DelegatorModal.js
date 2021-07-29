import Text from "./Text";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

const Modal = (props) => {
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
        minHeight: "82.5vh",
        minWidth: "40%",
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
            height={"50vh"}
          />
          <Text customFontSize="12px">
            Actual rewards may vary.
            <br /> This information is an estimation of expected rewards.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Modal;

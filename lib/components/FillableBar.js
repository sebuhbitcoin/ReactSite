// import Style from "style-it";
// const FillableBar = (props) => {
//   var over = props.percentage > 100;
//   return (
//     // <div
//     //   style={{
//     //     height: props.height,
//     //   }}
//     //   className="progress-container"
//     // >
//     //   <div
//     //     style={{
//     //       width: `${over ? 100 : props.percentage}%`,
//     //       background: `${over ? "#f94c4c" : "#75f94c"}`,
//     //     }}
//     //     className="progress"
//     //   />
//     // </div>
//     Style.it(
//       `
//     progress {
//       border-radius: 16px;
//       height: ${props.height};
//       transition:200ms
//     }
//     progress::-webkit-progress-bar {
//       border-radius: 16px;
//       background: ${over ? "#f94c4c" : "#75f94c"}
//       height: ${props.height};
//     }
//     progress::-webkit-progress-value {
//       border-radius: 16px;
//       background: ${over ? "#f94c4c" : "#75f94c"}
//     }
//     progress::-moz-progress-bar {
//       border-radius: 16px;
//       background: ${over ? "#f94c4c" : "#75f94c"}
//     }`,
//       <progress value={props.percentage} max={100} />
//     )
//   );
// };
// export default FillableBar;
"use strict";
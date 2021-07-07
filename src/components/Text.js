const Text = (props, { children }) => {
  const colors = ["#f94c4c", "#f78a00", "#cfc500", "#75f94c"];
  var ind = 3;
  if (props.bad >= 90) ind = 0;
  else if (props.bad >= 50) ind = 2;
  else if (props.bad >= 75) ind = 1;

  var customClass = "p";
  if (props.customClassName) customClass = props.customClassName;

  var customFontSize = 18;
  if (props.customFontSize) customFontSize = props.customFontSize;

  var customFontWeight = "normal";
  if (props.customFontWeight) customFontWeight = props.customFontWeight;

  return (
    <p
      className={customClass}
      style={{
        color: props.customColor ? props.customColor : colors[ind],
        fontSize: customFontSize,
        fontWeight: customFontWeight,
      }}
    >
      {props.children}
    </p>
  );
};

export default Text;

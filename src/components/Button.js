const Button = (props) => {
  return (
    <div
      className="button-item"
      onClick={props.onClick}
      style={{
        backgroundColor: props.backgroundColor,
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
      }}
    >
      <p
        style={{
          color: props.textColor,
          fontSize: props.fontSize,
          fontWeight: props.customFontWeight,
          fontFamily: "Roboto Mono",
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

export default Button;

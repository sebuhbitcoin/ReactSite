const InfoContainer = (props, { children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="container"
        style={
          {
            // justifyContent: "center",
            // alignContent: "center",
            // justifyItems: "center",
            // alignItems: "center",
          }
        }
      >
        {children}
      </div>
    </div>
  );
};

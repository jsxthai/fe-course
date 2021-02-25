import React from "react";

const Error = ({ error }: { error: string }) => {
  return (
    <h1
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontSize: "2rem",
        margin: 0,
        padding: 0,
      }}
    >
      {error}
    </h1>
  );
};

export default Error;

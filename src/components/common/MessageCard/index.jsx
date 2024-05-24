import React, { useState, useMemo } from "react";

import "./index.scss";

export default function MessageCard({ handleSubmit, setType }) {
  const [data, setData] = useState("");

  return (
    <>
      <div className="message-card">
        <input
          value={data}
          className="message-box"
          placeholder="write your message..."
          onInput={(e) => {
            setData(e.target.value);
          }}
          onKeyUp={() => {
            setType(false);
          }}
          onKeyDown={() => {
            setType(true);
          }}
        ></input>
        <input
          style={{
            float: "right",
            position: "relative",
            bottom: "4vh",
            borderRadius: "10px",
            cursor: "pointer",
            width: "70px",
            padding: "12px",
            marginTop: "-19px",
            border: "none",
            color: "white",
            background: "green",
          }}
          type="submit"
          value="Send"
          onClick={(e) => {
            handleSubmit(data);
          }}
        />
      </div>
    </>
  );
}
// onClick={(e) => {
//             handleSubmit(data);
//           }}

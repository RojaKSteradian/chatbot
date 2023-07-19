import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

function ResponseText(props) {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(props.text);
        const data = await response.json();
        setResponseData(data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.text]);
  // console.log("rose",responseData);

  return (
    <React.Fragment>
    {responseData &&
      Object.entries(responseData).map(([key, value]) => (
        <Typography variant="body2" key={key}>
          <span style={{ color: "text.primary" }}>{key}:</span>{"  "}
          <span style={{ color: "text.secondary" }}>{value}</span>
        </Typography>
      ))}
  </React.Fragment>
);
}

export default ResponseText;



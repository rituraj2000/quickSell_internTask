import React, { useEffect, useState } from "react";
import DashboardColumns from "../Components/DashboardColumns";
import Navbar from "../Components/utils/Navbar";
import "../Components/css/LandingPage.css";

const LandingPage = () => {
  const [groupingState, setGroupingState] = useState("Priority");
  const [orderingState, setOrderingState] = useState("Priority");
  return (
    <div className="overallPage-container">
      <Navbar
        orderingState={orderingState}
        setOrderingState={setOrderingState}
        groupingState={groupingState}
        setGroupingState={setGroupingState}
      />

      <div className="stateComponents-container">
        <DashboardColumns
          orderingState={orderingState}
          groupingState={groupingState}
        />
      </div>
    </div>
  );
};

export default LandingPage;

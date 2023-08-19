import React from "react";
import { useState, useEffect } from "react";
import Container from "./Container";
import Header from "./Header";
import "./css/DashboardColumns.css";

const StateComponents = ({ orderingState, groupingState }) => {
  const statusArray = ["Todo", "In progress", "Backlog"];
  const priorityArray = [
    {
      id: 0,
      name: "No priority",
    },
    {
      id: 4,
      name: "Urgent",
    },

    {
      id: 3,
      name: "High",
    },
    {
      id: 2,
      name: "Medium",
    },
    {
      id: 1,
      name: "Low",
    },
  ];
  const [globalData, setGlobalData] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const orderingFunction = (orderBy, data) => {
      if (orderBy === "Priority") {
        data.sort((a, b) => {
          return b.priority - a.priority;
        });
      } else {
        data.sort((a, b) => {
          // return a.title - b.title;
          let fa = a.title;
          let fb = b.title;
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
      }
    };

    const fetchData = async () => {
      const apiData = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const jsonData = await apiData.json();

      setUserData(jsonData.users);

      if (groupingState === "Priority") {
        const filteredData = priorityArray.map((curStatus) => {
          const data = jsonData.tickets.filter((curData) => {
            return curData.priority === curStatus.id;
          });
          orderingFunction(orderingState, data);
          const res = {
            name: curStatus.name,
            childData: data,
            len: data.length,
          };
          return res;
        });
        setGlobalData(filteredData);
      } else if (groupingState === "Status") {
        const userData = jsonData.users;

        const filteredData = statusArray.map((curStatus) => {
          const data = jsonData.tickets.filter((curData) => {
            return curData.status === curStatus;
          });
          orderingFunction(orderingState, data);
          const res = { name: curStatus, childData: data, len: data.length };
          return res;
        });
        setGlobalData(filteredData);
      } else {
        const userData = jsonData.users;

        const filteredData = userData.map((curUser) => {
          const data = jsonData.tickets.filter((curData) => {
            return curData.userId === curUser.id;
          });
          orderingFunction(orderingState, data);
          const res = { name: curUser.name, childData: data, len: data.length };
          return res;
        });
        setGlobalData(filteredData);
      }
    };
    fetchData();
  }, [groupingState, orderingState]);
  return (
    <div className="columnContainer">
      {globalData.map((curStatus) => {
        console.log(curStatus);

        return (
          <div className="xx">
            <Header title={curStatus.name} count={curStatus.len} />
            {curStatus.childData.map((data) => {
              return (
                <Container
                  id={data.id}
                  title={data.title}
                  tag={data.tag[0]}
                  user={userData.filter((curData) => {
                    return curData.id === data.userId;
                  })}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default StateComponents;

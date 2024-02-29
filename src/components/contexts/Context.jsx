import { createContext, useContext, useState } from "react";

const tableColors = [
  {
    color: "#C1AD9E",
    name: "silk",
  },
  {
    color: "#855E42",
    name: "brown",
  },
  {
    color: "#36261B",
    name: "cocoa",
  },
  {
    color: "#CDBDB1",
    name: "wafer",
  },
  {
    color: "#CDBDB1",
    name: "coconut",
  },
  {
    color: "#59555b",
    name: "grey",
  },

];

const legsColors = [
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#59555b",
    name: "grey",
  },


];

const CustomContext = createContext({});

export const CustomContextProvider = (props) => {
  const [material, setMaterial] = useState("wood");
//   const [legs, setLegs] = useState(1);
  const [tableColor, setTableColor] = useState(tableColors[0]);
  const [legsColor, setLegsColor] = useState(legsColors[0]);

  return (
    <CustomContext.Provider
      value={{
        material,
        setMaterial,
        tableColors,
        tableColor,
        setTableColor,
        legsColors,
        legsColor,
        setLegsColor,
      }}
    >
      {props.children}
    </CustomContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomContext);
  return context;
};

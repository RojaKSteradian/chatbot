import React from "react";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export const ColorModeProvider = (props) => {
  const [mode, setMode] = React.useState("light");

  return (
    <ColorModeContext.Provider value={[mode, setMode]}>
      {props.children}
    </ColorModeContext.Provider>
  );
};

import * as React from 'react';

export const ThemeContext = React.createContext();

const INITIAL_STATE = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = React.useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const UserContext = React.createContext();

const INITIAL_USER_STATE = { name: 'John Doe', age: 19 };

export const UserProvider = (props) => {
  const [state, setState] = React.useState(INITIAL_USER_STATE);

  return (
    <UserContext.Provider value={{ state, setState }}>
      {props.children}
    </UserContext.Provider>
  );
};

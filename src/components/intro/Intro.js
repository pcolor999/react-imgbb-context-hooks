import * as React from 'react';
import './intro.css';

import { ThemeContext, UserContext } from '../../context';

const Intro = () => {
  const theme = React.useContext(ThemeContext);

  const handleClick = (e) => {
    theme.dispatch({ type: 'TOGGLE' });
  };

  const user = React.useContext(UserContext);

  const handleChangeName = (e) => {
    const newUserState = { ...user.state, name: 'Erik Tom' };
    user.setState(newUserState);
  };

  const handleAddAge = (e) => {
    const newAge = user.state.age + 1;
    const newUserState = { ...user.state, age: newAge };
    user.setState(newUserState);
  };

  return (
    <div className="intro-component">
      <div>Intro</div>
      <img
        className="intro-img"
        src="https://i.ibb.co/4s8Tthz/Match-Subject-to-Background-1.jpg"
      ></img>
      <div>{JSON.stringify(theme)}</div>
      <div>
        <button onClick={handleClick}>Switch Mode</button>
      </div>
      <div>{user.state.name}</div>
      <div>{user.state.age} years old</div>
      <div>
        <button onClick={handleChangeName}>Change Name</button>
        <button onClick={handleAddAge}>Add Age</button>
      </div>
    </div>
  );
};

export default Intro;

import React from 'react';

const Home = () => {
  return (
    <div className="center-align" style={{ margin: '200px 25% 0 25%'}}>
      <h3>Home</h3>
      <p>Admins are only shown after logging in</p>
      <p>"localhost:3000/static" shows static page which is under static folder</p>
    </div>
  );
};

export default {
  component: Home
};

import React from 'react';
import '@react95/sans-serif';

export const appInfo = {
  id: 'hello',
  name: 'Hello World',
  icon: '👋',
};

const HelloWorldApp: React.FC = () => {
  return <div style={{ padding: 8 }}>Hello, world! Random number: {Math.random()}</div>;
};

export default HelloWorldApp; 
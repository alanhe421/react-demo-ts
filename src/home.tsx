import { Link } from 'react-router-dom';
import React from 'react';

export default () => {

  const menu = [
    {
      path: '/terminal',
      label: 'terminal',
    },
    {
      path: '/monaco-editor',
      label: 'monaco editor',
    },
  ];
  return <div>
    <ul>
      {
        menu.map(item => {
          return <li key={item.label}>
            <Link to={item.path}>{item.label}</Link>
          </li>;
        })
      }
    </ul>
  </div>;
}

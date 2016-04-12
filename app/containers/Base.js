import React from 'react';
import { Link } from 'react-router';

export default ({children}) => {
  return (
    <div>
      <Link to={'/about'}>About Us</Link>
      {children}
    </div>
  )
}
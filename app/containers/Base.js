import React from 'react';
import { Link } from 'react-router';

export default ({children}) => {
  return (
    <div className="container">
        <Link className="" to={'/about'}>About Us</Link>
        {children}
    </div>
  )
}
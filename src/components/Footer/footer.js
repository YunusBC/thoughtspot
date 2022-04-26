import React from 'react';
//import './index.css';

const Footer = () => {
  return (
<div className="page-footer">
<div className="page-footer-inner"> © Copyright 2022 Blue.cloud Inc | Powered by <img src={require('../../assets/img/logo1.png')}/>
</div>
<div className="scroll-to-top">
    <i className="material-icons">eject</i>
</div>
</div>
  )
}

export default Footer;
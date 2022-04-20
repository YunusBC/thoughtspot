import React from 'react';
import './index.css';

const Cards = () => {
  return (
            <div className="ui grid">
        <div className="four wide column">
          <iframe className="iframeCssNew" title="Total Clients" src="https://livingston.thoughtspot.cloud/#/embed/viz/8549c2cc-acc9-4d63-ad88-bc6ced42f8e0/b45efaa4-1522-43ed-9de2-203d848f5982"></iframe>
        </div>
        <div className="four wide column">
          <iframe className="iframeCssNew" title="Total Paid Amount" src="https://livingston.thoughtspot.cloud/#/embed/viz/8549c2cc-acc9-4d63-ad88-bc6ced42f8e0/4e90cb90-5d8a-4c42-8a5c-50bc92d87098"></iframe>
        </div>
        <div className="four wide column">
          <iframe className="iframeCssNew" title="Total Freight Amount" src="https://livingston.thoughtspot.cloud/#/embed/viz/8549c2cc-acc9-4d63-ad88-bc6ced42f8e0/c6a2f9fc-7b09-452a-8f57-77b72575ff02"></iframe>
        </div>
        <div className="four wide column">
          <iframe className="iframeCssNew" title="Total Products" src="https://livingston.thoughtspot.cloud/#/embed/viz/8549c2cc-acc9-4d63-ad88-bc6ced42f8e0/5f556da2-c2a2-47f8-ba1a-413e95701202"></iframe>
        </div>
      </div>
  )
}

export default Cards;
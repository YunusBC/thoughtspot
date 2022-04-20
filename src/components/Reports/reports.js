import React from 'react';
import './index.css';

const Reports = () => {
  return (
      <>
    <div className="ui grid">
        <div className="eight wide column">
            <iframe className="iframeCss" title="Top 5 Shipments" src="https://livingston.thoughtspot.cloud/#/embed/viz/8549c2cc-acc9-4d63-ad88-bc6ced42f8e0/ede743d9-38b6-4a72-9ce8-e9d617c5d51e"></iframe>
        </div>
        <div className="eight wide column">
            <iframe className="iframeCss" title="Duty Free" src="https://livingston.thoughtspot.cloud/#/embed/viz/8549c2cc-acc9-4d63-ad88-bc6ced42f8e0/fb51ac4d-ab61-49f8-bd21-983a4a11d1a2"></iframe>
        </div>
    </div>
    <div className="ui grid">
        <div className="eight wide column">
            <iframe className="iframeCss" title="Number Of Shipments" src="https://livingston.thoughtspot.cloud/#/embed/viz/8549c2cc-acc9-4d63-ad88-bc6ced42f8e0/e8dc27cf-1322-4086-95b5-bad3796b7cf5"></iframe>
        </div>
        <div className="eight wide column">
            <iframe className="iframeCss" title="Top 10 Products" src="https://livingston.thoughtspot.cloud/#/embed/viz/8549c2cc-acc9-4d63-ad88-bc6ced42f8e0/02c782b2-cf76-4236-8c1c-a75f6cff72cf"></iframe>
        </div>
    </div>
    </>
  )
}

export default Reports;
import * as React from 'react';
const FooterComponent = () => {
  return <div className="footer mt-32">
    <div>
      <div>STAY CONNECTED</div>
      <div></div>
    </div>
    <div>
      <div>BE OUR FRIEND</div>
      <div>
        <input className="sub-input mt-8" placeholder="Email" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className="sub-btn">Update Me</button>
      </div>
    </div>
    <div className="center-child">
      <div>NEED ASSISTANCE</div>
      <div className="m-4">123-456-789</div>
      <div>info@my-site.com</div>
    </div>
  </div>
}
export default FooterComponent;
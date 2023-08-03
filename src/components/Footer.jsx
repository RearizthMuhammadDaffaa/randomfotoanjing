import React from 'react'

const Footer = () => {
  return (
   <section className="footer-container">
      <h2>my social media</h2>
      <div className="footer-img">
        <ul>
          <li>
            <a href="https://github.com/RearizthMuhammadDaffaa/randomfotoanjing.git">
               <img src="data:image/png;base64,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" alt="" />
            </a>
          </li>
        </ul>
       
      </div>
   </section>
  )
}

export default Footer
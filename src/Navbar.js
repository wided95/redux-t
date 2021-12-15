import React from 'react'
const Navbar = () => {
    return (
        <div className="container">
            <div className="contact">
            <h1> Contact Us</h1>
            <p>lv,bbdfdfjdsfiogvflovfdb</p>
            </div>
        <div class="modal-bg">
          <div className="modal-body">
              <span>Full Name</span>
            <input type="text" placeholder="FullName" ></input>
            <span>Email</span>
            <input type="text" placeholder="Email" ></input>
            <span>Message</span>
            <input type="text" placeholder="Enter your message" ></input>
            <button >Submit</button>
          </div>
        </div>
        </div>
           
    )
}

export default Navbar

import React, { useState, useEffect } from 'react';
import backgroundImage from '../../../assets/events/headerimg2.jpg';
import logo from '../../../assets/events/companylogo.png';
import image1 from '../../../assets/events/image1.jfif';
import image2 from '../../../assets/events/CT.png';



  
const Sustainability = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrolled = scrollTop > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
           <style>{`
       /* Header styles */

       .header {
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 80px; /* Adjust height as needed */
         z-index: 1000; /* Ensure the header appears above other content */
         transition: background-color 0.3s; /* Smooth transition for background color change */  
         margin-top: 0;
       }
       
       .header.scrolled {
         background-color: rgb(39, 39, 39); /* Transparent black color */
         /* Add any other styles for the scrolled header */
       }
         
         .container {
           display: flex;
           justify-content: space-between;
           align-items: center;
           padding-left: 250px; /* Adjust padding */
           padding-right: 250px; /* Adjust padding */
           margin-top: 20px;
         }
         .background-image{
           position: relative;
           width: 100%;
           height: 1100px;
           overflow: hidden;
           width: 100%;
           
           position: absolute;
           top: 0; /* Center vertically */
           left: 50%; /* Center horizontally */
           transform: translate(-50%, -50%);
         }
         .logo {
           width: 150px; /* Adjust width as needed */
           height: auto; /* Maintain aspect ratio */
         }
         
         .navigation ul {
           list-style: none;
           padding: 0;
           margin: 0;
         }
         
         .navigation ul li {
           display: inline-block;
           margin-right: 20px;
         }
         
         .navigation ul li a {
           color: white;
           text-decoration: none;
         }
         
         .navigation ul li a:hover {
           color: orange;
         }
         
         .times-new-roman {
           font-family: 'Times New Roman', Times, serif;
         }
         
         .italic {
           font-style: italic;
         }
         
         .main-content {
           margin-top: 180px; /* Adjust margin top to position below header */
           padding: 20px;
         }
         .left-container {
           position: absolute;
           top: -60px; /* Adjust the top position to be below the header */
           margin-left: 430px; /* Position it in the center horizontally */
           transform: translateX(-50%); /* Center it horizontally */
           padding: 20px;
           background-color: none;
           margin-top: 90px;
           /* Additional styles for left container */
         }
         
         
         .countdown-container {
           position: absolute;
           top: 430px; /* Adjust top position */
           left: 50%;
           transform: translate(-50%, -50%);
           display: flex;
           justify-content: space-between;
         }
         
         .countdown-box {
           display: inline-block;
           width: 75px;
           margin: 7px;
           height: 45px;
           padding: 20px;
           box-shadow: 1px 10px 20px rgba(0, 0, 0, .2);
           border-radius: 4px;
           background: #e3e3e378;
           text-align: center;
           font-weight: 400;
           color: #212121;
           font-size: 16px;
           text-transform: uppercase;
           line-height: 13px;
         }
         
         .countdown-number {
           font-size: 20px;
           color: green;
           margin-bottom: 5px;
           font-weight: bold;
         }
         
         .countdown-label {
           font-size: 20px;
           color: green;
           margin-top: 20px;
           font-weight: bold;
         }
         
         .register-btn {
           background-color: rgb(247, 176, 69);
           color: white;
           font-weight: bold;
           border-radius: 20px;
           border: none;
           padding: 10px 20px;
         }
         
         .card-container {
           background-color: white;
           padding: 20px;
           display: flex;
           justify-content: space-between;
           align-items: center;
           border: 1px solid #ccc;
           position: relative; /* Set position to relative */
           z-index: 1; /* Ensure the card container appears above other elements */
           width: 1000px; /* Adjust width as needed */
           margin: 0 auto; /* Center the container horizontally */
           margin-top: 310px; /* Adjust the margin-top to position it below the countdown container */
           height: 120px;
         }
         
         
         .card-content {
           display: flex;
           justify-content: space-between;
           width: 1000px;
         }
         
         .card-section {
           flex: 1;
           text-align: center;
         }
         
         h4 {
           margin-bottom: 10px;
         }
         
         .empty-box, .image-box {
           width: 200px;
           height: 90px;
           border: 1px solid #ccc;
           margin-bottom: 10px;
           margin-left: 80px;
         }
       
         /* Text Card */
       
         /* Add styles for the text container */
       .text-container {
           display: flex;
           justify-content: space-around;
           padding: 30px; /* Add padding as needed */
           width: 1200px;
           margin-left: 140px;
           margin-top: -10px;
         }
         
         /* Add styles for the left and right sub-containers */
         .text-left,
         .text-right {
           flex: 1;
         }
         
         /* Add styles for the heading and paragraph */
         .text-container h2 {
           color: #45dd31; /* Adjust color as needed */
           font-size: 24px; /* Adjust font size as needed */
           margin-bottom: 10px; /* Add margin bottom as needed */
           text-align: center; /* Center text */
           font-family: 'Times New Roman', Times, serif;
         }
         
         .text-container p {
           color: #666; /* Adjust color as needed */
           font-size: 16px; /* Adjust font size as needed */
           line-height: 1.5; /* Adjust line height as needed */
           word-wrap: break-word; /* or overflow-wrap: break-word; */
         }
         .text-left {
           margin-right: 20px; /* Adjust the margin to increase or decrease the space */
         }
         
         .text-right {
           margin-left: 20px; /* Adjust the margin to increase or decrease the space */
         }
       
         /* Form */
       
         .form-container {
           display: flex;
           justify-content: space-between;
           margin-left: 150px;
           margin-right: 80px;
           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
           height: 600px;
           margin-top: 20px;
           width: 1200px;
           background-color: #f3f2f2;
         }
         
         .left-form {
           display: flex;
           flex-direction: column;
         }
         
         .form-sub-container {
           display: flex;
           justify-content: space-between;
         }
         
         .form-left-sub,
         .form-right-sub {
           width: 50%;
         }
         
         .form-group {
           margin-bottom: 1rem;
           margin-left: 20px;
           margin-top: 25px;
         }
         
         .label {
           display: block;
           margin-bottom: 0.5rem;
         
         }
         
         
         .fullname{
           width: 500px;
           height: 25px;
           text-indent: 10px;
           margin-top: 5px;
       
         }
         
         .resttext{
           width: 200px;
           height: 25px;
           text-indent: 10px;
           margin-top: 5px;
         }
         
         
         .image {
           width: 600px;
           height: 580px;
           margin-top: 10px;
         }
         
         .right-text {
           position: relative; /* Make the container relative for absolute positioning */
         }
         
         .abovetext {
           position: absolute; /* Position the text relative to the container */
           top: 0; /* Align the top of the text container to the middle of the parent container */
           left: 25%; /* Align the left of the text container to the middle of the parent container */
           text-align: center; /* Align the text inside the container center */
           color: white; /* Set text color */
         }
         
         .abovetext h2 {
           margin-bottom: 10px; /* Add some spacing between the heading and spans */
         }
         
         
         .btn{
           width: 125px;
           height: 30px;
           margin-left: 20px;
           border-radius: 20px;
           font-weight: bold;
           background-color: orange;
           color: white;
           outline: none;
         }
       
         /* Texts */
       
         /* Add styles for the text container */
       .t-container {
           display: flex;
           justify-content: space-around;
           padding: 30px; /* Add padding as needed */
           width: 1200px;
           margin-left: 140px;
          
         }
         
         /* Add styles for the left and right sub-containers */
         .t-left,
         .t-right {
           flex: 1;
         }
         
         /* Add styles for the heading and paragraph */
         .t-container h2 {
           color: #111211; /* Adjust color as needed */
           font-size: 24px; /* Adjust font size as needed */
           margin-bottom: 10px; /* Add margin bottom as needed */
           text-align: center; /* Center text */
           font-family: 'Times New Roman', Times, serif;
         }
         
         .t-container p {
           color: #666; /* Adjust color as needed */
           font-size: 16px; /* Adjust font size as needed */
           line-height: 1.5; /* Adjust line height as needed */
           word-wrap: break-word; /* or overflow-wrap: break-word; */
         }
         .t-left {
           margin-right: 20px; /* Adjust the margin to increase or decrease the space */
         }
         
         .t-right {
           margin-left: 20px; /* Adjust the margin to increase or decrease the space */
         }
         
         
         .T-Container {
             width: 100%;
         }
         
         .t-colored {
             background-image: linear-gradient(to right, #00a600 0%, #002df7 100%), linear-gradient(to right, #00a600 0%, #002df7 100%);
             color: white;
             font-size: 15px;
             height: 50px;
             display: flex;
             align-items: center; /* Align content vertically center */
         }
         
         .t-colored h2 {
             text-align: center; /* Align text horizontally center */
             margin-left: 600px;
         }
         .t-list {
             list-style: none;
             padding: 0;
           
           }
           
           .t-list li {
             margin-bottom: 5px;
             padding-left: 20px;
             position: relative;
             margin-left: 100px;
           }
           
           .t-list li:before {
             position: absolute;
             left: 0;
           }
       
           
           /* Calender */
       
           .c-heading{
               font-weight: bold;
               text-align: center;
               font-size: 40px;
               margin-top: 20px;
               font-family: Georgia, 'Times New Roman', Times, serif;
             }
             
             .c-container {
               display: flex;
               width: 1000px;
               margin-left: 300px;
               margin-top: 50px;
             }
             
             .c-box {
               width: 400px;
               height: 380px;
               margin-right: 10px;
               box-shadow: 0 0 30px rgba(0, 0, 0, .2);
             }
             
             .c-text-container {
               padding: 10px;
             }
             
             .c-text {
               background-color: #1d3be5;
               padding: 5px;
               margin-left: 5px;
               border-radius: 10px;
               width: 100px;
               height: 10px;
               font-size: 10px;
               font-weight: bold;
               color: white;
             }
             
             .c-description {
               text-align: center;
             }
             
             /* Card */
             .ca-container {
               background-color: white;
               padding: 20px;
               display: flex;
               justify-content: space-between;
               align-items: center;
               /* border: 1px solid #ccc; */
               position: relative; /* Set position to relative */
               z-index: 1; /* Ensure the card container appears above other elements */
               width: 1000px; /* Adjust width as needed */
               margin: 0 auto; /* Center the container horizontally */
               margin-top: 900px; /* Adjust the margin-top to position it below the countdown container */
               height: 120px;
               margin-left: 280px;
             }
             
             
             .ca-content {
               display: flex;
               justify-content: space-between;
               width: 1000px;
             }
             
             .ca-section {
               flex: 1;
               text-align: center;
             }
             
             h4 {
               margin-bottom: 10px;
             }
             
             .ea-box, .ia-box {
               width: 200px;
               height: 90px;
               border: 1px solid #ccc;
               margin-bottom: 10px;
               margin-left: 80px;
             }
       
       
             .c-container {
               background-color: white;
               padding: 20px;
               display: flex;
               justify-content: space-between;
               align-items: center;
               
               position: relative; /* Set position to relative */
               z-index: 1; /* Ensure the card container appears above other elements */
               width: 1000px; /* Adjust width as needed */
               margin: 0 auto; /* Center the container horizontally */
               margin-top: 10px; /* Adjust the margin-top to position it below the countdown container */
               height: 120px;
               margin-bottom: 30px;
             }
             
             
             .c-content {
               display: flex;
               justify-content: space-between;
               width: 1000px;
             }
             
             .c-section {
               flex: 1;
               text-align: center;
             }
             
             h4 {
               margin-bottom: 10px;
             }
             
             .e-box, .i-box {
               width: 200px;
               height: 90px;
               border: 1px solid #ccc;
               margin-bottom: 10px;
               margin-left: 80px;
             }
             /* Footer */
       
             
       .footer {
           display: flex;
           justify-content: space-between;
           padding: 20px;
           background-color: rgb(21, 21, 21); /* Set background color to red */
           color: white; /* Set text color to white */
           font-family: 'Times New Roman', Times, serif; /* Set font family to Times New Roman */
          
       }
       
       .f-alltext{
           margin-left: 200px;
           margin-right: 100px;
           display: flex;
           }
         .image-container {
           display: flex;
           flex-direction: column;
           margin-right: 20px; /* Adjust margin as needed */
         }
         .i-footer-section {
           flex: 1;
           margin-right: 20px;
         }
         .q-footer-section {
           flex: 1;
           margin-right: 20px;
         }
         .r-footer-section {
           flex: 1;
           margin-right: 20px;
         }
         .c-footer-section {
           flex: 1;
           margin-right: 50px;
         }
       
         
         
         .footer-image {
           width: 100px; /* Adjust image size as needed */
           height: 100px; /* Adjust image size as needed */
         }
         
         .footer-text {
           margin-top: 10px;
         }
         
         .recent-posts {
           display: flex;
           flex-direction: column;
         }
         
         .post {
           display: flex;
           align-items: center;
           margin-bottom: 10px;
         }
         
         .post img {
           width: 50px; /* Adjust image size as needed */
           height: 50px; /* Adjust image size as needed */
           margin-right: 10px;
         }
         
         .social-icons {
           display: flex;
         }
         
         .social-icons img {
           width: 30px; /* Adjust icon size as needed */
           height: 30px; /* Adjust icon size as needed */
           margin-right: 10px;
         }
         .i-footer-section ul {
           list-style: none; /* Remove bullet point */
           padding: 0; /* Remove default padding */
         }
         
         .i-footer-section a {
           color: white; /* Set link color to white */
           text-decoration: none; /* Remove underline */
         }
       
         .q-footer-section ul {
           list-style: none; /* Remove bullet point */
           padding: 0; /* Remove default padding */
         }
         
         .q-footer-section a {
           color: white; /* Set link color to white */
           text-decoration: none; /* Remove underline */
         }
         
         .r-footer-section ul {
           list-style: none; /* Remove bullet point */
           padding: 0; /* Remove default padding */
         }
         
         .r-footer-section a {
           color: white; /* Set link color to white */
           text-decoration: none; /* Remove underline */
         }
       
         .c-footer-section ul {
           list-style: none; /* Remove bullet point */
           padding: 0; /* Remove default padding */
         }
         
         .c-footer-section a {
           color: white; /* Set link color to white */
           text-decoration: none; /* Remove underline */
         }
         body {
           margin: 0;
           padding: 0;
           font-family: 'Arial', sans-serif;
           background-color: #f0efef; /* Set the background color to gray */
         }
       
         /* Add this CSS to your existing styles or your Sustainability.css file */
       
       /* Reset default list styles */
       .social {
         margin: 0;
         padding: 0;
         list-style: none;
       }
       
       /* Style each list item */
       .social li {
         display: inline-block;
         margin-right: 5px; /* Adjust margin between icons */
       }
       
       /* Style social icon links */
       .social li a {
         color: #000;
         background: #fff;
         width: 35px;
         height: 35px;
         line-height: 35px;
         display: block;
         text-align: center;
         border-radius: 4px;
         font-size: 15px;
         transition: all .3s ease-in-out 0s;
       }
       
       /* Add specific styles for each social icon */
       .social li a.facebook {
         background-color: #ebeef4; /* Facebook blue */
         color: #fff; /* White text */
       }
       
       .social li a.twitter {
         background-color: #ebeef4; /* Twitter blue */
       }
       
       .social li a.instagram {
         background-color: #ebeef4; /* Instagram pink */
       }
       
       .social li a.linkedin {
         background-color: #ebeef4; /* LinkedIn blue */
       }
       
       /* Optional: Add hover effect */
       .social li a:hover {
         transform: translateY(-2px); /* Move icon up slightly on hover */
       }
       
      `}</style>
    
      <div className="main-content">
        <div className="left-container">
          <h6 className="times-new-roman" style={{ color: 'green', fontSize: '20px', fontWeight: 'normal', marginBottom: '10px' }}>Virtual conference on - April 8th 2022</h6>
          <h1 className='times-new-roman' style={{ color: 'green', marginTop: '10px', fontSize: '50px', marginBottom: '10px' }}>SUSTAINABILITY<br />CIRCULARITY<br />SUMMIT 2022</h1>
          <h6 className="italic" style={{ color: 'green', marginTop: '10px', fontSize: '20px', fontWeight: 'normal', marginBottom: '10px' }}>Ignition Action in chemical and plastic industry</h6>
          <button className="register-btn" style={{ marginTop: '-10px' }}>Register Now</button>
        </div>

        <div className="countdown-container">
          {/* Countdown Logic goes here */}
          <div className="countdown-box">
            <div className="countdown-number">0</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-number">0</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-number">0</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-number">0</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <div className="card-section">
              <h4>Organized By</h4>
              <div className="empty-box"></div>
            </div>
            <div className="card-section">
              <h4>Media Partner</h4>
              <div className="image-box"></div>
            </div>
            <div className="card-section">
              <h4>Knowledge Partner</h4>
              <div className="empty-box"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Card Section */}
      <div className="text-container">
        {/* Left sub-container */}
        <div className="text-left">
          <h2>Sustainability</h2>
          <p>Chemical industry is the mother of all industries and plays a vital role in the way the world operates. However, there is a need for the chemical industry to improve its footprint by adopting sustainable solutions and innovative strategies to not just make chemicals more sustainable but play an important role in the overall circular economy of every customer industry that they serve.</p>
          <p>This sustainable ecosystem in the chemical industry can be achieved in many ways: by reducing the use of chemicals, minimizing solvent-use, promoting renewable chemicals, addressing wastewater treatment problems, and having an inclusive growth strategy while maintaining Environment, Health, and Safety parameters.</p>
        </div>
        {/* Right sub-container */}
        <div className="text-right">
          <h2>Circular Economy In Plastic</h2>
          <p>Plastics have become the material of choice for any and every industry due to its unique properties of being versatile, lightweight, moisture-resistant, and strong while being relatively inexpensive. But this fatal attraction for plastics, coupled with unrestrained over-consumption, has converted it into a pollutant for the planet harming the environment, animal, aquatic, and human lives alike.</p>
          <p>It is estimated that in the linear economy of plastics, approximately 80% of the total 6.3 Bt of plastics ever produced have been discarded leading to ever-increasing environmental disaster. There is a dire need to change the way we design, use, and reuse plastics, and the only solution is to create a circular economy for plastics to harness its potential while protecting the ecosystem.</p>
        </div>
      </div>
      

      {/* Form Section */}
      <div className='form-container'>
      <div className='left-form'>
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label><br/>
            <input className='fullname'type="text1" id="fullName" placeholder="Full name" />
          </div>
          <div className="form-sub-container">
            <div className="form-left-sub">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input className='resttext'type="email" id="email" placeholder="Email " />
              </div>
              <div className="form-group">
                <label htmlFor="jobTitle">Job Title:</label><br/>
                <input className='resttext' type="text" id="jobTitle" placeholder="Job title" />
              </div>
            </div>
            <div className="form-right-sub">
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input className='resttext' type="tel" id="phone" placeholder="Phone number" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name:</label>
                <input className='resttext' type="text" id="company" placeholder="Company name" />
              </div>
            </div>
          </div>
          <div className="form-sub-container">
            <div className="form-left-sub">
              <div className="form-group">
                <label htmlFor="city">City:</label><br/>
                <input className='resttext' type="text" id="city" placeholder="City" />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country:</label><br/>
                <input className='resttext' type="text" id="country" placeholder="Country" />
              </div>
            </div>
            <div className="form-right-sub">
              <div className="form-group">
                <label htmlFor="state">State:</label><br/>
                <input className='resttext' type="text" id="state" placeholder="State" />
              </div>
              <div className="form-group">
                <label htmlFor="pincode">Pincode:</label><br/>
                <input className='resttext' type="text" id="pincode" placeholder="Pincode" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="fullName">Address</label><br/>
            <input className='fullname'type="text1" id="address" placeholder="Address" />
          </div>
        </form>
        <button className='btn'>Register Now</button>
      </div>
      <div className='right-text'>
        <img className= 'image' src={backgroundImage} alt='image'/>
        <div className='abovetext'>
          <h2>LET GET IN TOUCH</h2>
          <p>Phone: +91 9945397257</p>
          <p>Email: advt@worldofchemicals.com</p>
        </div>
      </div>
    </div>



    {/* Texts Section*/}
<div className='T-Container' style={{marginTop:'50px'}}>
  <div className='t-colored'>
    <h2>Who Should Attend</h2> 
  </div>
  <div className="t-container" style={{display: 'flex', justifyContent: 'space-between'}}>
    {/* Left sub-container */}
    <div className="t-left" style={{flex: '1'}}>
      {/* Heading and unordered list */}
      <h2>Sustainability</h2>
      <ul className="t-list">
        <li>CEOs</li>
        <li>Decision Makers</li>
        <li>Senior Executives</li>
        <li>IT & Technology managers</li>
        <li>Automation Heads</li>
        <li>Plant Managers & Operators</li>
        <li>Supply Chain & Logistics managers</li>
        <li>Quality Heads and Professionals</li>
        <li>Sustainability Experts & Consultants</li>
        <li>Chemical Companies</li>
        <li>CSR /ESG Professionals</li>
        <li>Bio-based chemical researchers</li>
        <li>Renewable chemical professionals</li>
      </ul>
    </div>

    {/* Right sub-container */}
    <div className="t-right" style={{flex: '1'}}>
      {/* Heading and unordered list */}
      <h2>Circular Economy in plastics</h2>
      <ul className="t-list">
        <li>CEOs</li>
        <li>Decision Makers</li>
        <li>Senior Executives</li>
        <li>IT & Technology managers</li>
        <li>Automation Heads</li>
        <li>Plant Managers & Operators</li>
        <li>Supply Chain & Logistics managers</li>
        <li>Quality Heads and Professionals</li>
        <li>Sustainability Experts & Consultants</li>
        <li>Chemical Companies</li>
        <li>CSR /ESG Professionals</li>
        <li>Bio-based chemical researchers</li>
        <li>Renewable chemical professionals</li>
      </ul>
    </div>
  </div>
  <div className='t-colored'>
    <h2>Why Should You Attend?</h2> 
  </div>
  <div className="t-container" style={{display: 'flex', justifyContent: 'space-between'}}>
    {/* Left sub-container */}
    <div className="t-left" style={{flex: '1'}}>
      {/* Heading and unordered list */}
      <h2>Sustainability</h2>
      <ul className="t-list">
        <li>CEOs</li>
        <li>Decision Makers</li>
        <li>Senior Executives</li>
        <li>IT & Technology managers</li>
        <li>Automation Heads</li>
        <li>Plant Managers & Operators</li>
        <li>Supply Chain & Logistics managers</li>
        <li>Quality Heads and Professionals</li>
        <li>Sustainability Experts & Consultants</li>
        <li>Chemical Companies</li>
        <li>CSR /ESG Professionals</li>
        <li>Bio-based chemical researchers</li>
        <li>Renewable chemical professionals</li>
      </ul>
    </div>

    {/* Right sub-container */}
    <div className="t-right" style={{flex: '1'}}>
      {/* Heading and unordered list */}
      <h2>Circular Economy in plastics</h2>
      <ul className="t-list">
        <li>CEOs</li>
        <li>Decision Makers</li>
        <li>Senior Executives</li>
        <li>IT & Technology managers</li>
        <li>Automation Heads</li>
        <li>Plant Managers & Operators</li>
        <li>Supply Chain & Logistics managers</li>
        <li>Quality Heads and Professionals</li>
        <li>Sustainability Experts & Consultants</li>
        <li>Chemical Companies</li>
        <li>CSR /ESG Professionals</li>
        <li>Bio-based chemical researchers</li>
        <li>Renewable chemical professionals</li>
      </ul>
    </div>
  </div>
</div>

<div className="c-container">
          <div className="c-content">
            <div className="c-section">
              <h4>Organized By</h4>
              <div className="e-box"></div>
            </div>
            <div className="c-section">
              <h4>Media Partner</h4>
              <div className="image-box"></div>
            </div>
            <div className="c-section">
              <h4>Knowledge Partner</h4>
              <div className="e-box"></div>
            </div>
          </div>
        </div>


        {/* Footer Section */}
        <footer className="footer">
        <div className='f-alltext'>
      <div className="i-footer-section" style={{marginTop:'20px'}}>
        <div className="image-container">
          <img
            src={logo}
            alt=" Logo"
            className="footer-image"
            style={{
              width: '150px',
              height: 'auto',
            }}
          />
          <img
            src={image2}
            alt="Image"
            className="footer-image"
            style={{
              width: '150px',
              height: '50px',
              marginTop:'10px',
            }}
          />
        </div>
        <p className="footer-text" style={{marginLeft:'10px'}}>
          As an organizer, we are responsible<br/> for every aspect of event planning,<br/> marketing, and organizing.
        </p>
      </div>
      <div className="q-footer-section">
        <h2>QUICK LINKS</h2>
        <ul>
          <li>
            <a href="#">2022 Event Calendar</a>
          </li>
        </ul>
      </div>
      <div className="r-footer-section">
        <h2>RECENT POSTS</h2>
        <div className="recent-posts">
          <div className="post" style={{marginTop:'-20px'}}>
            <img src={image1} alt="Post Image" style={{marginTop:'-20px'}}/>
            <p>EXHAUST AIR POLLUTION CONTROL TECHNOLOGIES. <br /> 12th July 2021</p>
          </div>
          <div className="post"  style={{marginTop:'-20px'}}>
            <img src={image1} alt="Post Image" style={{marginTop:'-20px'}}/>
            <p>CHEMICAL 4.0 AUTOMATING THE FUTURE. <br /> 3rd August 2021</p>
          </div>
        </div>
      </div>
      <div className="c-footer-section" style={{marginLeft:'30px'}}>
        <h2>CONTACT US</h2>
        <p>+91 9945397257</p>
        <p>advt@worldofchemicals.com</p>
        <h4>FOLLOW US ON</h4>
       {/* Social Icons */}
       <div className="social-icons">
  <ul className="social">
    <li><a className="facebook" href="#"></a></li>
    <li><a className="twitter" href="#"></a></li>
    <li><a className="instagram" href="#"></a></li>
    <li><a className="linkedin" href="#"></a></li>
  </ul>
</div>


      </div>
      </div>
    </footer>


    </div>

    

    
    
  )
}

export default Sustainability
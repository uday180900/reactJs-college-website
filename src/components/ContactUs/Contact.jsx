import React from 'react'
import './Contact.css'
import logo from '../../assets/react.svg'
import right_arrow from '../../assets/arrow-right.png'
function Contact() {
  //used web3 forms

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0bb3e1ba-ad77-4a87-8651-04c02e30fa68");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>send us a message <img src={logo} alt=''/></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li> <img src={logo} alt=''/>Contact@gmail.com</li>
            <li> <img src={logo} alt=''/>+91 9876543210</li>
            <li> <img src={logo} alt=''/>Cambridge<br/> United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile number' required />
          <label>Write your message</label>
          <textarea name='message'rows='6' placeholder='Enter your text' required></textarea>
          <button type='submit' className='btn dark-btn'>submit<img  src={right_arrow} alt=''/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact

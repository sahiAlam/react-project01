import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <main>
          <h2>Contact US</h2>
          <form action="#">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="Your Name"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                placeholder="abc@gmail.com"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="email">Message</label>
              <input
                type="text"
                id="email"
                required
                placeholder="Tell Us About Your Query..."
                autoComplete="off"
              />
            </div>
            <input type="submit" value="SUBMIT" />
          </form>
        </main>
      </div>
    </>
  );
};

export default Contact;

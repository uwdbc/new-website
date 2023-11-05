import React from "react";

const contact = () => {
  return (
    <>
      <section className="bg-dark">
        <h1 className="text-4xl font-bold text-center text-gold pt-32 pb-4">
          Contact Us
        </h1>
      </section>

      <div className="flex">


        {/* Contact Us Section */}
        <div className="flex-1 m-4">
            <div className="h-full p-8 rounded shadow-md w-full bg-dark">
              <h1 className="text-2xl font-semibold text-gold mb-4">Contact Us</h1>
              <form>
                <div className="mb-4 text-gold">
                  <input type="text" id="name" name="name" placeholder="Name" required className="w-full px-3 py-2 border border-dark border-b-gold hover:border-gold focus:outline-none bg-dark text-white" />
                </div>
                <div className="mb-4 text-gold">
                  <input type="email" id="email" name="email" placeholder="Email" required className="w-full px-3 py-2 border border-dark border-b-gold hover:border-gold focus:outline-none bg-dark text-white" />
                </div>
                <div className="mb-4 text-gold">
                  <input type="tel" id="phone" name="phone" placeholder="Phone Number" className="w-full px-3 py-2 border border-dark border-b-gold hover:border-gold focus:outline-none bg-dark text-white" />
                </div>
                <div className="mb-4 text-gold">
                  <textarea id="message" name="message" placeholder="Message" required rows="4" style={{ resize: "none" }} className="w-full px-3 py-2 border border-dark border-b-gold hover:border-gold focus:outline-none bg-dark text-white" />
                </div>
                <div className="mt-6">
                  <button type="submit" className="w-full bg-gold text-#333 p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">Submit</button>
                </div>
              </form>
            </div>
        </div>

        {/* Sponsor Us Section */}
        <div className="flex-1 m-4">
            <div className="h-full p-8 rounded shadow-md w-full bg-dark">
              <h1 className="text-2xl font-semibold text-gold mb-4">Sponsor Us</h1>
              <p className="text-gold">
                Work In Progress
              </p>
            </div>
        </div>


      </div>

      

      
    </>
  );
};

export default contact;

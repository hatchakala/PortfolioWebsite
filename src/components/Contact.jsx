// import { CONTACT } from "../constants";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import ContactImage from "../assets/ContactMeWesbiteVisual.png";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;

//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams(new FormData(form)).toString(),
//     })
//       .then(() => {
//         alert("Message sent!");
//         setFormData({ name: "", email: "", message: "" }); // Clear the form
//       })
//       .catch((error) => alert("Failed to send message: " + error));
//   };

//   return (
//     <div
//       id="contact"
//       className="flex flex-col md:flex-row justify-between items-center border-b border-neutral-900 pb-20"
//     >
//       {/* Left Side - Contact Form */}
//       <div className="md:w-1/2 w-full p-8 text-white">
//         <motion.h2
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.5 }}
//           className="my-10 text-4xl font-bold"
//         >
//           Contact Me
//         </motion.h2>

//         <motion.form
//           name="contact"
//           method="POST"
//           data-netlify="true"
//           onSubmit={handleSubmit}
//           className="flex flex-col space-y-6"
//         >
//           {/* Hidden field for Netlify */}
//           <input type="hidden" name="form-name" value="contact" />

//           <div>
//             <label className="block text-lg mb-2" htmlFor="name">
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="What's your name?"
//               required
//               className="w-full px-4 py-2 bg-[#243447] text-[#D1D5DB] placeholder-[#D1D5DB] border border-[#8B5CF6] rounded"
//             />
//           </div>

//           <div>
//             <label className="block text-lg mb-2" htmlFor="email">
//               Your Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="What's your email?"
//               required
//               className="w-full px-4 py-2 bg-[#243447] text-[#D1D5DB] placeholder-[#D1D5DB] border border-[#8B5CF6] rounded"
//             />
//           </div>

//           <div>
//             <label className="block text-lg mb-2" htmlFor="message">
//               Your Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="What do you want to say?"
//               required
//               className="w-full px-4 py-2 bg-[#243447] text-[#D1D5DB] placeholder-[#D1D5DB] border border-[#8B5CF6] rounded h-32"
//             />
//           </div>

//           <button
//             type="submit"
//             className="px-6 py-2 bg-indigo-600 rounded text-white hover:bg-indigo-700 transition"
//           >
//             Send
//           </button>
//         </motion.form>
//       </div>

//       {/* Right Side - Visual Element */}
//       <div className="md:w-1/2 w-full flex justify-center items-center">
//         <motion.div
//           whileInView={{ opacity: 1, scale: 1 }}
//           initial={{ opacity: 0, scale: 0.8 }}
//           transition={{ duration: 1 }}
//         >
//           <img
//             src={ContactImage}
//             alt="3D Globe"
//             className="w-96 h-96 object-contain"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { motion } from "framer-motion";
import Starfield from "react-starfield";
import ContactImage from "../assets/ContactMeWesbiteVisual.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => alert("Failed to send message: " + error));
  };

  return (
    <div id="contact" className="relative bg-[#243447] overflow-hidden">
      {/* Starfield Background - absolute but inside the contact section only */}
      <div className="absolute inset-0 h-full w-full -z-10 pointer-events-none">
        <Starfield
          starCount={500}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="#243447"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-b border-neutral-900 pb-20">
        {/* Left Side - Contact Form */}
        <div className="md:w-1/2 w-full p-8 text-white">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-10 text-4xl font-bold"
          >
            Contact Me
          </motion.h2>

          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label className="block text-lg mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="What's your name?"
                required
                className="w-full px-4 py-2 bg-[#243447] text-[#D1D5DB] placeholder-[#D1D5DB] border border-[#8B5CF6] rounded"
              />
            </div>

            <div>
              <label className="block text-lg mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="What's your email?"
                required
                className="w-full px-4 py-2 bg-[#243447] text-[#D1D5DB] placeholder-[#D1D5DB] border border-[#8B5CF6] rounded"
              />
            </div>

            <div>
              <label className="block text-lg mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                required
                className="w-full px-4 py-2 bg-[#243447] text-[#D1D5DB] placeholder-[#D1D5DB] border border-[#8B5CF6] rounded h-32"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 rounded text-white hover:bg-indigo-700 transition"
            >
              Send
            </button>
          </motion.form>
        </div>

        {/* Right Side - Visual Element */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
          >
            <img
              src={ContactImage}
              alt="3D Globe"
              className="w-96 h-96 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



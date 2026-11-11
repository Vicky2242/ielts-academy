import { useState } from "react";

function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const academyNumber = "919876543210"; // Demo number

  const message = `
New IELTS Enquiry

Name: ${formData.name}
Phone: ${formData.phone}
Course: ${formData.course}
Message: ${formData.message}
  `;

  const whatsappURL = `https://wa.me/${academyNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  setFormData({
    name: "",
    phone: "",
    course: "",
    message: "",
  });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold mb-3">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Start Your IELTS Journey Today
          </h2>

          <p className="text-gray-600">
            Fill out the form and our team will get in touch with you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-lg space-y-6"
        >

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              maxLength="10"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Course Interested In
            </label>

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select a course</option>
              <option value="IELTS Academic">IELTS Academic</option>
              <option value="IELTS General Training">
                IELTS General Training
              </option>
              <option value="IELTS Online Coaching">
                IELTS Online Coaching
              </option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your learning goals"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Submit Enquiry
          </button>

        </form>
      </div>
    </section>
  );
}

export default Enquiry;
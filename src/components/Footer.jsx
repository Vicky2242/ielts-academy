function Footer() {
  return (
    <footer className="bg-blue-950 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Academy details */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Chennai IELTS Academy
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Your learning partner for IELTS preparation.
            Build your confidence and work towards your target band score.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <a href="#home" className="hover:text-orange-400">Home</a>
            <a href="#courses" className="hover:text-orange-400">Courses</a>
            <a href="#why-us" className="hover:text-orange-400">Why Choose Us</a>
            <a href="#contact" className="hover:text-orange-400">Contact</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact Us
          </h3>

          <p className="text-gray-300 mb-3">
            Chennai, Tamil Nadu
          </p>

          <p className="text-gray-300 mb-3">
            Phone: +91 98765 43210
          </p>

          <p className="text-gray-300">
            Email: info@example.com
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-blue-800 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Chennai IELTS Academy. Concept project.
      </div>
    </footer>
  );
}

export default Footer;
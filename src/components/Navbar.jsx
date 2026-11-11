function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-900">
            Chennai IELTS
          </h1>
          <p className="text-sm text-gray-500">
            Academy
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-orange-500">
            Home
          </a>

          <a href="#courses" className="text-gray-700 hover:text-orange-500">
            Courses
          </a>

          <a href="#why-us" className="text-gray-700 hover:text-orange-500">
            Why Choose Us
          </a>

          <a href="#contact" className="text-gray-700 hover:text-orange-500">
            Contact
          </a>
        </div>

        {/* CTA button */}
        <a
          href="#contact"
          className="bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Enquire Now
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
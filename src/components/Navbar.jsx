import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md relative z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" onClick={closeMenu}>
          <h1 className="text-2xl font-bold text-blue-900">
            Chennai IELTS
          </h1>
          <p className="text-sm text-gray-500">Academy</p>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-orange-500">Home</a>
          <a href="#courses" className="text-gray-700 hover:text-orange-500">Courses</a>
          <a href="#why-us" className="text-gray-700 hover:text-orange-500">Why Choose Us</a>
          <a href="#contact" className="text-gray-700 hover:text-orange-500">Contact</a>
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:block bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Enquire Now
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-blue-950"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-5 shadow-md">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#courses" onClick={closeMenu}>Courses</a>
          <a href="#why-us" onClick={closeMenu}>Why Choose Us</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="bg-orange-500 text-white text-center px-5 py-3 rounded-lg"
          >
            Enquire Now
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
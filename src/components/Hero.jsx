function Hero() {
  return (
    <section
      id="home"
      className="bg-blue-950 text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left content */}
        <div className="flex-1">

          <p className="text-orange-400 font-semibold mb-4">
            YOUR IELTS SUCCESS STARTS HERE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Achieve Your
            <span className="text-orange-400"> Target IELTS </span>
            Band Score
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Get expert IELTS coaching, personalised guidance,
            and practical mock tests to achieve your dream score.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              Get Free Counselling
            </a>

            <a
              href="#courses"
              className="border border-white hover:bg-white hover:text-blue-950 px-6 py-3 rounded-lg transition"
            >
              Explore Courses
            </a>
          </div>

        </div>

        {/* Right image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="Students learning together"
            className="w-full h-80 md:h-105 object-cover rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
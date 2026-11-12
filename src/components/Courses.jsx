const courses = [
  {
    title: "IELTS Academic",
    description:
      "Prepare for university admissions and higher education opportunities abroad.",
    duration: "8 Weeks",
    mode: "Classroom Training",
  },
  {
    title: "IELTS General Training",
    description:
      "Prepare for migration, work opportunities and international settlement.",
    duration: "8 Weeks",
    mode: "Classroom Training",
  },
  {
    title: "IELTS Online Coaching",
    description:
      "Learn from anywhere with live sessions, practice tests and expert guidance.",
    duration: "Flexible",
    mode: "Online Training",
  },
];

function Courses() {
  return (
    <section id="courses" className="py-20 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold mb-3">
            OUR COURSES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Choose Your IELTS Preparation Program
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the right learning program to help you prepare
            confidently for your IELTS examination.
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
             <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
             ✓
            </div>

              <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-orange-600 transition-colors">
                {course.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <p className="text-sm text-gray-500 mb-2">
                  Duration: {course.duration}
                </p>

                <p className="text-sm text-gray-500">
                  Mode: {course.mode}
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-4 transition-all duration-300"
              >
                Enquire Now →
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Courses;
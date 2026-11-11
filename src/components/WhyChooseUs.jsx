const features = [
  {
    icon: "🎓",
    title: "Expert Trainers",
    description: "Learn with experienced IELTS trainers and structured guidance.",
  },
  {
    icon: "📝",
    title: "Regular Mock Tests",
    description: "Practice with mock tests to understand the exam format.",
  },
  {
    icon: "📊",
    title: "Personalised Feedback",
    description: "Identify your strengths and improve your weak areas.",
  },
  {
    icon: "🕒",
    title: "Flexible Batches",
    description: "Choose learning schedules that fit your availability.",
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold mb-3">
            WHY CHOOSE US
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
            Your Success Is Our Priority
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-blue-950 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
function WhatsApp() {
  const academyNumber = "919876543210"; // Demo number

  const message = "Hi, I would like to know more about IELTS coaching.";

  const whatsappURL = `https://wa.me/${academyNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-lg transition"
    >
      <span className="font-semibold">WhatsApp ↗</span>
    </a>
  );
}

export default WhatsApp;
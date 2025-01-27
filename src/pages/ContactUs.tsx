
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <section className="py-16 px-4 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="max-w-xl mx-auto mb-6">
        Have questions? Reach out to our experts for assistance.
      </p>
      <Link
        to="/contactUs"
        className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Contact Us
      </Link>
    </section>
  );
}

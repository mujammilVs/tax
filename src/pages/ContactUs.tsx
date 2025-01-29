import { MapPin, Phone, Mail } from "lucide-react";

const contactDetails = [
  {
    icon: <MapPin className="w-6 h-6 text-primary mr-4" />,
    title: "Our Location",
    info: "KPHB, Hyderabad, 500072",
  },
  {
    icon: <Phone className="w-6 h-6 text-primary mr-4" />,
    title: "Phone Number",
    info: "(+91) 7093208797 / (+91) 7093218797",
  },
  {
    icon: <Mail className="w-6 h-6 text-primary mr-4" />,
    title: "Email Address",
    info: "info@simplicontaxadvisors.com",
  },
];

const formFields = [
  { label: "Your Name", type: "text" },
  { label: "Your Email", type: "email" },
  { label: "Your Phone", type: "tel" },
  { label: "Your Message", type: "textarea" },
];

const ContactUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-primary">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            {contactDetails.map(({ icon, title, info }, index) => (
              <div key={index} className="flex items-center mb-8">
                {icon}
                <div>
                  <h3 className="font-semibold text-primary">{title}</h3>
                  <p className="text-primary">{info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Your Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Your Phone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Your Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

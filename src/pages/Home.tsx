import {
  CheckCircle,
  DollarSign,
  Shield,
  MapPin,
  Phone,
  Mail,
  FileText,
  Building,
  Globe,
  UserPlus,
  Scale,
  FileSearch,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const coreServices = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Individual Tax Filing",
      description:
        "Expert guidance for personal tax returns with maximum deductions",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Business Tax Filing",
      description: "Comprehensive tax solutions for businesses of all sizes",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Tax Filing",
      description: "Specialized support for international tax requirements",
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Apply for ITIN",
      description:
        "Assistance with Individual Taxpayer Identification Number applications",
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Audit Representation",
      description: "Professional representation during IRS audits",
    },
    {
      icon: <FileSearch className="w-8 h-8" />,
      title: "Amendments",
      description: "Accurate tax return amendments and corrections",
    },
  ];

  const faqs = [
    {
      question: "How do I get started?",
      answer:
        'Simply click on the "Get Started" button above to begin your tax filing process.',
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-leading encryption and security measures to protect your personal information.",
    },
    {
      question: "How much does it cost?",
      answer:
        "We offer competitive pricing, with options for both simple and more complex tax filings. Pricing will be shown before you finalize the submission.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="bg-gradient-to-r  text-[#333] bg-last">
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Simplicon Tax Advisors
          </h1>
          <p className="text-xl mb-8">
            Your one-stop solution for easy and secure tax filing in the USA.
          </p>
          <p className="text-lg mb-8">
            Start filing your taxes in minutes, maximize your refund, and get
            expert guidance every step of the way.
          </p>
          <Link
            to="/auth"
            className="bg-primary text-last px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary">
            Why Choose Simplicon Tax Advisors?
          </h2>
          <div className="grid md:grid-cols-3 gap-12 ">
            <div className="text-center border p-4">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Easy Filing</h3>
              <p className="text-primary">
                File your taxes in minutes with an intuitive interface and
                step-by-step guidance.
              </p>
            </div>
            <div className="text-center border p-4">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Maximize Refund</h3>
              <p className="text-primary">
                Get the best possible tax return with expert tips and automated
                calculations.
              </p>
            </div>
            <div className="text-center border p-4">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure & Trusted</h3>
              <p className="text-primary">
                Your data is protected with industry-leading security protocols,
                ensuring peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary">
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-last p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Check Refund Status/Pay Tax Online
              </h3>
              {/* <div className="space-y-6">
                <div className="flex gap-2 justify-between items-center">
                  <h4 className="font-semibold mb-2">Refund Status</h4>
                  <button className="bg-primary text-last px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Federal Regular
                  </button>
                </div> */}

              <div className="space-y-6">
                <div className="flex gap-2 justify-between items-center">
                  <h4 className="font-semibold mb-2">Refund Status</h4>
                  <select className=" text-primary px-6 py-2 rounded-lg  transition-colors">
                    <option value="federalRegular">Federal Regular</option>
                    <option value="federalExpedited">Federal Expedited</option>
                    <option value="state">State</option>
                  </select>
                </div>

                <div className="flex gap-2 justify-between items-center">
                  <h4 className="font-semibold mb-2">Pay Tax Online</h4>
                  <select className=" text-primary px-6 py-2 rounded-lg  transition-colors">
                    <option value="federalRegular">Federal Regular</option>
                    <option value="federalExpedited">Federal Expedited</option>
                    <option value="state">State</option>
                  </select>
                </div>
                <div className="flex gap-2 justify-between items-center">
                  <h4 className="font-semibold mb-2">Get Your Tax Records</h4>
                  <select className=" text-primary px-6 py-2 rounded-lg  transition-colors">
                    <option value="federalRegular">Federal Regular</option>
                    <option value="federalExpedited">Federal Expedited</option>
                    <option value="state">State</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-last p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                IRS Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">
                    IRS Local Office Locator
                  </h4>
                  <a
                    href="https://apps.irs.gov/app/officeLocator/index.jsp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Find your local IRS office
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">
                    Contact Numbers
                  </h4>
                  <p className="text-primary">For Individuals: 800-829-1040</p>
                  <p className="text-primary">For Businesses: 800-829-4933</p>
                </div>
                <div className="text-sm text-primary mt-4">
                  <p>
                    Note: Please make sure to have a copy of your tax return
                    handy while checking the refund status/payment online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-last p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 ">{service.title}</h3>
                <p className="text-primary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg shadow-2xl  overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-12">
                <h2 className="text-3xl font-bold mb-6">
                  Individual Tax Filing
                </h2>
                <p className="text-gray-600 mb-8">
                  Simplify your tax season with expert guidance for accurate and
                  timely personal tax returns, ensuring maximum deductions and
                  credits.
                </p>
                <Link
                  to="/services"
                  className="bg-primary text-last px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
              <div className="md:w-1/2 bg-gradient-to-r from-primary to-secondary p-12 text-last flex items-center">
                <div>
                  <FileText className="w-16 h-16 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Professional Tax Services
                  </h3>
                  <p>
                    Get personalized attention and expert advice for your tax
                    filing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-primary">{faq.question}</h3>
                <p className="text-primary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-8">
                <MapPin className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold text-primary">Our Location</h3>
                  <p className=" text-primary">KPHB, Hyderabad, 500072</p>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <Phone className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold text-primary">Phone Number</h3>
                  <p className="text-primary">
                    (+91) 7093208797 / (+91) 7093218797
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold text-primary">Email Address</h3>
                  <p className="text-primary">info@simplicontaxadvisors.com</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary "
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
                className="w-full bg-primary text-last px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FileText, PieChart, Settings, ChevronDown, ChevronUp } from "lucide-react";
// import ContactUs from "./ContactUs"; // Assuming ContactUs is a separate component

// function Card({ icon, title, description }) {
//   return (
//     <div
//       className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//       role="article"
//       aria-label={title}
//     >
//       <div className="text-blue-600 mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// }

// export default function TaxFilingLandingPage() {
//   const [activeFaq, setActiveFaq] = useState(null);

//   const handleFaqToggle = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   const coreServices = [
//     {
//       id: 1,
//       icon: <FileText />,
//       title: "Individual Tax Filing",
//       description: "We make individual tax filing simple and hassle-free.",
//       link: "/services/individual-tax-filing",
//     },
//     {
//       id: 2,
//       icon: <PieChart />,
//       title: "Business Tax Services",
//       description: "Expert tax solutions for businesses of all sizes.",
//       link: "/services/business-tax-services",
//     },
//     {
//       id: 3,
//       icon: <Settings />,
//       title: "Tax Planning",
//       description: "Plan ahead to save money and stay compliant.",
//       link: "/services/tax-planning",
//     },
//   ];

//   const faqs = [
//     {
//       question: "What documents do I need for tax filing?",
//       answer: "You’ll need W-2s, 1099s, and other income-related documents.",
//     },
//     {
//       question: "How do I know if I’m eligible for deductions?",
//       answer: "Our experts will evaluate your case and provide guidance.",
//     },
//     {
//       question: "Can you help with past due taxes?",
//       answer: "Yes, we assist with past due taxes and compliance issues.",
//     },
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <header className="bg-blue-600 text-white py-16 text-center">
//         <h1 className="text-4xl font-bold">Welcome to Easy Tax Filing</h1>
//         <p className="mt-4 text-lg">Your trusted partner for stress-free tax solutions.</p>
//         <Link
//           to="/contact"
//           className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
//         >
//           Get Started
//         </Link>
//       </header>

//       {/* Core Services Section */}
//       <section className="py-16 px-4 bg-gray-100">
//         <h2 className="text-3xl font-bold text-center mb-6">Our Core Services</h2>
//         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {coreServices.map((service) => (
//             <Link to={service.link} key={service.id}>
//               <Card
//                 icon={service.icon}
//                 title={service.title}
//                 description={service.description}
//               />
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 px-4">
//         <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
//         <div className="max-w-2xl mx-auto">
//           {faqs.map((faq, index) => (
//             <div key={index} className="mb-4">
//               <button
//                 className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg shadow-md text-left"
//                 onClick={() => handleFaqToggle(index)}
//               >
//                 <span className="font-semibold text-lg">{faq.question}</span>
//                 {activeFaq === index ? (
//                   <ChevronUp className="text-blue-600" />
//                 ) : (
//                   <ChevronDown className="text-blue-600" />
//                 )}
//               </button>
//               {activeFaq === index && (
//                 <div className="p-4 text-gray-600 border-t border-gray-200">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <ContactUs />
//     </div>
//   );
// }

import {
  CheckCircle,
  DollarSign,
  Shield,
  FileText,
  Building,
  Globe,
  UserPlus,
  Scale,
  FileSearch,
} from "lucide-react";
import { Link } from "react-router-dom";
import FAQSection from "./Faq";
import ContactUs from "./ContactUs";
import QuickActions from "./QuickActions";

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
      <QuickActions />

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
      <FAQSection />

      {/* Contact Form */}
      <ContactUs />
    </>
  );
}

import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { siteData } from '../../data/siteData';

const ContactContent = () => {
  return (
    <div className="py-20 lg:py-28">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with the Office of the Advocate General Federal
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-800 mb-2">Our Address</h3>
              <p className="text-gray-600">{siteData.contact.address}</p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-800 mb-2">Phone Number</h3>
              <p className="text-gray-600">{siteData.contact.phone}</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-800 mb-2">Email Address</h3>
              <p className="text-gray-600">{siteData.contact.email}</p>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-800 mb-2">Working Hours</h3>
              <p className="text-gray-600">{siteData.contact.workingHours}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-8 h-8 text-gold-500" />
                <h2 className="text-2xl font-bold text-primary-800">Send us a Message</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors">
                      <option value="">Select subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="legal">Legal Matter</option>
                      <option value="appointment">Request Appointment</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8547395349397!2d73.08459731520168!3d33.72911798069901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf85c6b3e7e1%3A0x8c2c0e2c8c8c8c8c!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
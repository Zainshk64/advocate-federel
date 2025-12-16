import { CheckCircle, Target, Eye, Heart, Star } from 'lucide-react';
import { siteData } from '../../data/siteData';

const AboutContent = () => {
  const { aboutContent } = siteData;

  return (
    <div className="py-20 lg:py-28">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            About Our Office
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Serving the Federation with Legal Excellence Since 1947
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-6">
              Our History & Legacy
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              {aboutContent.history.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph.trim()}</p>
              ))}
            </div>
          </div>

          {/* Right - Image & Card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=800&h=600&fit=crop"
                alt="Legal Office"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gold-400 rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold text-primary-800">77+</div>
              <div className="text-primary-700">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                {aboutContent.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                {aboutContent.vision}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide our work and commitment to justice
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-gold-600" />
                </div>
                <h4 className="text-xl font-bold text-primary-800 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
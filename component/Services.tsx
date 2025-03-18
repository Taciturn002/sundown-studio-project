import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    { title: 'Web Design', desc: 'Creating visually stunning websites.' },
    { title: 'Branding', desc: 'Building strong and impactful brand identities.' },
    { title: 'Development', desc: 'Building scalable and efficient web applications.' },
  ];

  const pricingPlans = [
    { title: 'Basic', price: '$99/mo', features: ['5 Pages', 'Basic SEO', 'Email Support'] },
    { title: 'Pro', price: '$199/mo', features: ['10 Pages', 'Advanced SEO', 'Priority Support'] },
    { title: 'Enterprise', price: '$299/mo', features: ['Unlimited Pages', 'Full SEO Suite', '24/7 Support'] },
  ];

  return (
    <div className="w-full bg-white text-black py-20 px-8 md:px-16">
      <h2 className="text-5xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-black text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Pricing Table */}
      <h2 className="text-5xl font-bold text-center mb-12">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className="border border-black p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
            <p className="text-lg font-semibold mb-4">{plan.price}</p>
            <ul className="text-sm list-disc pl-5">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
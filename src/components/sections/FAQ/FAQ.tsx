import React, { useState } from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: "How does AI-powered customer support work?",
    answer: "Our AI agents use advanced natural language processing to understand and respond to customer inquiries in real-time. They can handle multiple conversations simultaneously, learn from interactions, and seamlessly escalate complex issues to human agents when needed."
  },
  {
    question: "How quickly can we implement AI solutions?",
    answer: "Implementation timelines vary based on your specific needs, but typically range from 2-4 weeks. We follow a structured onboarding process, including system integration, team training, and performance optimization to ensure a smooth transition."
  },
  {
    question: "What industries do you serve?",
    answer: "RapidX.AI serves a wide range of industries including SaaS, e-commerce, healthcare, finance, and professional services. Our AI solutions are customizable to meet industry-specific requirements and compliance standards."
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "We implement enterprise-grade security measures, including end-to-end encryption, secure data storage, and regular security audits. All our systems comply with industry standards and regulations like GDPR and CCPA."
  },
  {
    question: "What kind of ROI can we expect?",
    answer: "While results vary by implementation, our clients typically see 30-65% cost reduction in operations, 50% faster response times, and 2-3x increase in conversion rates within the first 3-6 months of deployment."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Got Questions? We've Got Answers."
          description="Learn more about how RapidX.AI can transform your business operations"
          gradient
        />
        
        <div className="mt-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
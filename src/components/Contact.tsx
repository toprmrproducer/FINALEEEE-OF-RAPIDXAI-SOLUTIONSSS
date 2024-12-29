import React from 'react';
import { Button } from './Button';
import { Mail, Phone } from 'lucide-react';
import { Card } from './ui/Card';
import { AnimatedIcon } from './ui/AnimatedIcon';

export function Contact() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-400">
            Ready to transform your business with AI? Let's talk.
          </p>
        </div>

        <div className="mt-16 max-w-xl mx-auto">
          <Card>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                ></textarea>
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="mt-8 flex justify-center space-x-6 text-gray-400">
            <a href="mailto:contact@rapidx.ai" className="flex items-center hover:text-cyan-400 group">
              <AnimatedIcon icon={Mail} className="w-5 h-5 mr-2" animation="bounce" />
              contact@rapidx.ai
            </a>
            <a href="tel:+1234567890" className="flex items-center hover:text-cyan-400 group">
              <AnimatedIcon icon={Phone} className="w-5 h-5 mr-2" animation="sway" />
              (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
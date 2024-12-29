import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={onToggle}
      >
        <h3 className="text-lg font-medium text-white pr-8">{question}</h3>
        <ChevronDown className={cn(
          "w-5 h-5 text-cyan-400 transition-transform duration-200",
          isOpen && "transform rotate-180"
        )} />
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-96 mb-6" : "max-h-0"
      )}>
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
}
'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type AccordionItemProps = {
  question: string;
  answer: string;
};

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-slate-100">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-ink">{question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-pine transition ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-7 text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";

const GetQuoteModal = () => {
  const [open, setOpen] = useState(false);
  const [servicesState, setServicesState] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const allServices = [
    "Web Development",
    "Paid Advertising",
    "Social Media Marketing",
    "E-Commerce",
    "Digital Marketing",
    "Branding",
    "SEO",
    "Performance",
    "Marketing",
  ];

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openGetQuote", handler as EventListener);

    // Auto open after 5 seconds, but only once per session
    const hasShown = sessionStorage.getItem("quoteModalShown");
    const t = setTimeout(() => {
      if (!hasShown) {
        sessionStorage.setItem("quoteModalShown", "true");
        window.dispatchEvent(new CustomEvent("openGetQuote"));
      }
    }, 5000);

    return () => {
      window.removeEventListener("openGetQuote", handler as EventListener);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const close = () => setOpen(false);

  const toggleService = (value: string) => {
    if (value === "All") {
      // Toggle All: if checking All, select all services; if unchecking, clear
      if (servicesState.includes("All")) {
        setServicesState([]);
      } else {
        setServicesState(["All", ...allServices]);
      }
      return;
    }

    // If All is currently selected, ignore toggles on others (they are disabled)
    if (servicesState.includes("All")) return;

    if (servicesState.includes(value)) {
      setServicesState((prev) => prev.filter((s) => s !== value));
    } else {
      setServicesState((prev) => [...prev, value]);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const fd = new FormData(form);
      if (budget) fd.set('budget', budget);
      
      const formData = {
        name: fd.get('name') as string,
        email: fd.get('email') as string,
        phone: fd.get('phone') as string,
        company: fd.get('company') as string,
        service: servicesState.join(', '),
        message: `Budget: ${budget || 'Not specified'}\n\nServices: ${servicesState.join(', ')}\n\nAdditional message: ${fd.get('message') || 'N/A'}`,
        subject: 'Get Quote Request'
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Thank you! Your quote request has been submitted. Check your email for confirmation.");
        setOpen(false);
      } else {
        alert(result.error || "Failed to submit quote request. Please try again.");
      }
    } catch (error) {
      alert("Failed to submit quote request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Budget custom dropdown state
  const [budget, setBudget] = useState<string>("");
  const [budgetOpen, setBudgetOpen] = useState(false);
  const budgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDoc = (ev: MouseEvent) => {
      if (!budgetRef.current) return;
      if (ev.target instanceof Node && !budgetRef.current.contains(ev.target)) {
        setBudgetOpen(false);
      }
    };
    document.addEventListener("click", handleDoc);
    return () => document.removeEventListener("click", handleDoc);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-start md:items-center justify-center py-6 sm:py-8 px-3">
      <div className="absolute inset-0 bg-black/70" onClick={close} />
      <div className="relative z-10 mx-4 w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-xl bg-black text-white shadow-2xl ring-1 ring-white/5 border border-gray-800 max-h-[90vh] overflow-y-auto overflow-x-hidden px-0 sm:px-0">
        {/* Decorative curved texture behind content */}
        <svg className="pointer-events-none absolute -top-8 -right-8 h-48 w-48 opacity-20 mix-blend-screen" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id="getQuoteGradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#FFB77A" />
            </linearGradient>
          </defs>
          <path d="M10 100 C40 10, 160 190, 190 100" stroke="url(#getQuoteGradient)" strokeWidth="2" fill="none" />
          <path d="M0 120 C40 20, 160 200, 200 120" stroke="url(#getQuoteGradient)" strokeWidth="1" fill="none" />
        </svg>

        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
          <div>
            <h3 className="text-lg font-semibold">Let&apos;s Connect</h3>
            <p className="mt-1 text-sm text-gray-300">Share a few details and we&apos;ll prepare a tailored proposal and timeline.</p>
          </div>
          <button aria-label="close" onClick={close} className="text-white/80 hover:text-white text-lg">
            ✕
          </button>
        </div>

        {/* Trust bar: short credibility items to build trust */}
        {/* <div className="px-4 pt-4"> */}
        <div className="px-4 pt-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-200">
                <svg className="mr-2 h-4 w-4 text-orange-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor"/></svg>
                Trusted by 100+ companies
              </span>
              <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-200">
                <svg className="mr-2 h-4 w-4 text-orange-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/></svg>
                4.9/5 client rating
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-300">
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Free consultation
              </span>
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                No lock-in contracts
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 px-4 py-4 md:grid-cols-2">
          <div className="min-w-0">
            <label className="mb-1 block text-sm text-orange-400">Your name *</label>
            <input name="name" required className="w-full rounded bg-transparent border-b border-gray-600 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/25" placeholder="Enter your name" />
          </div>
          <div className="min-w-0">
            <label className="mb-1 block text-sm text-orange-400">Company name *</label>
            <input name="company" required className="w-full rounded bg-transparent border-b border-gray-600 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/25" placeholder="Enter your company name" />
          </div>

          <div className="min-w-0">
            <label className="mb-1 block text-sm text-orange-400">Phone *</label>
            <input name="phone" required className="w-full rounded bg-transparent border-b border-gray-600 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/25" placeholder="Enter your phone number" />
          </div>
          <div className="min-w-0">
            <label className="mb-1 block text-sm text-orange-400">Email *</label>
            <input name="email" type="email" required className="w-full rounded bg-transparent border-b border-gray-600 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/25" placeholder="Enter your email" />
          </div>

          <div className="min-w-0">
            <label className="mb-1 block text-sm text-orange-400">Website Link</label>
            <input name="website" className="w-full rounded-md bg-transparent border border-gray-700/40 px-3 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/15" placeholder="https://www.mysite.com/link" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-orange-400">What services are you looking for?</label>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="services"
                  value="All"
                  className="h-4 w-4 accent-orange-500"
                  checked={servicesState.includes("All")}
                  onChange={() => toggleService("All")}
                />
                <span className="text-sm text-white">All Services</span>
              </label>
              {allServices.map((svc) => (
                <label key={svc} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="services"
                    value={svc}
                    className="h-4 w-4 accent-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    checked={servicesState.includes(svc)}
                    onChange={() => toggleService(svc)}
                    disabled={servicesState.includes("All")}
                  />
                  <span className="text-sm text-white">{svc}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="relative min-w-0" ref={budgetRef}>
            <label className="mb-1 block text-sm text-orange-400">Monthly Budget</label>
            <input type="hidden" name="budget" value={budget} />
            <div className="relative">
              <button
                type="button"
                onClick={() => setBudgetOpen((s) => !s)}
                className="w-full text-left rounded-md bg-black border border-gray-700/40 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/15 flex items-center justify-between"
                aria-haspopup="listbox"
                aria-expanded={budgetOpen}
              >
                <span className={`${budget ? 'text-white' : 'text-white/60'}`}>{budget || 'Choose one'}</span>
                <span className="text-white/70">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              {budgetOpen && (
              // {budgetOpen && (
                <ul className="absolute left-0 right-0 z-50 mt-1 max-h-48 w-full overflow-auto rounded-md bg-black border border-gray-700/40 py-1">
                  {['<1k', '1k-5k', '>5k'].map((opt) => (
                    <li
                      key={opt}
                      role="option"
                      onClick={() => { setBudget(opt); setBudgetOpen(false); }}
                      className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-white/5"
                    >
                      {opt === '<1k' ? 'Less than $1k' : opt === '1k-5k' ? '$1k - $5k' : 'More than $5k'}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="min-w-0">
            <label className="mb-1 block text-sm text-orange-400">Share more details</label>
            <textarea name="message" rows={4} className="w-full resize-none rounded-md bg-transparent border border-gray-700/40 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/15" placeholder="Share more details" />
          </div>

          <div className="md:col-span-2 border-t border-gray-800">
            <div className="flex flex-col items-center justify-center gap-3 px-4 py-6 sm:flex-row sm:gap-4 w-full">
              <button type="button" onClick={close} className="w-full max-w-xs rounded-full bg-white/5 px-6 py-2 text-sm font-medium text-white hover:bg-white/10">Cancel</button>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full max-w-xs rounded-full bg-[#FF7A00] px-6 py-2 text-sm font-semibold text-white hover:bg-[#e66d00] disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetQuoteModal;

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Link, Check, MessageSquare } from 'lucide-react';

export default function AdminPage() {
  const [prefix, setPrefix] = useState('Mr.');
  const [guestName, setGuestName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const generateLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    // Use current origin or fallback
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const url = new URL(origin);
    url.searchParams.set('p', prefix);
    url.searchParams.set('n', guestName.trim());
    const link = url.toString();
    setGeneratedLink(link);

    const message = `Dear ${prefix} ${guestName.trim()} ❤️

With joyful hearts, we warmly invite you to celebrate one of the most special days of our lives as we begin our journey together.

Please view our wedding invitation and all the event details through the link below 🌐:

${link}

Your presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.

With love,
❤️ Kandula & Nirmani`;
    setGeneratedMessage(message);
    setCopiedLink(false);
    setCopiedMessage(false);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const copyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-serif text-gray-900">
            Invitation Link Generator
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Generate personalized invitation links and WhatsApp messages for your guests.
          </p>
        </div>

        <form onSubmit={generateLink} className="mt-8 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/3">
              <label htmlFor="prefix" className="block text-sm font-medium text-gray-700">
                Prefix
              </label>
              <select
                id="prefix"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md border"
              >
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Miss</option>
                <option>Mr. & Mrs.</option>
                <option>Family</option>
                <option>Dear</option>
              </select>
            </div>
            <div className="w-full sm:w-2/3">
              <label htmlFor="guestName" className="block text-sm font-medium text-gray-700">
                Guest Name
              </label>
              <input
                type="text"
                id="guestName"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Sanjaya"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
          >
            Generate Link & Message
          </button>
        </form>

        {generatedLink && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 pt-8 border-t border-gray-200 space-y-6"
          >
            <div className="bg-gray-50 p-4 rounded-lg overflow-hidden text-ellipsis whitespace-nowrap border border-gray-200 text-sm text-gray-800">
              {generatedLink}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={copyLink}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                {copiedLink ? <Check className="w-4 h-4 text-green-500" /> : <Link className="w-4 h-4" />}
                {copiedLink ? 'Copied!' : 'Copy Link Only'}
              </button>
              <button
                onClick={copyMessage}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                {copiedMessage ? <Check className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />}
                {copiedMessage ? 'Message Copied!' : 'Copy Full Message'}
              </button>
            </div>

            <div className="mt-6 bg-amber-50/50 p-6 rounded-xl border border-amber-100">
              <h4 className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-4">Message Preview</h4>
              <p className="whitespace-pre-wrap text-sm text-gray-700 font-serif leading-relaxed">
                {generatedMessage}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

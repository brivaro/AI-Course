import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from './icons';

interface CodeBlockProps {
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900/50 border border-cyan-500/20 rounded-lg my-4 relative group">
      <pre className="p-4 pr-12 text-cyan-300 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
      <button 
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-gray-700/50 text-gray-300 transition-colors duration-200 hover:bg-gray-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        aria-label="Copiar código"
      >
        {copied ? 
          <CheckIcon className="w-4 h-4 text-green-400" /> : 
          <ClipboardIcon className="w-4 h-4" />
        }
      </button>
    </div>
  );
};
const fs = require('fs');
let content = fs.readFileSync('components/envelope-opener.tsx', 'utf8');

// Main Background
content = content.replace(
  'linear-gradient(135deg,#2a060c_0%,#4a0f18_38%,#681322_65%,#2c0710_100%)',
  'linear-gradient(135deg,#fffaf4_0%,#ffebee_38%,#ffd6e0_65%,#fffaf4_100%)'
);

// Wax Seal
content = content.replace(
  'bg-[radial-gradient(circle_at_30%_30%,#a61d35_0%,#7a1226_55%,#5b0d1c_100%)]',
  'bg-[radial-gradient(circle_at_30%_30%,#e3aab8_0%,#c88b9c_55%,#a86d7c_100%)]'
);
content = content.replace(
  'shadow-[0_10px_30px_rgba(90,13,28,0.45)]',
  'shadow-[0_10px_30px_rgba(200,139,156,0.45)]'
);

// Text colors (Light -> Dark/Gold for contrast on light background)
content = content.replace(/text-\[#f5e6c8\]\/80/g, 'text-[#8c6a16]');
content = content.replace(/text-\[#f5e6c8\]\/70/g, 'text-[#8c6a16]');
content = content.replace(/text-\[#f5e6c8\]/g, 'text-[#fffaf4]'); // For text inside wax seal

// Floating lotus petals (from dark red to rose pink)
content = content.replace(
  'from-[#f4d6da] via-[#e8a9b5] to-[#7d1a2f]',
  'from-[#fff] via-[#f4d6da] to-[#e8a9b5]'
);

// Add dynamic guest name rendering
// Find: We cordially invite {guestName || 'You'} if exists, otherwise I'll add it.
if (!content.includes('guestName')) {
  content = content.replace('const [isOpen, setIsOpen] = useState(false);', `const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('');
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const prefix = params.get('prefix') || '';
    const name = params.get('name') || '';
    if (name) {
      setGuestName(prefix ? \`\${prefix} \${name}\` : name);
    }
  }, []);`);

  // Add the "We cordially invite" text
  content = content.replace(
    '<p className="text-[11px] tracking-[0.24em] text-[#8c6a16]">\\n                Unveil the moment\\n              </p>',
    `{guestName && (
                <p className="text-[10px] tracking-[0.24em] text-[#c88b9c] mb-3">
                  We cordially invite {guestName}
                </p>
              )}
              <p className="text-[11px] tracking-[0.24em] text-[#8c6a16]">
                Unveil the moment
              </p>`
  );
  
  // Need to import useEffect if not imported
  if (!content.includes('useEffect')) {
     content = content.replace('import React, { useState, useRef }', 'import React, { useState, useRef, useEffect }');
  }
}

fs.writeFileSync('components/envelope-opener.tsx', content);

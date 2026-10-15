import React from 'react';
import Link from 'next/link';

interface LegalShellProps {
  backLabel?: string;
  footerNote: string;
  wide?: boolean;
  children: React.ReactNode;
}

/** Marco común de las páginas de apps (políticas de privacidad, soporte): mismo estilo que privacy-smartcart. */
const LegalShell: React.FC<LegalShellProps> = ({ backLabel = '← Volver al Portafolio', footerNote, wide, children }) => (
  <div className="legal-root min-h-screen bg-[#f6f6f2] text-[#222] font-sans antialiased">
    <header className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center border-b border-[#eaeaea]">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">●</span>
        <span className="text-lg font-black tracking-wide uppercase">Marlon</span>
      </div>
      <Link href="/" className="px-4 py-2 bg-[#222] text-[#fff] rounded-full text-sm font-bold shadow-sm hover:bg-[#444] transition duration-200">
        {backLabel}
      </Link>
    </header>

    <main className={`${wide ? 'max-w-4xl' : 'max-w-3xl'} mx-auto px-6 py-12`}>{children}</main>

    <footer className="bg-white border-t border-[#eaeaea] py-8 text-center text-sm text-gray-500">
      <div className="max-w-4xl mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} MGM Tech Solutions. Todos los derechos reservados.</p>
        <p className="mt-1">{footerNote}</p>
      </div>
    </footer>
  </div>
);

export default LegalShell;

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full text-gray-200">
      <div className="container mx-auto max-w-6xl flex flex-col items-center text-center">
        <h2 className="text-xl font-semibold mb-4">ENDOTEREC©</h2>

        <nav className="mb-4 space-x-2 text-sm">
          <Link href="/return-policy" className="hover:text-gray-400">
            REFUND POLICY
          </Link>
          <span className="text-gray-500">|</span>
          <Link href="/terms-of-service" className="hover:text-gray-400">
            TERMS OF SERVICE
          </Link>
          <span className="text-gray-500 hidden sm:inline-block">|</span>
          <a href="mailto:support@endoterec.com" className="hidden hover:text-gray-400 sm:inline-block">
            CONTACT
          </a>
        </nav>

        <nav className="mb-4 space-x-2 text-sm">
          <Link href="/disclaimer" className="hover:text-gray-400">
            DISCLAIMER
          </Link>
          <span className="text-gray-500">|</span>
          <Link href="/privacy-policy" className="hover:text-gray-400">
            PRIVACY POLICY
          </Link>
        </nav>

        <nav className="mb-4 text-sm block sm:hidden">
          <a href="mailto:support@endoterec.com" className="hover:text-gray-400">
            CONTACT
          </a>
        </nav>
      </div>
    </footer>
  );
}

export function Header() {
  return (
    <header
      className="container flex justify-between absolute top-0 left-1/2 transform -translate-x-1/2 text-white pt-8 w-full max-w-6xl px-8 
    lg:px-0"
    >
      <h1 className="text-2xl cursor-default">ENDOTEREC</h1>
      <img
        src="menu.svg"
        alt="menu"
        className="w-7 hover:cursor-pointer md:hidden"
      />
      <nav
        className="hidden 
      gap-4 text-lg  md:flex"
      >
        <a href="#formula" className="hover:text-gray-400 cursor-pointer">
          Formula
        </a>
        <a href="#benefits" className="hover:text-gray-400 cursor-pointer">Benefits</a>
        <a href="#faq" className="hover:text-gray-400 cursor-pointer">FAQ</a>
      </nav>
    </header>
  );
}

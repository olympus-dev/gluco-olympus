export function Header() {
  return (
    <header
      className="container flex justify-between absolute top-0 left-1/2 transform -translate-x-1/2 text-white pt-8 w-full max-w-6xl px-8 
    lg:px-0"
    >
      <h1 className="text-2xl">ENDOTEREC</h1>
      <img src="menu.svg" alt="menu" className="w-7 hover:cursor-pointer" />
    </header>
  );
}

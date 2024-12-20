export function TopBadge() {
  return (
    <div className="flex items-center justify-center p-2 bg-white">
      <img src="/digi-logo.svg" className="h-12" />
      <div className="h-4 w-[1px] bg-gray-400" />
      <img src="/lock.svg" className="h-6 pl-4" />
      <a href="https://www.digistore24.com/" className="text-blue-800 underline pl-2">SECURE ORDER</a>
    </div>
  );
}
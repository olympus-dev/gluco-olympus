import Script from "next/script";

export function BgBadge() {
  return (
    <div className="w-full bg-black flex justify-center py-2
    px-4">
      {/* Elemento onde o disclaimer será renderizado */}
      <span id="disclaimer"></span>

      {/* Script externo */}
      <Script
        src="https://display.buygoods.com/v1/disclaimer?id=disclaimer&account_id=xxxx"
        strategy="afterInteractive" // Carregar o script após a interação inicial
      />
    </div>
  );
}

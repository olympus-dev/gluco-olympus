/* eslint-disable react/no-unescaped-entities */
import { Ban } from "lucide-react";

export function AffiliatesNotes() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-4xl text-red-500">AFFILIATES PLEASE NOTE!</h1>
      <ul className="font-semibold text-lg flex flex-col gap-2">
        <li className="flex gap-4"><Ban className="inline-block text-red-500 min-w-6 min-h-6"/>Do not directly link to our checkout.</li>
        <li className="flex gap-4"><Ban className="inline-block text-red-500 min-w-6 min-h-6"/>Do not send junk traffic.</li>
        <li className="flex gap-4"><Ban className="inline-block text-red-500 min-w-6 min-h-6"/>Do not spam.</li>
        <li className="flex gap-4"><Ban className="inline-block text-red-500 min-w-6 min-h-6"/>Do not advertise your own bonuses or anything additional of your own.</li>
        <li className="flex gap-4"><Ban className="inline-block text-red-500 min-w-6 min-h-6"/>Do not claim to represent Endoterec.</li>
        <li className="flex gap-4"><Ban className="inline-block text-red-500 min-w-6 min-h-6"/>Do not advertise incorrect/discounted pricing.</li>
        <li className="flex gap-4"><Ban className="inline-block text-red-500 min-w-6 min-h-6"/>Affiliates may NOT promote, sell, wholesale or resell Endoterec on any retail site including but not limited to Amazon, eBay and Google Store.</li>
        <li className="flex gap-4"><Ban className="inline-block text-red-500 min-w-6 min-h-6"/>Affiliates are prohibited from running ads on Google Adwords (or any Google property) that bid on keywords related to "Endoterec." They must not use the term "Endoterec" in any pay-per-click ads (NO BRAND BIDDING!)</li>
        <p className="pt-4">Anyone found doing this will be blacklisted immediately.</p>
      </ul>
    </div>
  );
}

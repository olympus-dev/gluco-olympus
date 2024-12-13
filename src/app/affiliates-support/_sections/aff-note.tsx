import { Ban } from "lucide-react";

export function AffiliatesNotes() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-4xl text-red-500">AFFILIATES PLEASE NOTE!</h1>
      <ul className="font-semibold text-lg">
        <li className="flex gap-4"><Ban className="inline-block text-red-500" />Do not directly link to our checkout.</li>
        <li className="flex gap-4"><Ban className="inline-block text-red-500" />Do not send junk traffic.</li>
        <li className="flex gap-4"><Ban className="inline-block text-red-500" />Do not spam.</li>
        <li className="flex gap-4"><Ban className="inline-block text-red-500" />No Brand Bidding!</li>
        <li className="flex gap-4"><Ban className="inline-block text-red-500" />Do not advertise your own bonuses or anything additional of your own.</li>
        <li className="flex gap-4"><Ban className="inline-block text-red-500" />Do not claim to represent EndoPeak.</li>
        <li className="flex gap-4"><Ban className="inline-block text-red-500" />Do not advertise incorrect/discounted pricing.</li>
        <p className="pt-4">Anyone found doing this will be blacklisted immediately.</p>
      </ul>
    </div>
  );
}

import { OrderButton } from "@/components/order-button";
import ComparationTable from "./_components/comparation-table";

export function ComparationSection() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center pb-8">
        Why <span className="text-brandLight">Endoterec©</span>
        <br />
        Stands Out
      </h2>
      <ComparationTable />
      <OrderButton className="mt-8" />
    </section>
  );
}

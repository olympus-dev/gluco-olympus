import { OrderButton } from "@/components/order-button";
import ComparationTable from "./_components/comparation-table";

export function ComparationSection() {
  return (
    <section className="flex flex-col items-center">
      
      <ComparationTable />
      <OrderButton className="mt-8" />
    </section>
  );
}

"use client";

import { Toaster } from "@/components/ui/sonner";
import { ShoppingBasket } from "lucide-react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "sonner";

type BottlesContextType = {
  remainingBottles: number;
};

const BottlesContext = createContext<BottlesContextType>(
  {} as BottlesContextType
);

function generateRandomName(): string {
  const names = ["James", "Michael", "Robert", "William", "David", "Joseph"];
  // const names = [
  //   "James Smith",
  //   "Michael Johnson",
  //   "Robert Williams",
  //   "William Brown",
  //   "David Jones",
  //   "Joseph Miller"
  // ];

  return names[Math.floor(Math.random() * 6)];
}

function generateRandomState(): string {
  const states = [
    "Alabama",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wyoming",
  ];

  return states[Math.floor(Math.random() * 6)];
}

function generateRandomSale(): string {
  const sale = [
    "purchased 3 bottles of Endoterec!",
    "purchased 6 bottles of Endoterec!",
    "subscribed to the 3-bottle plan!",
    "subscribed to the 6-bottle plan!",
  ];

  return sale[Math.floor(Math.random() * 2)];
}

function generateRandomNumber(): number {
  return Math.floor(Math.random() * (350 - 200 + 1)) + 200;
}

export const BottlesProvider = ({ children }: { children: ReactNode }) => {
  const [remainingBottles, setRemainingBottles] = useState(350);
  const bottlesRef = useRef(remainingBottles); // Usar ref para armazenar o valor mais recente

  function makeToast() {
    const interval = setInterval(() => {
      if (bottlesRef.current <= 22) {
        clearInterval(interval); // Parar o intervalo
        return;
      }

      fetch("https://randomuser.me/api/?gender=male&nat=us")
        .then((response) => response.json())
        .then((data) => {
          const personName = `${
            data.results[0].name.first || generateRandomName()
          }`;

          const location = `${
            data.results[0].location.state || generateRandomState()
          }`;

          toast(
            <div className="font-semibold flex align-top">
              <ShoppingBasket className="text-green-600 mr-2" />
              <p>
                <i>{personName}</i> from <i>{location}</i> just{" "}
                <i>{generateRandomSale()}</i>
              </p>
            </div>
          );
        })
        .catch(() => {
          const personName = generateRandomName();
          const location = generateRandomState();

          toast(
            <div className="font-semibold flex align-top">
              <ShoppingBasket className="text-green-600 mr-2" />
              <p>
                <i>{personName}</i> from <i>{location}</i> just{" "}
                <i>{generateRandomSale()}</i>
              </p>
            </div>
          );
        });

      setRemainingBottles((prevValue) => prevValue - 3);
    }, Math.floor(Math.random() * (110000 - 25000 + 1)) + 25000);

    return () => clearInterval(interval); // Garantir limpeza do intervalo ao desmontar
  }

  // Sincronizar a ref com o estado
  useEffect(() => {
    bottlesRef.current = remainingBottles;
  }, [remainingBottles]);

  useEffect(() => {
    setRemainingBottles(generateRandomNumber());
    makeToast();
  }, []);

  return (
    <BottlesContext.Provider value={{ remainingBottles }}>
      {children}
      <Toaster
        toastOptions={{
          style: {
            background: "var(--background)",
            border: "1px solid var(--extra-dark-brand)",
          },
        }}
      />
    </BottlesContext.Provider>
  );
};

export const useBottles = () => useContext(BottlesContext);

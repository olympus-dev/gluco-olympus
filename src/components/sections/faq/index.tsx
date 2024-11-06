"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4"
        onValueChange={setOpenItem}
      >
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border-2 border-brand rounded-xl bg-white shadow-md shadow-blue-500/20 overflow-hidden "
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline group">
              <div className="flex items-center justify-between w-full">
                <span className="text-left font-medium max-w-[85%]">
                  {item.question}
                </span>
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
                    openItem === item.id ? "bg-brand" : "bg-white shadow-md"
                  } `}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openItem === item.id
                        ? "rotate-180 text-white"
                        : "text-brand"
                    }`}
                  />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-4 text-muted-foreground">
                {item.answer}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

const faqItems = [
  {
    id: "item-1",
    question: "Can I take Endoterec?",
    answer: (
      <>
        <p>
          We always recommend to consult with your physician before taking any
          dietary supplement.
        </p>
        <p>
          What we can say, is that Endoterec is an all-natural formula that
          contains only ingredients that are verified.
        </p>
        <p>
          It is manufactured here in the USA in an FDA registered facility that
          follows the GMP (good manufacturing practices) guidelines.
        </p>
      </>
    ),
  },
  {
    id: "item-2",
    question: "Is Endoterec right for me?",
    answer: (
      <>
        <p>
          That’s a great question. Endoterec is different to other solutions
          because it targets the root cause of men’s failure to perform at
          optimal levels.
        </p>
        <p>
          Endoterec is also based on proven science and allow you to boost your
          performance quickly and effectively. The ingredients you will find in
          Endoterec are some of the most potent on the planet.
        </p>
        <p>
          Now, Endoterec works for almost everyone, but as you know, nothing
          works for 100% of people. And that’s why we provide you with a
          rock-solid satisfaction guarantee.
        </p>
      </>
    ),
  },
  {
    id: "item-3",
    question: "How Many Bottles of Endoterec Should I Order?",
    answer: (
      <>
        <p>
          To enjoy the peak benefits of Endoterec, it’s best to continue taking
          it.
        </p>
        <p>
          Most people we personally know have been taking Endoterec for years
          because quite simply, the tremendous increase in sex drive and added
          energy makes it an easy decision.
        </p>
        <p>
          And that’s why we offer deep discounts on the 3 and 6 packs of
          Endoterec because we want to make it as easy as possible for you to
          get the maximum benefits.
        </p>
        <p>
          If a 3 or 6 pack is out of your reach or you’d prefer to start with a
          single bottle, we absolutely understand. That’s why a single bottle
          starter option is here for you too.
        </p>
      </>
    ),
  },
  {
    id: "item-4",
    question: "Can you tell me about the guarantee again?",
    answer: (
      <>
        <p>
          The more results we see, the stronger we believe Endoterec has the
          power to completely support your sexual health. It’s true, though,
          that nothing works for 100% of the people who try it as each body
          works in its own way.
        </p>
        <p>
          That’s why every bottle of Endoterec comes with an ironclad 60-day
          money back guarantee. If, for any reason, you aren’t fully satisfied
          with the results, you can just return what you haven’t used for a
          full, no question asked refund.
        </p>
      </>
    ),
  },
  {
    id: "item-5",
    question: "How can I get started?",
    answer: (
      <>
        <p>
          To enjoy Endoterec and begin your new journey to a life full of
          vitality, energy and happiness, simply click on your best option
          below. On the next page, enter your details and confirm your order.
        </p>
        <p>
          Your order will be sent to our friendly warehouse team who will
          prepare it for you and send you a shipping notification. You can get
          started with Endoterec in a few short days!
        </p>
        <p>
          Click on your best option below to take advantage while Endoterec is
          still available for you.
        </p>
      </>
    ),
  },
];

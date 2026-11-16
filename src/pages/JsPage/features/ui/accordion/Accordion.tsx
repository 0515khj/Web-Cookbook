import { useState } from "react";
import { AccordionWrap } from "./accordionStyle";

const ITEMS = [
  { q: "하이브랩은 좋은 회사 입니까?", a: "네 맞습니다." },
  { q: "점심 시간은 얼마나 됩니까?", a: "1시간 입니다." },
  { q: "주변 식당이 맛있습니까?", a: "돈 값은 못합니다." },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AccordionWrap className="accordion">
      <div className="accordionBox">
        {ITEMS.map((item, i) => (
          <div key={item.q} className="accordionItem">
            <button
              className="accordionHeader"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {item.q}
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && <p className="accordionBody">{item.a}</p>}
          </div>
        ))}
      </div>
    </AccordionWrap>
  );
};

export default Accordion;
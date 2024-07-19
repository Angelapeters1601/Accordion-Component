import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ faqs }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionItem
          currOpen={currOpen}
          setCurrOpen={setCurrOpen}
          key={el.title}
          title={el.title}
          num={i}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        currOpen={currOpen}
        setCurrOpen={setCurrOpen}
        key="test 1"
        title="Thinking in React"
        num={22}
      >
        <b>Allows React developers to:</b>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

export default Accordion;

import AccordionItem from "./AccordionItem";

function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionItem key={i} title={el.title} text={el.text} num={i} />
      ))}
    </div>
  );
}

export default Accordion;

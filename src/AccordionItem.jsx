import React, { useState } from "react";

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={`item ${isOpen ? "open" : " "}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "- " : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default AccordionItem;
// Initially, isOpen is false, so the content {text} is not rendered.
//When the user clicks the item, handleToggle is called, toggling isOpen to true.
//The component re-renders, and because isOpen is true, the content {text} is rendered.

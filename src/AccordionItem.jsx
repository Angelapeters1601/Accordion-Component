function AccordionItem({ num, title, currOpen, setCurrOpen, children }) {
  const isOpen = num === currOpen;

  const handleToggle = () => {
    setCurrOpen(isOpen ? null : num); // Toggle current item, close if already open
  };

  return (
    <div className={`item ${isOpen ? "open" : " "}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "- " : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default AccordionItem;
// Initially, isOpen is false, so the content {text} is not rendered.
//When the user clicks the item, handleToggle is called, toggling isOpen to true.
//The component re-renders, and because isOpen is true, the content {text} is rendered.

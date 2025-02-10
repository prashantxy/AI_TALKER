import * as React from "react";
import { cn } from "./lib/utils"; // Assuming you have a utility for classNames


export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  value: string;
}

const AccordionTrigger: React.FC<{ onClick: () => void; isOpen: boolean; title: string }> = ({
  onClick,
  isOpen,
  title,
}) => (
  <div
    className="cursor-pointer py-2 px-4 flex justify-between items-center bg-gray-100"
    onClick={onClick}
  >
    <span>{title}</span>
    <span>{isOpen ? "−" : "+"}</span>
  </div>
);

const AccordionContent: React.FC<{ isOpen: boolean; children: React.ReactNode }> = ({ isOpen, children }) =>
  isOpen ? <div className="py-2 px-4">{children}</div> : null;

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, value }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b" id={value}>
      <AccordionTrigger onClick={toggle} isOpen={isOpen} title={title} />
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </div>
  );
};

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, className }) => {
  return <div className={cn("w-full max-w-md mx-auto", className)}>{children}</div>;
};

export { Accordion, AccordionItem, AccordionContent, AccordionTrigger };

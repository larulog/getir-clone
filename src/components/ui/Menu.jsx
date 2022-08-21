import React, { useState, useEffect } from "react";
import { Collapse } from "react-collapse";
import { useWindowWidth } from "@react-hook/window-size";
import { IoIosArrowDown } from "react-icons/io";

export default function Menu({ title, items }) {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(windowWidth > 768);

  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <section>
      <nav className="grid gap-y-4">
        <h6
          onClick={toggleCollapse}
          className="text-lg flex items-center justify-center text-primary-brand-color"
        >
          {title}
          {windowWidth <= 768 && (
            <button
              className={`transition-all transform ml-3 w-8 h-8 rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color grid place-items-center ${
                isOpen ? "-rotate-180" : ""
              }`}
            >
              <IoIosArrowDown size={14} />
            </button>
          )}
        </h6>

        <Collapse isOpened={isOpen}>
          <nav>
            <ul className="grid gap-y-2">
              {items.map((item, key) => (
                <li key={key}>
                  <a
                    href="http://localhost:3000"
                    className="text-sm hover:text-brand-color"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
      </nav>
    </section>
  );
}

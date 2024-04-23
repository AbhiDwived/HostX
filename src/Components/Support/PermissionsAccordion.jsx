import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../../Style/Support.css';

const VpsAccordion = () => {

  const [accordionItems, setAccordionItems] = useState([
    { id: 1, title: 'Do I Need Domain Privacy Protection? | HostX', content: <p>Whether or not you need domain privacy protection depends on your personal preferences and specific circumstances.</p>, isOpen: false },
    { id: 2, title: 'Launchpad: How to Enable WHMCS Privacy?', content: <p>Log in to WHM using your username and password. WHM is a control panel used for managing web hosting accounts and servers. Within the policies section, you may find a list of available policies or policy categories. These policies govern various aspects of hosting account management, security, resource usage, and more.</p>, isOpen: false },
    { id: 3, title: 'What Is Domain Name Privacy? | HostX', content: <p>Domain name privacy, also known as WHOIS privacy or domain privacy protection, is a service offered by domain registrars to protect the privacy of domain owners. When you register a domain name, you are required to provide personal contact information such as your name, address, email address, and phone number.</p>, isOpen: false },
    { id: 4, title: 'Domain Privacy', content: <p>Domain privacy, also known as WHOIS privacy or domain privacy protection, is a service offered by domain registrars to protect the privacy of domain owners. When you register a domain name, you are required to provide personal contact information such as your name, address, email address, and phone number.</p>, isOpen: false },
  ]);

  const handleToggle = (index) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false,
      }))
    );
  };

  return (
    <div className="accordion accordion-flush" id="customAccordion">
      {accordionItems.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <p className="accordion-header" id={`accordionHeader${item.id}`}>
            <button
              className={`accordion-button ${item.isOpen ? '' : 'collapsed'}`}
              type="button"
              onClick={() => handleToggle(index)}
              aria-expanded={item.isOpen}
              aria-controls={`accordionContent${item.id}`}
            >
              <div className='ps-3 d-flex justify-content-between align-items-center w-100'>
                <div>
                  {item.title}
                </div>
                <div>
                  {item.isOpen ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
            </button>
          </p>
          <div
            id={`accordionContent${item.id}`}
            className={`accordion-collapse collapse ${item.isOpen ? 'show' : ''}`}
            aria-labelledby={`accordionHeader${item.id}`}
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VpsAccordion

import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../../Style/Support.css';

const GeneralAccordion = () => {

  const [accordionItems, setAccordionItems] = useState([
    { id: 1, title: 'What is a Virtual Private Server (VPS)?', content: <p>A Virtual Private Server is a server divided into fully separate hosting environments. When you have VPS hosting, one of those environments is completely dedicated to you. That means you don't have to share resources (such as RAM or CPU) with other customers and you're less likely to be impacted by their behavior.</p>, isOpen: false },
    { id: 2, title: 'What about VPS vs. Dedicated?', content: <p>Another great question. A dedicated server is a server that's literally dedicated to you and no one else, which means the world (or in this case, server) is your oyster. Learn more about the benefits of VPS and Dedicated here.</p>, isOpen: false },
    { id: 3, title: 'How do I get started with VPS hosting?', content: <p>Our KnowledgeBase will walk you through exactly how to upgrade to a VPS. Then you can check out these essential first steps.And if you really want to go for it, you can read up on more general information about VPS here.</p>, isOpen: false },
    { id: 4, title: 'Wait… if we`re talking about a VPS, what is a VPN then?', content: <p>Yup, it can be a little confusing. But a virtual private server (VPS) is a form of web hosting, while a virtual private network (VPN) is a technology that allows you to remain completely anonymous when using the web. Read up more on VPS vs. VPN here.</p>, isOpen: false },
    { id: 5, title: 'When should I use VPS hosting over Shared?', content: <p>In short, a virtual private server is ideal for users looking for more control over their hosting environment. Maybe your site traffic has grown, or maybe you have multiple websites and need more resources to run them all effectively. A VPS gives you more flexibility and control to bump up things like RAM and disk space without paying for more than you need.<br />For more information on shared vs. VPS hosting check out our blog.</p>, isOpen: false },
    { id: 6, title: 'I already have hosting, but want to switch to VPS. Any tips?', content: <p>If you’re switching from Shared, Reseller, or Dedicated hosting to a virtual private server, the process is pretty simple. You’ll just have to transfer your files, change the DNS, and cancel your old plan.<br /> For more details into this process, check out this article on switching to VPS.</p>, isOpen: false },
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

export default GeneralAccordion

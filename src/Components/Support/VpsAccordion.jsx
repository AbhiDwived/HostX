import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../../Style/Support.css';


const VpsAccordion = () => {

  const [accordionItems, setAccordionItems] = useState([
    { id: 1, title: 'How to Update cPanel in WHM?', content: <p>To update cPanel in WHM, you need to login to WHM using your username and password. Once logged in, search for the "cPanel" section. In the cPanel section, click on the "Upgrade to Latest Version" option. This will initiate the update process.</p>, isOpen: false },
    { id: 2, title: 'Updating Legacy Linux Dedicated Hosting Packages', content: <p>First log in to your hosting account. This typically involves accessing the control panel. The control panel might be cPanel, Plesk, or a custom control panel specific to your hosting provider, navigate to the section or menu related to your hosting package. look for an option like "Upgrade" or "Package Management" within the hosting package section.</p>, isOpen: false },
    { id: 3, title: 'How to Reboot Your VPS/Dedicated Server?', content: <p>Log in to your server. Common methods include SSH (Secure Shell) or remote desktop access. Now, open a command-line interface or terminal window. This allows you to execute commands on the server. In the command-line interface, type the command to initiate a system reboot.</p>, isOpen: false },
    { id: 4, title: 'VPS General Information', content: <p>A VPS (Virtual Private Server) is a virtualized server environment created through virtualization technology. It provides a dedicated portion of server resources to the user, allowing them to have more control and flexibility compared to shared hosting.</p>, isOpen: false },
    { id: 5, title: 'VPS Services - Self Signed SSL Certificates', content: <p>A self-signed SSL certificate is a digital certificate that is signed by the entity itself rather than a trusted third-party certificate authority (CA). It is an option for securing a website with HTTPS encryption when you don't want to purchase a certificate from a recognized CA or when you are using it for testing or development purposes.</p>, isOpen: false },
    { id: 6, title: 'Do I Need a VPS?', content: <p>Whether or not you need a VPS (Virtual Private Server) depends on your specific requirements, resources, and goals.</p>, isOpen: false },
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

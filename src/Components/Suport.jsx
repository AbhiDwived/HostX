import React, { useState } from 'react';
import MultiAccordion from './Support/MultiAccordion';
import GeneralAccordion from './Support/GeneralAccordion';
import VpsAccordion from './Support/VpsAccordion';
import PermissionsAccordion from './Support/PermissionsAccordion';
import general from "../images/general.png";
import privacy from "../images/privacy.png";
import vps from "../images/vps-hoisting.png";

const Support = () => {
  const [activeSection, setActiveSection] = useState('general'); // State to track active section

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='container-fluid'>
      <div className='row mt-5'>
        <div className='col-sm-11 mb-5  mx-auto'>
          <div className='row mx-auto'>
            <div className='col-sm-11 my-5 mx-auto'>
              <div>
                <h1>Report abuse and illegal content</h1>
                <p className='my-5'>If you want to report an Internet breach to HostX, select an option below to create your report. Please provide the necessary details so that our team can investigate your complaint.<br />
                  If you have submitted a report by e-mail and have been forwarded to this form, your details are<br />
                  incomplete. In order for us to process your request, you must complete the form below and provide all the necessary information.
                </p>
              </div>
              
              <MultiAccordion />

            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-10 mb-5 mx-auto'>
          <div className='row mx-auto'>
            <div className='col-sm-4'>
              <div className='card mb-3 p-3'>
                <div className='row' onClick={() => handleSectionClick('general')}>
                  <div className='col-sm-2'>
                    <img src={general} alt='general ' height="45px" width="45px" />
                  </div>
                  <div className='col-sm-10'>

                    <p><b>General inquiries</b><br /><span style={{fontSize:"15px"}}>New around here? Start with the basics.</span> </p>

                  </div>

                </div>
              </div>
              <div className='card mb-3 p-3'>
                <div className='row' onClick={() => handleSectionClick('vps')}>
                  <div className='col-sm-2'>
                    <img src={vps} alt='general ' height="45px" width="45px" />
                  </div>
                  <div className='col-sm-10'>

                    <p><b>VPS Hosting Features</b><br /><span style={{fontSize:"15px"}}>Dive deeper into HostX's servers features. </span></p>

                  </div>

                </div>
              </div>
              <div className='card mb-3 p-3'>
                <div className='row' onClick={() => handleSectionClick('privacy')}>
                  <div className='col-sm-2'>
                    <img src={privacy} alt='general ' height="45px" width="45px" />
                  </div>
                  <div className='col-sm-10'>

                    <p><b>Permissions & Privacy</b><br /><span style={{fontSize:"15px"}}>New around here? Start with the basics.</span> </p>

                  </div>

                </div>
              </div>
            </div>
            

            <div className='col-sm-8'>
              {activeSection === 'general' && (
                <div className='card p-5'>
                  <div className='row'>
                    <div className='col-sm-1'>
                    <img src={general} alt='general ' height="45px" width="45px" />
                    </div>
                    <div className='col-sm-10'>
                      <p className='ps-3'><b>General inquiries</b><br /><span style={{fontSize:"15px"}}>New around here? Start with the basics.</span></p>
                      <GeneralAccordion/>
                    </div>
                    <div className='col-sm-1'></div>
                  </div>
                </div>
              )}

              {activeSection === 'vps' && (
                <div className='card p-5'>
                  <div className='row'>
                    <div className='col-sm-1'>
                      <img src={vps} alt='general ' height="45px" width="45px" />
                    </div>
                    <div className='col-sm-10'>
                      <p className='ps-3'><b>VPS Hosting Features</b><br /><span style={{fontSize:"15px"}}>Dive deeper into HostX's servers features. </span></p>
                      <VpsAccordion/>
                    </div>
                    <div className='col-sm-1'></div>
                  </div>
                </div>
              )}

              {activeSection === 'privacy' && (
                <div className='card p-5'>
                  <div className='row'>
                    <div className='col-sm-1'>
                      <img src={privacy} alt='general ' height="45px" width="45px" />
                    </div>
                    <div className='col-sm-10'>
                      <p className='ps-3'><b>Permissions & Privacy</b><br /><span style={{fontSize:"15px"}}>New around here? Start with the basics.</span></p>
                      <PermissionsAccordion/>
                    </div>
                    <div className='col-sm-1'></div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support;

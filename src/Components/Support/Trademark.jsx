import React from 'react'

const Trademark = () => {
    return (
        <div className='container-fluid'>
            <div className='row mt-5'>
                <div className='col-sm-12  mx-auto'>
                    <div className='row mx-auto'>
                        <div className='col-sm-4'>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Your Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>

                        </div>
                        <div className='col-sm-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"> Address</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"> Phone Number</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>

                    </div>
                    <div className='row mx-auto'>
                        <div className='col-sm-4'>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>

                        </div>
                        <div className='col-sm-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Trademarked word/symbol</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"> Registration office, Country</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>

                    </div>
                    <div className='row mx-auto'>
                        
                        <div className='col-sm-6'>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label"> URL(s) and/or a description of the original content</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Comments/Commercial Nexus</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>
                        </div>

                    </div>
                    <div className='row mx-auto'>
                        <div className='col-sm-4'>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"> Digital Signature</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-8 px-3'>
                        <p>  By entering your name, you affirm all information is true and accurate.<br/>
                            All information submitted to us may be relayed to the customer during our remediation process.
                            </p> 
                        </div>
                    </div>
                    <button className='btn my-3 text-white' style={{ background: "#00afff" }}>Report Abuse</button>
                </div>
            </div>
        </div>
    )
}
export default Trademark

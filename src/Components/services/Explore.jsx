import React from 'react'

const Explore = () => {
  return (
    <div>
       <div className='container-fluid' style={{ background: "#0d0c1b" }}>
        <div className='row'>
          <div className='col-sm-12 my-5 text-center'>
            <p className='text-success mt-3'> FAQS</p>
            <h1 className='text-white'>Got questions?
              <br />
              Well, we've got answers.

            </h1>
            <button className='btn px-5 py-2 rounded-pill text-white' style={{background:"pink"}}>EXPLORE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore

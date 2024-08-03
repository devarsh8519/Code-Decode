import React from 'react'

function Featured() {
  return (
    <div className='mb-5'>
    <h1 className="mt-5">Featured things</h1>
    <p className="fs-4">Our mission is very important to the planet: we plant as many trees as possible. Can you figure out?</p>
    <div className="d-flex gap-5 mt-5">
        <div className="card" style={{ "width": '18rem',"margin-left":"250px"}}>
            <img src="Logo.png" className="card-img-top" alt="..." />
            <div className="card-body">
            <h3>The Future of web <br/>design, today</h3>
      <p className='fs-5 text-body-secondary'>The Future of web design, today</p>
      <button className="px-5 py-3 me-4  fw-bold rounded-2 border border-light-subtle btn btn-light-subtle" type="submit">Call to Action</button>
            </div>
        </div>
        <div className="card" style={{ "width": '18rem',"margin-left":"50px"}}>
            <img src="Logo.png" className="card-img-top" alt="..." />
            <div className="card-body">
            <h3>The Future of web <br/>design, today</h3>
      <p className='fs-5 text-body-secondary'>The Future of web design, today</p>
      <button className="px-5 py-3 me-4  fw-bold rounded-2 border border-light-subtle btn btn-light-subtle" type="submit">Call to Action</button>
            </div>
        </div>
        <div className="card" style={{ "width": '18rem',"margin-left":"50px"}}>
            <img src="Logo.png" className="card-img-top" alt="..." />
            <div className="card-body">
            <h3>The Future of web <br/>design, today</h3>
      <p className='fs-5 text-body-secondary'>The Future of web design, today</p>
      <button className="px-5 py-3 me-4  fw-bold rounded-2 border border-light-subtle btn btn-light-subtle" type="submit">Call to Action</button>
            </div>
        </div>
    </div>
</div>

  )
}

export default Featured

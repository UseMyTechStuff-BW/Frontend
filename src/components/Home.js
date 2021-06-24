import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="home-top-section">

      <div className="title">
        <h2>No Middle Man, Always on Sale.</h2>
        <Link id='signup-link' to='/register'>Start Renting</Link>
      </div>
      </section>

      <section className="home-bottom-section">
        <div className="about">
          <div className="about-left">
          <h2>Are you tired of paying ridiculous fees for camera and other equipment rentals?</h2>
          <p>Bypass the middleman and rent from a real person. Sign up and get started.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
import React from 'react'

const NotFound = () => {
  return (
    <main className="main">
      <section className="section section--full">
        <div className="container tp--sm bp--sm">
          <div className="content content--sm content--center">
            <h1 className='section--heading'>
              404 Page Not Found
            </h1>
            <p className="text--mute">Sorry, but the page you are looking for is not found. This could be because:</p>
            <p className="text--mute">The page does not exists.</p>
            <p className="text--mute">Or</p>
            <p className="text--mute">The page exists, but you do not have permission to access it.</p>
         </div>
        </div>
      </section>
    </main>
  )
}

export default NotFound
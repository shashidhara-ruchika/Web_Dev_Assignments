import React from 'react';
import rightImage from '../assests/background.png';

export default function HomeCard() {
  const cardStyles = {
    flex: 1,
    padding: '225px',
  };

  const innerCardStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    fontSize: '110%',
  };

  const rightSideStyles = {
    flex: 1,
    background: `url(${rightImage}) right center no-repeat fixed`,
    backgroundSize: 'cover',
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={cardStyles} className="card">
        <div style={innerCardStyles} className="card-body">
          <h3 className="card-title">Jobify Your Application!</h3>
          <br/>
          <div className="card-text">
            <div>
              <strong>Welcome to Your Next Career Move!</strong> Discover
              exciting job opportunities tailored to your skills and
              aspirations. Your dream career is just a click away.
            </div>

            <div>
              <strong>Featured Jobs</strong> Explore our featured jobs and take
              a step towards a fulfilling career:
            </div>

            <ul>
              <li>
                <strong>Software Engineer:</strong> Join a dynamic team working
                on cutting-edge technologies.
              </li>
              <li>
                <strong>Marketing Specialist:</strong> Drive marketing
                strategies for innovative products.
              </li>
              <li>
                <strong>UX/UI Designer:</strong> Shape user experiences and
                create visually stunning designs.
              </li>
            </ul>

            <div>
              More questions?{" "}
              <a href="/contact">Contact us</a>
            </div>

            <div>
              <strong>How It Works</strong>
            </div>

            <ol>
              <li>
                <strong>Browse Jobs:</strong> Explore a variety of opportunities
                from different industries and locations.
              </li>
              <li>
                <strong>Apply Online:</strong> Submit your application and
                resume directly through our user-friendly platform.
              </li>
              <li>
                <strong>Get Hired:</strong> Connect with employers, attend
                interviews, and secure your dream job.
              </li>
            </ol>

            <div>Your future starts here. Begin your job search now!</div>
            <br/>
            <a href="/jobs" className="btn btn-primary">
              Search Jobs
            </a>
          </div>
        </div>
      </div>
      <div style={rightSideStyles}></div>
    </div>
  );
}


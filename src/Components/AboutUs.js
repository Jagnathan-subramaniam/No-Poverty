import React from 'react'
import Navigation from './Navigation'
import Button from 'react-bootstrap/Button';


export default function AboutUs() {
  return (
    <>
    <Navigation/>
    <div className='container'>      
      <div className="row my-4">
        <div className='col-lg-12'>
            <h3 className='text-center'> <strong>About Us</strong></h3><br/>
          <p>
            <b>Save Jeevan No Poverty </b> is dedicated to eradicating poverty and creating opportunities
            for those in need. With a mission rooted in compassion and empowerment, we believe that everyone deserves
            access to the basic necessities of life and the chance to build a brighter future. A a passionate organization committed to creating a world where poverty is just a distant memory. At the core of our mission is the belief that every individual deserves access to the basic necessities of life, and we strive to pave the way for a future free from the shackles of poverty.
          </p>
          </div>
        </div>
        <div className='row my-4'>
        <div className='col-lg-12'>
        <h5 className='text-center'><strong>Our Vision</strong></h5><br/>
          <p>
             A world where poverty is a distant memory, replaced by thriving communities,
            empowered individuals, and equal opportunities for all. At Save Jeevan No Poverty, our mission is clear and resolute: to eradicate poverty and uplift communities through sustainable development initiatives. We are dedicated to providing individuals and families with the tools and resources they need to break free from the cycle of poverty, empowering them to lead dignified and fulfilling lives.
          </p>
        </div>
      </div>
      <div className='row my-4'>
        <div className='col-lg-12'>
        <h5 className='text-center'><strong>Who We Are ?</strong></h5><br/>
          <p>
           Save Jeevan No Poverty is not just an organization; it's a movement driven by a team of passionate individuals who believe in the power of collective action. Our diverse team brings together professionals from various fields, including social work, economics, healthcare, and education, united by a common goal – to make poverty a thing of the past.
          </p>
        </div>
      </div>
      <div className='row my-4'>
        <div className='col-lg-12'>
        <h5 className='text-center'><strong>Our Approach</strong></h5><br/>
          <p>
          We believe in a holistic approach to addressing poverty, recognizing that it is a multifaceted issue with deep-rooted causes. Our programs are designed to tackle poverty at its roots by focusing on education, healthcare, economic empowerment, and community development. By addressing these interconnected aspects, we aim to create sustainable change that will uplift entire communities.
          </p>
        </div>
      </div>
      <div className='row my-4'>
        <div className='col-lg-12'>
        <h5 className='text-center'><strong>Transparency and Accountability</strong></h5><br/>
          <p>
          Jeevan No Poverty is committed to transparency and accountability in all our endeavors. We believe that our stakeholders, including donors, partners, and the communities we serve, have the right to know how their contributions are making a difference. We regularly provide updates on our projects, financial reports, and impact assessments to ensure transparency in our operations.
          </p>
        </div>
      </div>
      <div className='row my-4'>
        <div className='col-lg-12'>
        <h5 className='text-center'><strong>Collaboration and Partnerships</strong></h5><br/>
          <p>
          We understand that the fight against poverty is not a solitary endeavor. Jeevan No Poverty actively seeks partnerships with like-minded organizations, government agencies, and businesses to amplify our impact. By working together, we can leverage our collective strengths and resources to address the systemic challenges of poverty more effectively.
          </p>
        </div>
      </div>
      
        <h5 className='text-center'><strong>Get Involved</strong></h5><br/>
          <p>
          The journey to a poverty-free world is a collective effort, and we invite you to join us in this noble cause. Whether you are an individual, corporation, or nonprofit organization, there are various ways you can contribute to our mission. Explore our "Get Involved" section to discover opportunities for donations, volunteering, and partnerships.
          <a href='#'>Get Involved</a>
          </p>
        </div><div className='row my-4'>
        <div className='col-lg-12'>
      </div>
      <div className='row my-4'>
        <div className='col-lg-12 d-flex justify-content-center align-items-center'>
          <Button variant="outline-primary">Read More</Button>{' '}
          </div>
        </div>
      
    </div>
    
    
    </>
  )
}

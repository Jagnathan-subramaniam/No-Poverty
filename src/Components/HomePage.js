import React from 'react'
import Navigation from './Navigation'
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function HomePage() {
  return (
    <>
    <Navigation/>
    <div className="container mt-3" >
      <div className='row text-center'>
        <div className='col'>
          <h1>Welcome to Save Jeevan No Poverty</h1>
          <p>Breaking the Chains of Poverty, Building a Future Together</p>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-lg-8 '>
          <h3 >Health:</h3>
          <p >
          Every year, approximately 18 million individuals, equivalent to one-third of global fatalities, succumb to causes directly linked to poverty. The majority of these deaths, occurring at a rate of 50,000 per day, disproportionately affect populations residing in developing nations. Women and children are particularly overrepresented among the world's impoverished, experiencing the severe consequences of enduring poverty.
          </p>
          <h6>What we do ?</h6>
          <p>by arranging <b>Health Education Programs;</b> </p>
          <ul>
            <li>Implement health education programs to raise awareness about preventive healthcare practices, nutrition, hygiene, and the importance of seeking medical attention.</li>
            <li>Conduct workshops and seminars on topics such as family planning, maternal and child health, and disease prevention.</li>
          </ul>
          </div>
          <div className='col-lg-4'>
          <img src='https://img.freepik.com/free-photo/children-wearing-face-mask-extreme-pollution_23-2150879833.jpg?t=st=1706002753~exp=1706006353~hmac=fd622bd947350bb6f2bac8ba3af322a1de535daf5572af169eddea90521e17d3&w=1060'  width='400px'/>
          </div>
        </div>
      <div className='row my-5'>
      <div className='col-lg-4'>
          <img src='https://img.freepik.com/free-photo/portrait-indian-kids-bazaar_23-2150913328.jpg?t=st=1705959806~exp=1705963406~hmac=9eec2dc24cd602c08ebab1cf66f46a9690564b95db2abd49c87d79634f456d9a&w=740' alt='Loading' height='300px'  width='300px'/>
          </div>
        <div className='col-lg-8'>
          <h3>Hunger:</h3>
          <p>Approximately 1.02 billion individuals experience nightly hunger, with Sub-Saharan Africa registering the highest child malnutrition rate globally between 2001 and 2006, as indicated by the Global Hunger Index.
          Those with limited financial means allocate a larger proportion of their budgets to food compared to wealthier individuals, making them particularly susceptible to fluctuations in food prices. Notably, in late 2007, spikes in grain prices resulted in food-related unrest in certain nations.</p>
          <h6>What we do ?</h6>
          <p>by arranging <b>Food Distribution Programs;</b> </p>
          <ul>
            <li>Implement regular food distribution programs to provide nutritious meals to those in need.</li>
            <li>Collaborate with local food banks, farmers, and businesses to secure a stable supply of food.</li>
          </ul>
        </div>
        
      </div>
      

      <div  className="row my-4">
        <div className='col'>
          <h2>Get Involved</h2>
          <p>
            Together, we can make a difference. Join us in our mission to end poverty. Here's how you can get involved:
          </p>
          <Button variant="primary">Donate Now</Button>{' '}
          <Button variant="secondary">Volunteer</Button>{' '}
          <Button variant="info">Follow Us on Social Media</Button>
        </div>
      </div>
    </div>
    
    </>
  )
}

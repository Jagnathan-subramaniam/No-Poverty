import React from 'react'
import Navigation from './Navigation';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Welfare() {
  return (
    <>
    <Navigation/>
    <div className='container'>
        <div className='row my-5'>
            <div className='col-lg-12'>
                <h3 className='text-center'>How We Can Help</h3>
            </div>
        </div>
    
    <div className='row' >
        <div className='col-lg-4'>
        <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/moment-captured-migration-crisis-with-people_23-2150901764.jpg?t=st=1705999524~exp=1706003124~hmac=77a5d830292d5bd94c2e00dfffd0f1e1053d53679ddd8cebde535137a5330f51&w=996" height='200px' />
      <Card.Body>
        <Card.Title>Basic Needs Assistance</Card.Title>
        <Card.Text>
        Food distribution programs to address immediate hunger.
        </Card.Text><br/>
        <Button variant="primary" >Click Here</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-4'>
        <Card style={{ width: '20rem' }} >
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/international-day-education-celebration_23-2150931160.jpg?t=st=1706000060~exp=1706003660~hmac=175ea04f50619b795bb10a0e1c5b3bfaf30b3962cf8dfc0b70ab5fad5402c6a4&w=1380" height='200px' />
      <Card.Body>
        <Card.Title>Educational Empowerment</Card.Title>
        <Card.Text>
        Scholarships and educational support for children and adults.
       </Card.Text><br/>
        <Button variant="primary">Click Here</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-4'>
        <Card style={{ width: '20rem'}} >
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/medical-team-stacking-hand_587448-4731.jpg?t=st=1706000512~exp=1706004112~hmac=2423a5553bee376e30857cc23deaa22d7032aa272c177f822950c5ba2bbe0f2e&w=1380" height='200px' />
      <Card.Body>
        <Card.Title>Health and Wellness Services</Card.Title>
        <Card.Text>
        Access to healthcare resources, including medical check-ups and treatment assistance.
       </Card.Text>
        <Button variant="primary">Click Here</Button>
      </Card.Body>
    </Card>
        </div>
    </div>
    <div  className='row my-5'>
        <div className='col-lg-4'>
        <Card style={{ width: '20rem'}} >
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/photorealistic-money-with-plant_23-2151027594.jpg?t=st=1706001383~exp=1706004983~hmac=ca9096db303163fba265935f9e38f0e1251d800d6b836930b12bfad4619098f7&w=360" height='300px' />
      <Card.Body>
        <Card.Title>Financial Aid and Microfinance</Card.Title>
        <Card.Text>
        Financial assistance programs to help overcome economic challenges
       </Card.Text>
        <Button variant="primary">Click Here</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-4'>
        <Card style={{ width: '20rem'}} >
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/portrait-indian-man-bazaar_23-2150913332.jpg?t=st=1706002489~exp=1706006089~hmac=8602352864834aa5ae7e7a0f9cabc7a100707242dcfa943324ced8af703ce871&w=826"  />
      <Card.Body>
        <Card.Title>Employment Opportunities</Card.Title>
        <Card.Text>
        Job Training Programs: Develop programs that offer job training and skills development to enhance employability.
       </Card.Text>
        <Button variant="primary">Click Here</Button>
      </Card.Body>
    </Card>
        </div> 
        <div className='col-lg-4'>
        <Card style={{ width: '20rem'}} >
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/two-people-holding-hands-after-earthquake_23-2150811875.jpg?t=st=1706002956~exp=1706006556~hmac=63152850044c0b821be6cf78b093171382aaeda6618b94c41d8f94ad88a76300&w=1060" height='250px'  />
      <Card.Body>
        <Card.Title>Community Building</Card.Title>
        <Card.Text>
        Social Support Programs: Create support networks and community groups to foster social connections and emotional well-being.
       </Card.Text>
        <Button variant="primary">Click Here</Button>
      </Card.Body>
    </Card>
        </div> 
    </div>


    </div>
       </>
  )
}

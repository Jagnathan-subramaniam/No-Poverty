import React from 'react'
import Navigation from './Navigation'
import "./MainPage.css";
import Carousel from 'react-bootstrap/Carousel';

export default function MainPage() {
  return (
    <>

    <Navigation/>

    <Carousel fade>
      <Carousel.Item>
        <img src='https://img.freepik.com/free-photo/portrait-sad-child_23-2150761626.jpg?t=st=1705951079~exp=1705954679~hmac=4be98ed964255f07a456a0efdc8ae1551be44db2f45f48c19abc74ae901ca7a9&w=1060' alt='' className='d-block w-100'  />
        <Carousel.Caption>
          <h3>Poverty</h3>
          <p>Poverty is a complex and multidimensional social issue characterized by the lack of resources necessary for a minimum standard of living. It encompasses various dimensions, including economic, social, and cultural factors.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://img.freepik.com/free-photo/child-stuck-migration-crisis-while-trying-immigrate_23-2150901898.jpg?t=st=1705951211~exp=1705954811~hmac=10514ccb0ab4ee44b3a72575d99082fd6e4492066a9f2796b886f2341465818d&w=900' alt='' className='d-block w-100 '  />
        <Carousel.Caption>
          <h3>Social Inequality</h3>
          <p> Poverty is closely tied to social inequalities, including factors such as gender, ethnicity, and race. Certain groups may face higher rates of poverty due to systemic discrimination.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://img.freepik.com/free-photo/moment-captured-migration-crisis-with-people_23-2150901770.jpg?t=st=1705952826~exp=1705956426~hmac=83876aade1cda0a42364080e843f8913cf401b18e07bf24f2fb481736ce31b9d&w=1380' alt='' className='d-block w-100 '  />
        <Carousel.Caption>
          <h3>Income Poverty</h3>
          <p>Income poverty is often measured by the income levels of individuals or households. People living below a certain income threshold, such as the poverty line, are considered to be in poverty.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  
  )
}

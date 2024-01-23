import React from 'react'
import Navigation from './Navigation'
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <div className='container'>
        <div className='row my-5'>
          <div className='col-lg-12'>
            <h3 className='text-center'>Contact Save Jeevan No Poverty</h3>
            <p className='my-5'> Save Jeevan No Poverty is headquartered in Coimbatore, with regional offices and project sites across the globe. We encourage you to reach out to us for more information, collaboration inquiries, or to share your ideas on how we can work together to make a lasting impact.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <h5>Reach Out:</h5>
            <p >
              For general inquiries, partnerships, or any other information, please feel free to reach out to us through the following channels:
            </p>
            <ul>
              <li>Email: <span className='text-primary'>info@savejeevannopoverty.org</span></li>
              <li>Phone: +1 (123) 456-7890</li>
            </ul>
            <div className="col-lg-6 col-sm-6 col-md-6 ">
              <div className="m-2 p-2">
                <a href="#" className="p-2">
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="" className="p-2">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="" className="p-2">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row my-5'>
          <div className='col-lg-12'>
            <h5>Get Involved:</h5>
            <p>
              Interested in joining our mission to eradicate poverty? Explore our "Get Involved" section to learn about volunteering opportunities, donations, and partnership programs.
              <a href='#'>Get Involved</a>
            </p>

            <div>
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-md-6 " id='contact'>
                  <h2 className="m-5 text-center">Contact Us</h2>
                  <form>
                    <div className="form-group">
                      <label for="name">Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                      />
                    </div>{" "}
                    <br></br>
                    <div className="form-group">
                      <lable for="email">Enter Mail ID:</lable>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                      />
                    </div>{" "}
                    <br></br>
                    <div className="form-group">
                      <label for="message">Message :</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="message"
                        rows="3"
                      ></textarea>
                    </div>{" "}
                    <br></br>
                    <br></br>{" "}
                    <button
                      type="submit"
                      className="btn text-success  btn-outline-dark"
                    >
                      Submit
                    </button>
                  </form>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </>

  )
}

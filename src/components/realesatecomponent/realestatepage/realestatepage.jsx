import './realestatepage.css';
import realestate1 from '../../../assets/images/realestate3.webp';
import realestate2 from '../../../assets/images/realestate5.jpg';
import realestate3 from '../../../assets/images/realestate2.jpg';
import realestate4 from '../../../assets/images/realestate4.png';
import { BrowserChrome, Envelope, EnvelopeFill, GeoAltFill, PersonLinesFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
export function RealEstateComponent() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 realestate-img" src={realestate1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 realestate-img" src={realestate1} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 realestate-img" src={realestate1} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container">
        <div className="row my-5 ">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={realestate1}
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h1 className="font-weight-light pb-2">Home page title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ut cumque consectetur, fugiat vel nam quis? Atque,
              officiis inventore? Libero minima est molestias. Ducimus cumque,
              qui quisquam fugiat cum tenetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ut cumque consectetur, fugiat vel nam quis? Atque,
              officiis inventore? Libero minima est molestias. Ducimus cumque,
              qui quisquam fugiat cum tenetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ut cumque consectetur, fugiat vel nam quis? Atque,
              officiis inventore? Libero minima est molestias. Ducimus cumque,
              qui quisquam fugiat cum tenetur.
            </p>
          </div>

        </div>
      </div>
      <div className='realestatetypes-main'>
        <h3 style={{ textAlign: 'center' }}>Our Services</h3>
        <div className='row mt-3'>
          <div className='col-lg-3 col-md-4 col-sm-6 img-container'>
            <Link to='/sale'>
            <img src={realestate1} alt="Real Estate" className="realestatetypes-img" />
            <div className="middle">
              <div className="realestate-text">Apartments
                <h6 style={{ textAlign: 'center' }}>45+ available</h6>
                
              </div>
              
            </div>
            </Link>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6 img-container'>
            <img src={realestate2} alt="Real Estate" className="realestatetypes-img" />
            <div className="middle">
              <div className="realestate-text">land sale
                <h6 style={{ textAlign: 'center' }}>45+ available</h6>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6 img-container'>
            <img src={realestate3} alt="Real Estate" className="realestatetypes-img" />
            <div className="middle">
              <div className="realestate-text">villa sale
                <h6 style={{ textAlign: 'center' }}>45+ available</h6>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6 img-container'>
            <img src={realestate4} alt="Real Estate" className="realestatetypes-img" />
            <div className="middle">
              <div className="realestate-text">Apartments
                <h6 style={{ textAlign: 'center' }}>45+ available</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-7">
            <h4>Get in touch</h4>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput3" className="form-label">Contact Number</label>
              <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Enter your number" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn btn-primary real-search-button" style={{backgroundColor:'#40E0D0',color:'white'}}>Submit</button>
          </div>
          <div className="col-md-5 " style={{ backgroundColor: 'rgb(173 235 230)' }}>
            <h4>Contact us</h4>
            <hr />
            <div className="mt-4">
              <div className="d-flex">
                <GeoAltFill className='mt-1'></GeoAltFill> &nbsp;
                <p>Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <hr />
              <div className="d-flex">
                <PersonLinesFill className='mt-1'></PersonLinesFill>  &nbsp;
                <p>Contact :- 8888888888</p>
              </div>
              <hr />
              <div className="d-flex">
                <EnvelopeFill className='mt-1'></EnvelopeFill>&nbsp;
                <p>Email:- Contact@gmail.com</p>
              </div>
              <hr />
              <div className="d-flex">
                <BrowserChrome className='mt-1'></BrowserChrome> &nbsp;
                <p>Website: www.contact.com</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
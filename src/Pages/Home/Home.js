import React from 'react';
import Styles from "./Home.module.css";
import {
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import Carousel from 'react-bootstrap/Carousel';
import s1 from "./s1.jpg";
import s2 from "./s2.jpg";
import s3 from "./s3.jpg";
import s4 from "./s4.jpg";
import s5 from "./s5.jpg";
import h1 from "./h1.jpg";
import h2 from "./h2.jpg";
import h3 from "./h3.jpg";
import l1 from "./l1.jpg";
import l2 from "./l2.jpg";
import l3 from "./l3.jpg";
import VolImg from "./p1.jpg";

import { FaThumbsUp , FaWpforms , FaMagic } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

function Home() {

  return (
    <>
      <div className={Styles.banner}>
        <div className={Styles.bannertxt}>
          <h1>Saving Animals</h1>
          <h1>Changing Live</h1>
          <p>ADOPT US. WE NEED YOUR HELP. </p>
          <button>View More</button>
        </div>
      </div>
      
      <div className={Styles.carouselContainer}>
    <Carousel fade className={Styles.slider} controls= {false} indicators={false}>
      <Carousel.Item interval={2000}>
        <img
          className={`d-block w-100 ${Styles.silderimg}`}
          src={s1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hi. My Name is Roy. Have a Wonderful Day !</h3>        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={2000}>
        <img
          className={`d-block w-100 ${Styles.silderimg}`}
          src={s2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Hey! Will you guys Adopt me. Btw, Jim here!!</h3>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={2000}>
        <img
          className={`d-block w-100 ${Styles.silderimg}`}
          src={s3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Don't Panic guys. Just a Regular day in the office - Harry</h3>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={2000}>
        <img
          className={`d-block w-100 ${Styles.silderimg}`}
          src={s4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Enjoying my day - Will</h3>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={2000}>
        <img
          className={`d-block w-100 ${Styles.silderimg}`}
          src={s5}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Eat - Sleep - Repeat - My Moto (Jim)</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div>
      <h1 className={Styles.AdoptHead}>Adoption Process</h1>
      <div className={Styles.process}>
        <div className={Styles.processdiv}>
          <FaThumbsUp color='#00bd56' size='2rem'/>
          <h3>Pet Selection</h3>
          <p>Visit our adoption center to find your perfect pet match! Our knowledgeable staff will guide you through the process and provide information on each pet's background. Adopt with confidence and give a deserving animal a loving home today.</p>
        </div>
        <div className={Styles.processdiv}>
          <BsFillPersonFill color='#00bd56' size='2rem'/>
          <h3>Meeting Authority</h3>
          <p>Request a meeting with authorities at our adoption center to discuss important matters regarding our operations or policies. Contact our center to schedule a meeting and address any concerns or suggestions you may have. We value your input and look forward to engaging in productive discussions for the betterment of our organization.</p>
        </div>
        <div className={Styles.processdiv}>
          <FaWpforms color='#00bd56' size='2rem'/>
          <h3>Adoption Form Filling</h3>
          <p>Fill out our adoption form to initiate the process of welcoming a furry companion into your home. Provide necessary information and preferences to help us match you with the perfect pet. Start the journey of adoption and make a positive impact on a deserving animal's life.</p>
        </div>
        <div className={Styles.processdiv}>
          <FaMagic color='#00bd56' size='2rem'/>
          <h3>Bring to new family</h3>
          <p>Bring a new family member home by adopting a pet from our center. Experience the joy of providing a loving and caring environment for a deserving animal. Start a beautiful journey of companionship and create lasting memories together.</p>
        </div>
      </div>
    </div>

    <div className={Styles.parallex1}></div>

    <div id="form" className={Styles.AdoptionForm}>
      <h2>Please select your favourite pet</h2>
      <button>Fill Adoption Form</button>
    </div>

    <div id="gallery" className={Styles.petgallery}>
      <h1>PETS GALLERY</h1>
      <MDBRow>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src={l1}
          className={`w-100 shadow-1-strong rounded mb-4 ${Styles.galimg}`}
          alt='Boat on Calm Water'
        />

        <img
          src={h1}
          className={`w-100 shadow-1-strong rounded mb-4 ${Styles.galimg}`}
          alt='Wintry Mountain Landscape'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={h2}
          className={`w-100 shadow-1-strong rounded mb-4 ${Styles.galimg}`}
          alt='Mountains in the Clouds'
        />

        <img
          src={l2}
          className={`w-100 shadow-1-strong rounded mb-4 ${Styles.galimg}`}
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={l3}
          className={`w-100 shadow-1-strong rounded mb-4 ${Styles.galimg}`}
          alt='Waves at Sea'
        />

        <img
          src={h3}
          className={`w-100 shadow-1-strong rounded mb-4 ${Styles.galimg}`}
          alt='Yosemite National Park'
        />
      </MDBCol>
    </MDBRow>

    </div>
    
    <div className={Styles.valuediv}>
        <div className={Styles.valdiv}>
          <h1>500+</h1>
          <p>Rescued Pets</p>
        </div>
        <div className={Styles.valdiv}>
          <h1>350+</h1>
          <p>Adopted Pets</p>
        </div>
        <div className={Styles.valdiv}>
          <h1>250+</h1>
          <p>Pet Adopters</p>
        </div>
        <div className={Styles.valdiv}>
          <h1>12</h1>
          <p>Shelters / Rescue organizations</p>
        </div>
      </div>

      <div className={Styles.parallex2}></div>

      <div className={Styles.VideoDiv}>
        <h1>Watch this video how they live here</h1>
        <div className={Styles.Video}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nbfWVn9waM8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
        </div>
        
      </div>
      

      <div id="volunteer" className={Styles.Volunteer}>
        <img src={VolImg} alt='' />
        <div className={Styles.vl}>
          <h1>We looking for helping hand</h1>
          <p>Want to help? Become a Volunteer</p>
          <div className={Styles.form}>
            <input type="text" placeholder='Enter Your Name' />
            <input type='email' placeholder='Enter Your Email' />
            <button>Excited</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
import React from 'react';
import Styles from "./DayCare.module.css";
import grooming from "./grooming.png";
import dogfood from "./dogfood.png";
import dogwalking from "./walkjing.png";
import Pricing1 from "./pricing1.jpg";
import Pricing2 from "./pricing2.jpg";
import Pricing3 from "./pricing3.jpg";
import s1 from "./S1.jpg";
import s2 from "./s2.webp";
import s3 from "./s3.jpg";
import s4 from "./s4.jpg";
import s5 from "./s5.jpg";
import s6 from "./s6.jpg";


import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import Package from './Package';



function DayCare() {
  return (
    <>
    <div className={Styles.mainbg}>
      <h2>Highest Quality Care For Pets You'll Love</h2>
    </div>

    <div>
      <h1 className={Styles.servicesheading}>Services We Provide</h1>
        <div className={Styles.services}>
        <div className={Styles.servicediv}>
          <img src={dogfood} className={Styles.peticon}/>
          <h2>Pet Daycare</h2>
          <p>"Trustworthy and loving pet daycare services. We provide a safe and stimulating environment for your furry friends while you're away."</p>
        </div>
        <div className={Styles.servicediv}>
          <img src={dogwalking} className={Styles.peticon} />
          <h2>Pet Walking</h2>
          <p>"Reliable and attentive pet walking services. We ensure your pets get the exercise and attention they need with our experienced and caring walkers."</p>
        </div>
        <div className={Styles.servicediv}>
          <img src={grooming} className={Styles.peticon} />
          <h2>Pet Grooming</h2>
          <p>"Professional and gentle pet grooming services. Our skilled groomers offer a range of services to keep your pets looking and feeling their best, from baths and haircuts to nail trims and ear cleaning."</p>
        </div>
      </div>
    </div>


    <section>
      <h2 className={Styles.galleryheader}>Gallery</h2>
    <div className={Styles.gallery}>
      <div className={Styles.galleryitem}>
        <img className={Styles.galleryimg} src={s1} />
      </div>
      <div className={Styles.galleryitem}>
        <img className={Styles.galleryimg} src={s2} />
      </div>
      <div className={Styles.galleryitem}>
        <img className={Styles.galleryimg} src={s3} />
      </div>
      <div className={Styles.galleryitem}>
        <img className={Styles.galleryimg} src={s4} />
      </div>
      <div className={Styles.galleryitem}>
        <img className={Styles.galleryimg} src={s5} />
      </div>
      <div className={Styles.galleryitem}>
        <img className={Styles.galleryimg} src={s6} />
      </div>
    </div>
    </section>

    <div className={Styles.parallex}></div>


    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className={`mb-4 ${Styles.header}`}>Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
          We are honored and grateful for the kind words shared by our clients in their testimonials, showcasing the exceptional dog care services we offer at our day care.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex align-items-stretch">
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className={`testimonial-card ${Styles.card}`}>
            <div className="avatar mx-auto">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className={`rounded-circle img-fluid ${Styles.revimg}`}
              />
            </div>
            <MDBCardBody>
              <h4 className={`mb-4 ${Styles.name}`}>Maria Smantha</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                "My dog has never been happier since I started using a professional dog sitter. Highly recommended!"
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className={`testimonial-card ${Styles.card}`}>
            <div className="avatar mx-auto">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className={`rounded-circle img-fluid ${Styles.revimg}`}
              />
            </div>
            <MDBCardBody>
              <h4 className={`mb-4 ${Styles.name}`}>Lisa Cudrow</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                "Thanks to the dedicated dog trainer, our furry companion is now well-behaved and a joy to be around."
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className={`testimonial-card ${Styles.card}`}>
            <div className="avatar mx-auto">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                className={`rounded-circle img-fluid ${Styles.revimg}`}

              />
            </div>
            <MDBCardBody>
              <h4 className={`mb-4 ${Styles.name}`}>John Smith</h4>
              <hr />
              <p  className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2"  />
                "The veterinary team provided exceptional care during our dog's health emergency. Grateful for their expertise and compassion."
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <div >
      <h1 className={Styles.packagedivheader}>Affordable Paackages</h1>
      <div className={Styles.packagediv}>
        <Package img={Pricing1}/>
        <Package img={Pricing2}/>
        <Package img={Pricing3}/>
      </div>
    </div>

    
    </>
  )
}

export default DayCare
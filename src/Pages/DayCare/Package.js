import React from 'react';

import Styles from "./DayCare.module.css";

function Package({img}) {
  return (
    <div className={Styles.indivpackage}>
        <img src={img} className={Styles.pricingimg}/>
        <div className={Styles.packagedetails}>
            <h3>Personal</h3>
            <p>49/mos</p>
            <div>
                <p>5 Dog Walk</p>
                <p>3 Vet Visit</p>
                <p>3 Pet Spa</p>
                <p>Free Supports</p>
            </div>
            <button>GET STARTED</button>
        </div>
    </div>
  )
}

export default Package
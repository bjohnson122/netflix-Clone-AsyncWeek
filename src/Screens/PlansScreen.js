import React from "react";
import "./PlansScreen.css";

function PlansScreen() {

  const plans = [
    {
      planId: 1,
      planName: "Premium",
      planDescription: "4K + HDR",
      price: "$19.99",
      currentlyEnrolled: false
    },
    {
      planId: 2,
      planName: "Standard",
      planDescription: "1080p",
      price: "$15.99",
      currentlyEnrolled: false
    },
    {
      planId: 3,
      planName: "Basic",
      planDescription: "720p",
      price: "$12.99",
      currentlyEnrolled: true
    },
  ];
  return (
    <div className="planScreen">

      {plans.map((plan) => {
        return (
          <div className="planScreen__plan">
            <div className="planScreen__info">
              <h5>{plan.planName}</h5>
              <h6>{plan.planDescription}</h6>
              <h6>{plan.price}</h6>
            </div>
            <>{!plan.currentlyEnrolled ?  <button>Subscribe</button> : <h3>Currently Enrolled!</h3>}
             {" "}
            </>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;

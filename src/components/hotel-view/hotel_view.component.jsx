import React from "react";
import hotel1 from "../../img/hotel-1.jpg";
import hotel2 from "../../img/hotel-2.jpg";
import hotel3 from "../../img/hotel-3.jpg";

const HotelView = () => {
  return (
    <div className="hotel-view">
      <div className="gallery">
        <figure className="gallery__item">
          <img className="gallery__photo" src={hotel1} alt="photo of hotel 1" />
        </figure>

        <figure className="gallery__item">
          <img className="gallery__photo" src={hotel2} alt="photo of hotel 2" />
        </figure>

        <figure className="gallery__item">
          <img className="gallery__photo" src={hotel3} alt="photo of hotel 3" />
        </figure>
      </div>

      <div className="overview">
        <h1 className="overview__heading">Hotel Las Palmas</h1>
        <div className="overview__stars"></div>
      </div>

      <div className="overview__location">
        <ion-icon name="location-outline"></ion-icon>
      </div>
    </div>
  );
};

export default HotelView;

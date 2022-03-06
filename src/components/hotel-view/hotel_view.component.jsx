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

        <div className="overview__stars">
          <div className="overview__icon-star">
            <ion-icon name="star-sharp"></ion-icon>
          </div>

          <div className="overview__icon-star">
            <ion-icon name="star-sharp"></ion-icon>
          </div>

          <div className="overview__icon-star">
            <ion-icon name="star-sharp"></ion-icon>
          </div>

          <div className="overview__icon-star">
            <ion-icon name="star-sharp"></ion-icon>
          </div>

          <div className="overview__icon-star">
            <ion-icon name="star-sharp"></ion-icon>
          </div>
        </div>

        <div className="overview__location">
          <div className="overview__icon-location">
            <ion-icon name="location-sharp"></ion-icon>
          </div>
          <button className="btn-inline">Albufeira, Portugal</button>
        </div>

        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-count">429 votes</div>
        </div>
      </div>

      <div className="detail">
        <div className="description">Description</div>
        <div className="user-reviews">User Reviews</div>
      </div>
    </div>
  );
};

export default HotelView;

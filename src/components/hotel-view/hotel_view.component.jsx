import React from "react";
import hotel1 from "../../img/hotel-1.jpg";
import hotel2 from "../../img/hotel-2.jpg";
import hotel3 from "../../img/hotel-3.jpg";
import user1 from "../../img/user-1.jpg";
import user2 from "../../img/user-2.jpg";
import user3 from "../../img/user-3.jpg";
import user4 from "../../img/user-4.jpg";
import user5 from "../../img/user-5.jpg";
import user6 from "../../img/user-6.jpg";

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
        <div className="description">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
            dignissimos debitis ratione sapiente saepe. Accusantium cumque,
            quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>

          <p className="paragraph">
            Accusantium cumque, quas, ut corporis incidunt deserunt quae
            architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>

          <ul className="list">
            <li className="list__item">Close to the beach</li>
            <li className="list__item">Breakfast included</li>
            <li className="list__item">Free airport shuttle</li>
            <li className="list__item">Free Wi-Fi</li>
            <li className="list__item">Air conditioning and heating</li>
            <li className="list__item">Pets allowed</li>
            <li className="list__item">We speak all languages</li>
            <li className="list__item">Perfect for families</li>
          </ul>

          <div className="recommend">
            <p className="recommend__count">
              Lucy and 3 other friends recommend this hotel
            </p>
            <div className="recommend__friends">
              <img className="recommend__photo" src={user3} />
              <img className="recommend__photo" src={user4} />
              <img className="recommend__photo" src={user5} />
              <img className="recommend__photo" src={user6} />
            </div>
          </div>
        </div>

        <div className="user-reviews">
          <figure className="review">
            <blockquote className="review__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi, totam, itaque officia ex.
            </blockquote>
            <figcaption className="review__user">
              <img className="review__photo" src={user1} alt="user 1" />
              <div className="review__user-box">
                <p className="review__user-name">Nick Smith</p>
                <p className="review__user-date">Feb 23rd, 2017</p>
              </div>
              <div className="review__rating">7.8</div>
            </figcaption>
          </figure>

          <figure className="review">
            <blockquote className="review__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi.
            </blockquote>
            <figcaption className="review__user">
              <img className="review__photo" src={user2} alt="user 1" />
              <div className="review__user-box">
                <p className="review__user-name">Mary Thomas</p>
                <p className="review__user-date">Sep 13th, 2017</p>
              </div>
              <div className="review__rating">9.3</div>
            </figcaption>
          </figure>
          <button className="btn-inline">
            Show all <span>&rarr;</span>
          </button>
        </div>
      </div>
      <div className="cta">
        <h2 className="cta__book-now">
          Good news! We have 4 free rooms for your selected dates!
        </h2>
        <button className="btn">
          <span className="btn__visible">Book Now</span>
          <span className="btn__invisible">Only 4 rooms left</span>
        </button>
      </div>
    </div>
  );
};

export default HotelView;

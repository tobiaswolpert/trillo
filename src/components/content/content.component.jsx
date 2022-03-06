import React from "react";
import Sidebar from "../sidebar/sidebar.component";
import HotelView from "../hotel-view/hotel_view.component";

const Content = () => {
  return (
    <div className="content">
      <Sidebar />
      <HotelView />
    </div>
  );
};

export default Content;

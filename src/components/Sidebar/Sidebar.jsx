import React from "react";
import Sheets from "../../Props/Sheets";
const Sidebar = () => {
  return (
    <div>
      <div className="flex justify-center " data-aos="fade-right"
                data-aos-duration="1500">
        <Sheets
          image="https://i.pinimg.com/564x/64/d8/57/64d8578bc6bb9f9e8e05caf2f2a1da4c.jpg"
          title="Album Grooves: Dive into the Sounds of Music"
          paragraph="Explore a world of sound with our in-depth album reviews and recommendations. From classic records to the latest releases, our music blog dives deep into the world of albums, helping you find your next favorite soundtrack."
        />
      </div>
    </div>
  );
};

export default Sidebar;

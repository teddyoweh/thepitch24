"use client";
import Image from "next/image";
import "../styles/landing.scss";
import "../styles/product_page.scss";
import { useEffect, useState } from "react";

export default function Home() {
  // const catergories = [
  //   'Electronics',
  //   'Fashion',
  //   'Food',
  //   'Health & Beauty',
  //   'Services',

  // ]
  function getGoogleDriveVideoSrc(driveLink) {
    // Regular expression to match Google Drive video links
    const regex =
      /(?:https?:\/\/)?(?:drive\.google\.com\/(?:file\/d\/|open\?id=)|www\.googledrive\.com\/(?:file\/d\/|open\?id=|uc\?id=))([^&\n#?]+)/g;

    // Extract file ID from the provided link
    const match = regex.exec(driveLink);
    if (!match) {
      console.error("Invalid Google Drive link.");
      return null;
    }

    const fileId = match[1];

    // Construct direct link to fetch the video
    const videoSrc = `https://drive.google.com/uc?id=${fileId}&export=download`;

    return videoSrc;
  }
  const videos = [
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305755/Content_Teddy_O/Black_Forest_Cake_shorts_yfzejm.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305759/Content_Teddy_O/Hybrid_Lash_Extensions_cvv7pn.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305757/Content_Teddy_O/Sleek_Frontal_Ponytail_On_Protective_Cap_Invisible_Lace_100_Straight_Human_Hair_elfinhair_lvs0uf.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305759/Content_Teddy_O/Transformation_barber_haircut_faded_tranformation_afro_ykeydd.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305757/Content_Teddy_O/This_is_one_of_my_best_cakes_shorts_dla2o7.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305758/Content_Teddy_O/Step_By_Step_Back_Taper_Tutorial_360silk_haircut_barber_haircuttutorial_howtotaper_r5lhoq.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305757/Content_Teddy_O/Learn_Stitch_Braids_421_jc8jwn.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305755/Content_Teddy_O/Black_Forest_Cake_shorts_yfzejm.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305758/Content_Teddy_O/Men_s_Stitch_Braids_braids_mensbraids_stitchbraids_wuyxio.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305757/Content_Teddy_O/Sleek_Frontal_Ponytail_On_Protective_Cap_Invisible_Lace_100_Straight_Human_Hair_elfinhair_lvs0uf.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305755/Content_Teddy_O/Black_Forest_Cake_shorts_yfzejm.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305759/Content_Teddy_O/Hybrid_Lash_Extensions_cvv7pn.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305757/Content_Teddy_O/Sleek_Frontal_Ponytail_On_Protective_Cap_Invisible_Lace_100_Straight_Human_Hair_elfinhair_lvs0uf.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305759/Content_Teddy_O/Transformation_barber_haircut_faded_tranformation_afro_ykeydd.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305757/Content_Teddy_O/This_is_one_of_my_best_cakes_shorts_dla2o7.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305758/Content_Teddy_O/Step_By_Step_Back_Taper_Tutorial_360silk_haircut_barber_haircuttutorial_howtotaper_r5lhoq.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305757/Content_Teddy_O/Learn_Stitch_Braids_421_jc8jwn.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305755/Content_Teddy_O/Black_Forest_Cake_shorts_yfzejm.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305758/Content_Teddy_O/Men_s_Stitch_Braids_braids_mensbraids_stitchbraids_wuyxio.mp4",
    "https://res.cloudinary.com/ddaxprhmz/video/upload/v1710305757/Content_Teddy_O/Sleek_Frontal_Ponytail_On_Protective_Cap_Invisible_Lace_100_Straight_Human_Hair_elfinhair_lvs0uf.mp4",
  ];
  const catergories = [
    {
      label: "Electronics",
      icon: "bx bx-devices",
    },
    {
      label: "Fashion",
      icon: "bx bx-shopping-bag",
    },
    {
      label: "Restaurants",
      icon: "bx bx-bowl-hot",
    },
    {
      label: "Beauty",
      icon: "bx bx-heart",
    },

    {
      label: "Products",
      icon: "bx bx-package",
    },
    {
      label: "Fitness",
      icon: "bx bx-dumbbell",
    },
    {
      label: "Services",
      icon: "bx bx-male",
    },
  ];
  const [isSearchBoxAbsolute, setIsSearchBoxAbsolute] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = document
        .querySelector(".hero")
        .getBoundingClientRect().bottom;
      setIsSearchBoxAbsolute(heroBottom <= 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="landing-page">
      <div className="sidebar">
        <div className="top-sidebar"></div>
      </div>
      <div className="product_page">
        <div className="left">
          <div className="product-overlay">
            <video
              controlsList="nodownload"
              // control
              //make it play on click and if playing then pause
              onClick={(e) => {
                e.preventDefault();
                e.target.paused ? e.target.play() : e.target.pause();
              }}
              // controls

              src={videos[0]}
            />
          </div>
        </div>
        <div className="right">
          <div className="top">
            <span>Teddy's Bakery</span>
            <label htmlFor="">Black Forest Chocalate Cake - 100% Fresh </label>
          </div>
          <div className="price">
            <span>$1,000 - $5,000</span>
          </div>
          <div className="book-div">
            <a href="">Book now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

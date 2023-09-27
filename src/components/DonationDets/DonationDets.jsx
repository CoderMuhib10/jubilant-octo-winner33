import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

const Details = () => {
  const [dontaions, setDonations] = useState([]);
  const { id } = useParams();

  const selectdDonation = dontaions?.find((donation) => donation.id == id);
  const {
    image,
    title,
    catagory,
    price,
    card_bg_color,
    category_bg_color,
    description,
    category,
    text_button_bg_color,
  } = selectdDonation || {};
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  const background = {
    background: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const handleDonate = () => {
    const donationArray = [];
    const donationItem = JSON.parse(localStorage.getItem("donation"));
    if (!donationItem) {
      donationArray.push(selectdDonation);
      localStorage.setItem("donation", JSON.stringify(donationArray));
      toast.success("Successfully Donated!");
    } else {
      const isExist = donationItem.find((donate) => (donate.id = id));

      if (!isExist) {
        donationArray.push(...donationItem, selectdDonation);
        localStorage.setItem("donation", JSON.stringify(donationArray));
        toast.success("Successfully Donated!");
      } else {
        toast.error("You've already Donated");
      }
    }
  };

  return (
    <>
      <section className="max-w-7xl mx-auto mt-10">
        <div
          className="h-[700px] relative rounded-lg object-cover"
          style={image ? background : {}}
        >
          <div className="w-full h-[130px] bg-[#0b0b0b80] absolute bottom-0 rounded-b-lg flex items-center">
            <button
              className="py-4 px-5 text-white font-semibold text-xl ml-10 rounded"
              style={{ background: text_button_bg_color }}
              onClick={handleDonate}
            >
              Donate ${price}
            </button>
            <Toaster></Toaster>
          </div>
        </div>
        {/* infodiv */}
        <div className="mt-12 w-full px-4 lg:px-0">
          <h1 className="text-4xl font-bold text-[#0b0b0b]">{title}</h1>
          <p className="py-8 text-[#0b0b0bb3] text-[16px] font-normal text-justify leading-7">
            {description}
          </p>
        </div>
      </section>
    </>
  );
};

export default Details;

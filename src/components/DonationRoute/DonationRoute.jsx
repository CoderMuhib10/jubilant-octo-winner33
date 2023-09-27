import { useEffect, useState } from "react";
import DonationCard from "../Donations/DonationCard/DonationCard";
const DonationRoute = () => {
  const [donate, setDonate] = useState([]);
  const [noFound, setNoFound] = useState(false);
  useEffect(() => {
    const DonateItems = JSON.parse(localStorage.getItem("donation"));

    if (DonateItems) {
      setDonate(DonateItems);
    } else {
      setNoFound("You Haven't Donated Yet!! ");
    }
  }, []);

  return (
    <div>
      {noFound ? (
        <div>
          <img
            className="max-w-full mx-auto"
            src="https://i.ibb.co/JRdZqqN/3-D-Mascot-heart-love-romance-valentine-relationships-unhappy-sad-upset-heartbroken-break-up-divorce.webp"
          />
          <p className="text-4xl font-bold text-center">{noFound}</p>
        </div>
      ) : (
        <div className="max-w-5xl mt-9 mx-auto grid grid-cols-2">
          {donate.map((donating) => (
            <DonationCard key={donating.id} donating={donating}></DonationCard>
            /* eikhane DonationCard sara onno kono component use korte gele error dekhay
            arekta problemto janoi localstorage a sudhu first er ta add kore */
          ))}
        </div>
      )}
    </div>
  );
};

export default DonationRoute;

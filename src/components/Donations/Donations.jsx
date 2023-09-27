import DonationCard from "./DonationCard/DonationCard";

const Donations = ({ data }) => {
  return (
    <>
      <div className="grid my-10 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.map((donation) => (
          <DonationCard key={donation.id} donating={donation}></DonationCard>
        ))}
      </div>
    </>
  );
};

export default Donations;

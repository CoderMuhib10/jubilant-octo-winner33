const mydonation = () => {
  const getDonation = localStorage.getItem("donation");
  if (getDonation) {
    return JSON.parse(getDonation);
  } else {
    return [];
  }
};
const findDonation = (id) => {
  const donations = mydonation();
  const isExist = donations.find((donationId) => donationId == id);

  if (!isExist) {
    donations.push(id);
    localStorage.setItem("donation", JSON.stringify(donations));
  }
};

export { mydonation, findDonation };

import { useLoaderData } from "react-router-dom";
import Donations from "../Donations/Donations";

// import useGetPhones from "../../hook/useGetPhones";
import Banner from "../Banner/Banner";
export default function Home() {
  const data = useLoaderData();
  console.log(data);
  // const [phones] = useGetPhones();
  return (
    <>
      <Banner></Banner>

      <div className="lg:max-w-6xl md:max-w-2xl max-w-xs md:mx-auto lg:mx-auto mx-auto">

        <Donations data={data}></Donations>
      </div>
    </>
  );
}

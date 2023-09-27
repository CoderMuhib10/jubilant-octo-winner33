const Banner = () => {
  return (
    <div>
      <section
        className="banner w-full h-[600px] flex justify-center bg-center items-center "
        style={{
          backgroundImage: `url(https://i.ibb.co/x1NQktZ/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)`,
          opacity: 0.2,
        }}
      ></section>
      <div className="flex absolute top-72 left-72 flex-col justify-center items-center mx-auto ">
        <h1 className="text-center text-2xl md:text-5xl font-bold not-italic text-[#0B0B0B]">
          I Grow By Helping People In Need
        </h1>
        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:w-[582px] mt-10">
          <input
            type="text"
            placeholder="Search here..."
            className="rounded-lg md:w-[470px] h-12 border border-[#DEDEDE] outline-none md:rounded-none md:rounded-l-lg px-7"
          />
          <input
            type="submit"
            className="w-28 h-12 rounded-lg lg:w-[112px] bg-red-500 cursor-pointer text-white md:rounded-none md:rounded-r-lg"
            value={"Search"}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

import DisplayAstroCards from "@/components/AsteroidData/DisplayAstroCards";
import Home from "@/components/Home";

const index = () => {
  return (
    <>
      <div className="grid place-items-center gap-16">
        <Home />
        <DisplayAstroCards />
      </div>
    </>
  );
};

export default index;

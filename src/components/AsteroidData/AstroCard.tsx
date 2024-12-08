import { Asteroid } from "@/utils/types";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const AstroCard = ({ asteroid }: { asteroid: Asteroid }) => {
  return (
    <>
      <Card className="w-full shadow-none border flex flex-col items-stretch">
        <CardHeader>
          <CardTitle className="text-2xl tracking-wider">
            {asteroid.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="font-bold space-y-3">
          <p className="">
            Absolute magnitude - {asteroid.absolute_magnitude_h}
          </p>
          <p className="">
            Close approach -{" "}
            {asteroid.close_approach_data[0].close_approach_date_full}
          </p>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button className="w-full uppercase">Explore</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default AstroCard;

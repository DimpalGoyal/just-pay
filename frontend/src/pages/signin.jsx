import { Appbar } from "../components/Appbar";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { SubHeading } from "../components/SubHeading";

export function Signin() {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-30">
            <div className="border-1 py-20 px-15 rounded-2xl shadow-xl">
          <Heading label={"Sign In"} />
          <SubHeading label={"enter account credentials to login"} />
          <Inputbox label={"username"} placeHd={"name@gmail.com"} />
          <Inputbox label={"password"} placeHd={"....."} />
          <Button label={"sign up"} />

        </div>
      </div>
    </div>
  );
}

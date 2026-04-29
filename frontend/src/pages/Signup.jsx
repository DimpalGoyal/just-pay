import { Inputbox } from "../components/Inputbox";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { Appbar } from "../components/Appbar";

export function Signup() {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-10">
        <div className="px-15 py-15 border-1 rounded-2xl shadow-xl">
          <Heading label={"Sign Up"} />
          <SubHeading label={"enter details to create a account"} />
          <Inputbox label={"username"} placeHd={"name@gmail.com"} />
          <Inputbox label={"firstname"} placeHd={"john"} />
          <Inputbox label={"lastname"} placeHd={"doe"} />
          <Inputbox label={"password"} placeHd={"....."} />
          <Inputbox label={"confirm password"} placeHd={"....."} />
          <div>
          <Button label={"sign up"} />
          </div>
        </div>
      </div>
    </div>
  );
}

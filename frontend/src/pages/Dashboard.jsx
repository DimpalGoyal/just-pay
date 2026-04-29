import { Appbar } from "../components/Appbar";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";

export function Dashboard() {
  return (
    <div>
      <Appbar />
      <Heading label={"JUST PAY"} />
      <SubHeading label={"make your payments faster with the same safety"} />
      <div className="flex justify-around mx-50 pt-10">
        <div className="border-1 p-30 rounded-2xl shadow-md">div1</div>
        <div className="border-1 p-30 rounded-2xl">div1</div>
        <div className="border-1 p-30 rounded-2xl">div1</div>
      </div>
    </div>
  );
}

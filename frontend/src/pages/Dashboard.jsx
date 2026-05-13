import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Users } from "../components/Users";

export function Dashboard() {


  return (
    <div>
      <Appbar />
      <div className="mx-50 pt-10">
      <Users/>
      </div>
    </div>
  );
}

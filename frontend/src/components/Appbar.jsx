import { Link } from "react-router-dom";

export function Appbar() {
  return (
    <div className="flex justify-between mx-70 px-15 py-3 shadow-md rounded-xl">
      <div>
        <Link to="/dashboard">dashboard</Link>
      </div>
      <div>
          <Link to="/signup" className="pr-10">signup</Link>
          <Link to="/signin">signin</Link>
      </div>
    </div>
  );
}

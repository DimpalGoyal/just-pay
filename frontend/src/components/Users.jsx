import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Inputbox } from "./Inputbox";
import axios from "axios";
import { Heading } from "./Heading";
import { useNavigate } from "react-router-dom";


export function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  // debouncing
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/user/bulk?filter=" + filter)
      .then((Response) => {
        setUsers(Response.data.user);
      });
  }, [filter]);
  return (
    <>
      <div className="text-2xl font-bold">
        <h1>your balance rs 1,000</h1>
      </div>
      <Inputbox
        label={"users"}
        placeHd={"search users"}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </>
  );
}

function User({ user }) {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex justify-between mt-6">
        <div className="flex">
          <div className="rounded-full bg-amber-50  px-5 py-3 border text-2xl font-semibold ">
            {user.firstName[0]}
          </div>
          <div className="text-xl ml-3 mt-3">
            {user.firstName} {user.lastName}
          </div>
        </div>
        <div className="mt-2">
          <button className="border px-5 py-2 rounded-md bg-black text-white "
            onClick={()=>{
                navigate('/send')
            }} 
          >
            send money
          </button>
        </div>
      </div>
    </div>
  );
}

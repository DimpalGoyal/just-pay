import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate()
  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-30">
        <div className="border py-20 px-15 rounded-2xl shadow-xl">
          <Heading label={"Sign In"} />
          <SubHeading label={"enter account credentials to login"} />
          <Inputbox
            label={"username"}
            placeHd={"name@gmail.com"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Inputbox
            label={"password"}
            placeHd={"....."}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <Button
            label={"sign up"}
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:8000/api/v1/user/signin",
                {
                  username,
                  password,
                },
              );
              console.log(response);
              localStorage.setItem('token',response.data.token)
              navigate('/dashboard')
            }}
          />
        </div>
      </div>
    </div>
  );
}

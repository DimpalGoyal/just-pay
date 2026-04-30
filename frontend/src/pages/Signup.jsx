import axios from "axios";
import { Inputbox } from "../components/Inputbox";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { Appbar } from "../components/Appbar";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-10">
        <div className="px-15 py-15 border rounded-2xl shadow-xl">
          <div className="text-center">
            <Heading label={"Sign Up"} />
            <SubHeading label={"enter details to create a account"} />
          </div>
          <Inputbox
            label={"username"}
            placeHd={"name@gmail.com"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Inputbox
            label={"firstname"}
            placeHd={"john"}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <Inputbox
            label={"lastname"}
            placeHd={"doe"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <Inputbox
            label={"password"}
            placeHd={"....."}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div>
            <Button
              label={"sign up"}
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:8000/api/v1/user/signup",
                  {
                    username,
                    firstName,
                    lastName,
                    password,
                  },
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

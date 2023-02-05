import React from "react";
import UserInfor from "./UserInfor";
type Props = {};

export interface I_userData {
  name: string;
  email: string;
}

let data: I_userData = {
  name: "DaoVanChau",
  email: "daovanchau72834@gmail.com",
};

export default function DemoProps({}: Props) {
  return (
    <div>
      <h1 className=" w-full h-full bg-red-600">DemoProps</h1>
      <UserInfor user={data} />
    </div>
  );
}

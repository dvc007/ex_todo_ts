import React from "react";
import { I_userData } from "./DemoProps";

interface I_userInfor {
  user: I_userData;
}
export default function UserInfor({ user }: I_userInfor) {
  return (
    <div>
      <h1>Thong tin</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

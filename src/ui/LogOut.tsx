"use client";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import Cookies from "js-cookie";

const logOut = () => {
  Cookies.remove("authToken");
};

function LogOut() {
  return (
    <Link onClick={logOut} href={"/login"}>
      <LogOutIcon />
    </Link>
  );
}

export default LogOut;

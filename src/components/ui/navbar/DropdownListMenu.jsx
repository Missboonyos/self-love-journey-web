import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";

//rafce
import React from "react";
import UserIcon from "./UserIcon";
import { Button } from "../button";
import { links } from "@/utils/links";
import { Link } from "react-router";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import SignOutLink from "./SignOutLink";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      {/* Trigger = pressed button */}
      {/* asChild = When rendering in DOM, element DropdownMenuTrigger won't be rendered */}
      {/* But the children elements will be rendered */}
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <AlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {links.map((item, index) => {
          //code body JavaScript
          //return only 1 element
          // console.log(item.href)
          return (
            <DropdownMenuItem key={index}>
              <Link to={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />
        {/* mode=modal: after click SignIn, it won't be redirected to the page of sign-in. */}
        {/* the sign in modal will be poped up instead */}
        {/* In case of not-yet-login */}
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button>Login</button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        {/* In case of already-login  */}
        <SignedIn>
          <DropdownMenuItem>
            <UserButton />
            <SignOutButton />
            {/* <SignOutLink /> */}
          </DropdownMenuItem>
        </SignedIn>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;

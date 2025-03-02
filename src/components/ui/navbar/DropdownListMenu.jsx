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

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
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
                //code body javaScript
                //return only 1 element
                // console.log(item.href)
                return (
                    <DropdownMenuItem key={index}>
                        <Link to={item.href}>{item.label}</Link>                        
                </DropdownMenuItem>
                )
            })
        }

       
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;

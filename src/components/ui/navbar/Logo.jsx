//rafce
import React from "react";
import { Button } from "../button";
import { Link } from "react-router";

const Logo = () => {
  return (
    //button จะไม่ render ตัวเอง แต่จะใช้ความสามารถของ Child
    <Button asChild>
      <Link to="/">Logo </Link>
    </Button>
  );
};

export default Logo;

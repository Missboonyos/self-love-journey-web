//rafce
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const FormInputs = () => {
  return (
    
      <div>
        <Label>Menu</Label>
        <Input
        {...register("menu")} 
        type="text" placeholder="menu" />
      </div>
    
  );
};

export default FormInputs;

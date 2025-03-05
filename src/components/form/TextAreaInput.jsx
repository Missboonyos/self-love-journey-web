//rafce
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

// This is to receive props: register (destructuring) from Restaurant.jsx
const TextAreaInput = ({ register, name, type, placeholder }) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className='capitalize'>{name}</Label>
      <Textarea {...register(name)} 
      rows = {5}
      type={type} placeholder={placeholder} />
    </div>
  );
};

export default TextAreaInput;


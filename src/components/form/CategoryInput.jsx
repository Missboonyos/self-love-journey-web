//rafce
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { categories } from "@/utils/categories";

const CategoryInput = ({ name, register, setValue }) => {
  // JavaScript
  return (
    <div className="mb-2">
      <input {...register(name)} />

      <Label className="capitalize">{name}</Label>
      <Select onValueChange={(value) => setValue(name, value)} required>
        <SelectTrigger>
          <SelectValue placeholder="Please Select Category" />
        </SelectTrigger>

        <SelectContent>
          {categories.map((item) => {
            // console.log(item.label);
            //return only 1 element
            return (
              <SelectItem key={item.label} value={item.label}>
                <span className="flex item-center gap-4">
                  <item.icon />
                  <p className="capitalize">{item.label}</p>
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CategoryInput;

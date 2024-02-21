'use client'
import { Select, Option } from "@material-tailwind/react";
 
export function Dropdown() {
  return (
    <div className="w-72">
      <Select label="Selecione o filtro" placeholder={'opções de filtro'}>
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
      </Select>
    </div>
  );
}
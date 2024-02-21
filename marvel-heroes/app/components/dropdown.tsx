'use client'
import { Select, Option } from "@material-tailwind/react";
 
export function Dropdown() {
  return (
    <div className="w-72">
      <Select label="Selecione o filtro" placeholder={'opções de filtro'}>
        <a href="/"><Option index={1} >Ordenar de: a-z</Option></a>
        <Option index={2}>Ordenar de: z-a</Option>
        <Option index={3}>Material Tailwind Vue</Option>
      </Select>
    </div>
  );
}
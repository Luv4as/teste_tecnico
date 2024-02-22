'use client'

import { Select, Option } from "@material-tailwind/react";

export function Dropdown() {

  return (
    <div className="w-72">
      <Select  
      label="Selecione o filtro" 
      placeholder={'opções de filtro'}>
        <a href="/"><Option index={1} >Ordenar de: a-z</Option></a>
        <a href="/nameDesc"><Option index={2}>Ordenar de: z-a</Option></a>
        <a href="/lastModified"><Option index={3}>Modificado recentemente</Option></a>
      </Select>
    </div>
  );
}
import React, { FC } from "react";
import { Character } from "@/types/marvels";
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter} from "@material-tailwind/react";

interface ModalProps {
  character: Character
}
 
export const ModalBt:FC<ModalProps> = ({ character }) => {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <div>
      <Button placeholder={'Botão de detalhes'} onClick={handleOpen} variant="filled" color="deep-orange" className=" outline-none font-roboto">
        Detalhes
      </Button>
      <Dialog placeholder={'Modal'} open={open} handler={handleOpen}>
        <DialogHeader placeholder={'Titulo do Modal'}>{character.name}</DialogHeader>
        <DialogBody placeholder={'Mensagem completa do modal'} className="flex flex-col justify-center items-center">
          {character.description}
          <div className="mt-5">
            <ul className="list-disc">
              <li className="">
                N° of comics this character is featured: {character.comics.available}
              </li>
              <li className="">
                N° of stories this character is featured: {character.stories.available}
              </li>
              <li className="">
                N° of events where this character appeard in: {character.events.available}
              </li>
            </ul>
          </div>
          
        </DialogBody>
        <DialogFooter placeholder={'Footer do Modal'}>
          <Button
            placeholder={'Botão de voltar'}
            variant="outlined"
            color="red"
            onClick={handleOpen}
            className="mr-1 font-roboto"
          >
            <span>Voltar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
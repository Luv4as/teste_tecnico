import React, { FC } from "react";
import { Character } from "@/types/marvels";
import Image from "next/image";
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
        <DialogBody placeholder={'Mensagem completa do modal'}>
          {character.description}
          <div>
            <p className="mt-5">Comics in witch they appear: {character.comics.available}</p>
            {/* <Image alt="{comic.title}" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}></Image> */}
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
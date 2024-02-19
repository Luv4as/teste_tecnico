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
      <Button placeholder={'Botão de detalhes'} onClick={handleOpen} variant="filled">
        Detalhes
      </Button>
      <Dialog placeholder={'Modal'} open={open} handler={handleOpen}>
        <DialogHeader placeholder={'Titulo do Modal'}>{character.name}</DialogHeader>
        <DialogBody placeholder={'Mensagem completa do modal'}>
          {character.description}
        </DialogBody>
        <DialogFooter placeholder={'Footer do Modal'}>
          <Button
            placeholder={'Botão de voltar'}
            variant="outlined"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Voltar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
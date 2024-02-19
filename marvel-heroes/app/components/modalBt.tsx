import React from "react";
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter} from "@material-tailwind/react";
 
export function ModalBt() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <div>
      <Button placeholder={'Botão de detalhes'} onClick={handleOpen} variant="filled">
        Detalhes
      </Button>
      <Dialog placeholder={'Modal'} open={open} handler={handleOpen}>
        <DialogHeader placeholder={'Titulo do Modal'}>Its a simple dialog.</DialogHeader>
        <DialogBody placeholder={'Mensagem completa do modal'}>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
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
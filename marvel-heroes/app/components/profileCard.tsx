'use client'
import { Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { ModalBt } from "./modalBt";
import { Character } from "@/types/marvels";
import { FC } from "react";

interface ProfileCardProps{
  character: Character
}
   
  export const ProfileCard: FC<ProfileCardProps>= ({ character }) => {
    // console.log(character)
    return (
      <Card className="w-96" placeholder={'card de infos do personagem'}>
        <CardHeader floated={false} className="h-80" placeholder={'Imagem do personagem'}>
          <Image width={500} height={500} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="{character.name}"></Image>
        </CardHeader>
        <CardBody placeholder={'corpo do card'} className="text-center">
          <Typography placeholder={'Nome do Personagem'} variant="h4" color="blue-gray" className="mb-2 font-roboto font-semibold">
            {character.name}
          </Typography>
        </CardBody>
        <CardFooter placeholder={'footer'} className="flex justify-center gap-7 pt-2">
          <ModalBt character={character} ></ModalBt>
        </CardFooter>
      </Card>
    );
  }
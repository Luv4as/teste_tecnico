'use client'
import { Card, CardBody, CardFooter, CardHeader, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import { ModalBt } from "./modalBt";
   
  export function ProfileCard() {
    return (
      <Card className="w-96" placeholder={'card de infos do personagem'}>
        <CardHeader floated={false} className="h-80" placeholder={'Imagem do personagem'}>
          <Image src={""} alt="Foto do personagem"></Image>
        </CardHeader>
        <CardBody placeholder={'corpo do card'} className="text-center">
          <Typography placeholder={'Nome do Personagem'} variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography placeholder={'Descrição'} color="blue-gray" className="font-medium" >
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter placeholder={'footer'} className="flex justify-center gap-7 pt-2">
          <ModalBt></ModalBt>
        </CardFooter>
      </Card>
    );
  }
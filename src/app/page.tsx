"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center p-10 gap-8 w-screen h-screen">
      <Button onClick={() => console.log("FJKASHJF KWLEJFKJASHFJKS")}>
        Requisição de criação
      </Button>
      <Button>Requisição de busca</Button>
      <Button>Requisição de atualização</Button>
      <Button>Requisição de exclusão</Button>
    </div>
  );
}

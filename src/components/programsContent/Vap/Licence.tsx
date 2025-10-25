import React from "react"
import type { ProgramsStructure } from "@/drizzle/schema";
import Image from "next/image";
import Link from "next/link";

type Props = {
  prop: ProgramsStructure;
};

export default function Licence({ prop }: Props) {
  console.log("VAE Licence content :", prop)
  return (
    <div>VAE licence - {prop.name}</div>
  )
}

import Image from "next/image";
import { Inter } from "next/font/google";
import { Alert } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Alert>A simple alert for showing message.</Alert>;
}

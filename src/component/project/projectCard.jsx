import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
import { AiFillGithub } from "react-icons/ai";
   
  export default function ProjectCard({data}) {
    return (
      <Card className="Satisfy h-[310px] ml-7    bg-gray-900 text-white flex gap-1 w-60 border-2 border-indigo-600 p-2 rounded-2xl ">
        <div color="blue-gray" className="relative workSans ">
          <img src={data.image}  alt="img-blur-shadow" className="h-32 rounded-t-lg" layout="fill" />
        </div>
        <div>
          <div  color="blue-gray" className="mb-2  font-semibold">
            {data.name}
          </div>
          <div className="line-clamp-3 openSans text-sm">
           {data.desc}
          </div>
        </div>
        <div className="pt-2 flex justify-between">
          <a className="bg-gradient-to-r text-lg md:text-base from-indigo-500 to-cyan-700 px-4 py-1  rounded-lg" href={data.link}>View Project</a>
          <a href={data.gitHubLink}>
            <AiFillGithub className="text-3xl"/> 
            </a>
        </div>
      </Card>
    );
  }
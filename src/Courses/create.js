import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const result = await prisma.courses.create({
        data:{
            nome: "Curso de node js",
            duration: 200,
            description:"Curso de backend com node.js",

        },
    });

    console.log(result);
}

main();
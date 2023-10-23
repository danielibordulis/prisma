import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(id){

    const result = await prisma.courses.delete({
        where: {
            id: id,
        },
      
});


    console.log(result)
}






main('88d4149b-cd1c-49d0-9c79-a8878e4d186d');
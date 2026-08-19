import app from "./app";
import config from "./config";
import { Role } from "./generated/prisma/enums";
import { prisma } from "./lib/prisma";
import bcrypt from "bcrypt";

const PORT = config.port;

async function createAdmin() {
    const admin = await prisma.user.findUnique({
        where: {
            email: "admin@rentnest.com"
        }
    });

    if (admin) {
        return;
    }

    const hashedPassword = await bcrypt.hash(
        "admin123",
        Number(config.bcrypt_salt_round)
    );

    await prisma.user.create({
        data: {
            name: "Admin",
            email: "admin@rentnest.com",
            password: hashedPassword,
            role: Role.ADMIN,
            status: "ACTIVE"
        }
    });

    console.log("Initial admin created successfully.");
}

async function main() {
    try {
        await prisma.$connect();

        console.log("Connected to the database successfully.");

        await createAdmin();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
        await prisma.$disconnect();
        process.exit(1);
    }
}

main();
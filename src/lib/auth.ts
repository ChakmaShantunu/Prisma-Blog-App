import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use true for port 465, false for port 587
    auth: {
        user: process.env.APP_USER,
        pass: process.env.APP_PASS,
    },
});

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),

    trustedOrigins: [process.env.APP_URL!],
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: "USER",
                required: false
            },
            phone: {
                type: "string",
                required: false
            },
            status: {
                type: "string",
                defaultValue: "ACTIVE",
                required: false
            }
        }
    },
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
        requireEmailVerification: true
    },
    emailVerification: {
        sendVerificationEmail: async ({ user, url, token }, request) => {
            try {
                const info = await transporter.sendMail({
                    from: '"Prisma Blog" <chakmashantunu.web@gmail.com>',
                    to: "sunghajung0192581@gmail.com",
                    subject: "Hello ✔",
                    text: "Hello world?",
                    html: "<b>Hello world?</b>",
                });

                console.log("Email sent:", info.messageId);
            } catch (error) {
                console.error("Email send failed:", error);
            }

        },
    }
});
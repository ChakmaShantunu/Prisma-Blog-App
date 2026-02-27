import { Post } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createPost = async (data: Omit<Post, "id" | "createdAt" | "updatedAt" | "authorId">, userId: string) => {
    const result = await prisma.post.create({
        data: {
            ...data,
            authorId: userId
        }
    })
    return result;
}

const getAllPost = async (payload: { search?: string }) => {
    const { search } = payload;

    const result = await prisma.post.findMany({
        where: {
            ...(search && {
                title: {
                    contains: search,
                    mode: "insensitive",
                },
            }),
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    return result;
};

export const postService = {
    createPost,
    getAllPost
}
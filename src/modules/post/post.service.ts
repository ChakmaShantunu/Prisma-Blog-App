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

    const posts = await prisma.post.findMany({
        where: {
            ...(search && {
                OR: [
                    {
                        title: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                    {
                        content: {
                            contains: search,
                            mode: "insensitive"
                        }
                    },
                    {
                        tags: {
                            has: search
                        }
                    }
                ]
            }),
        },
        orderBy: {
            createdAt: "desc"
        },
        skip: 0,
        take: 20
    });

    return {
        total: posts.length,
        posts
    };
};

export const postService = {
    createPost,
    getAllPost
}
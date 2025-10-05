"use server";

import { prisma } from "@/lib/prisma";
import { getDbUserId } from "./user.action";
import { revalidatePath } from "next/cache";

export const createPost = async (content: string, imageUrl: string) => {
  try {
    const userId = await getDbUserId();
    if (!userId) return {success: false}

    const post = await prisma.post.create({
      data: {
        content,
        image: imageUrl,
        authorId: userId,
      },
    });

    revalidatePath("/");

    return { success: true, post };
  } catch (error) {
    console.log("Failed to create post:", error);
    return { success: false, error: "Failed to create post" };
  }
};


export const getPosts = async () => {
    try {
        const posts = await prisma.post.findMany({
            orderBy: {
                createdAt: "desc",
            },
            include: {
                author: {
                    select: {
                        name: true,
                        image: true,
                        username: true
                    }
                },
                comments: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                username: true,
                                image: true,
                                name: true
                            }
                        }
                    },
                    orderBy: {
                        createdAt: "asc"
                    }
                },
                likes: {
                    select: {
                        userId: true
                    }
                },
                _count: {
                    select: {
                        likes: true
                    }
                }
            }
        })

     

        return posts
    } catch (error) {
        console.log("Error getting post", error)
        return []
    }
}
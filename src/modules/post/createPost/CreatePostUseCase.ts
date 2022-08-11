import { prisma } from "../../../database/prismaClient";

interface ICreatePost {
  id_owner: string;
  content: string;
  link: string;
  tags: string[];
}

export class CreatePostUseCase {
  async execute({ id_owner, content, link, tags }: ICreatePost) {
    const posts = await prisma.posts.create({
      data: {
        id_owner,
        content,
        link,
        tags,
        likes_count: 0,
      }
    });

    return posts;
  }
}
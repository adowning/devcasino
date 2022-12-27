/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Game, Session, User } from "@prisma/client";

export class GameServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GameFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GameFindManyArgs>
  ): Promise<number> {
    return this.prisma.game.count(args);
  }

  async findMany<T extends Prisma.GameFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GameFindManyArgs>
  ): Promise<Game[]> {
    return this.prisma.game.findMany(args);
  }
  async findOne<T extends Prisma.GameFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GameFindUniqueArgs>
  ): Promise<Game | null> {
    return this.prisma.game.findUnique(args);
  }
  async create<T extends Prisma.GameCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GameCreateArgs>
  ): Promise<Game> {
    return this.prisma.game.create<T>(args);
  }
  async update<T extends Prisma.GameUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GameUpdateArgs>
  ): Promise<Game> {
    return this.prisma.game.update<T>(args);
  }
  async delete<T extends Prisma.GameDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GameDeleteArgs>
  ): Promise<Game> {
    return this.prisma.game.delete(args);
  }

  async findSessions(
    parentId: string,
    args: Prisma.SessionFindManyArgs
  ): Promise<Session[]> {
    return this.prisma.game
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .sessions(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.game
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .users(args);
  }
}

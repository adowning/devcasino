import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ArcadeGameServiceBase } from "./base/arcadeGame.service.base";

@Injectable()
export class ArcadeGameService extends ArcadeGameServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

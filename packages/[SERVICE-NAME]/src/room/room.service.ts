import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RoomServiceBase } from "./base/room.service.base";

@Injectable()
export class RoomService extends RoomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

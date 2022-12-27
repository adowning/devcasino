import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RoomMessageServiceBase } from "./base/roomMessage.service.base";

@Injectable()
export class RoomMessageService extends RoomMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

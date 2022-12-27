import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PrivateMessageServiceBase } from "./base/privateMessage.service.base";

@Injectable()
export class PrivateMessageService extends PrivateMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FriendRelationshipServiceBase } from "./base/friendRelationship.service.base";

@Injectable()
export class FriendRelationshipService extends FriendRelationshipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

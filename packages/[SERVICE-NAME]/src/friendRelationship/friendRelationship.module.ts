import { Module } from "@nestjs/common";
import { FriendRelationshipModuleBase } from "./base/friendRelationship.module.base";
import { FriendRelationshipService } from "./friendRelationship.service";
import { FriendRelationshipController } from "./friendRelationship.controller";

@Module({
  imports: [FriendRelationshipModuleBase],
  controllers: [FriendRelationshipController],
  providers: [FriendRelationshipService],
  exports: [FriendRelationshipService],
})
export class FriendRelationshipModule {}

import { Module } from "@nestjs/common";
import { RoomMessageModuleBase } from "./base/roomMessage.module.base";
import { RoomMessageService } from "./roomMessage.service";
import { RoomMessageController } from "./roomMessage.controller";

@Module({
  imports: [RoomMessageModuleBase],
  controllers: [RoomMessageController],
  providers: [RoomMessageService],
  exports: [RoomMessageService],
})
export class RoomMessageModule {}

import { Module } from "@nestjs/common";
import { RoomModuleBase } from "./base/room.module.base";
import { RoomService } from "./room.service";
import { RoomController } from "./room.controller";

@Module({
  imports: [RoomModuleBase],
  controllers: [RoomController],
  providers: [RoomService],
  exports: [RoomService],
})
export class RoomModule {}

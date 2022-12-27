import { Module } from "@nestjs/common";
import { PrivateMessageModuleBase } from "./base/privateMessage.module.base";
import { PrivateMessageService } from "./privateMessage.service";
import { PrivateMessageController } from "./privateMessage.controller";

@Module({
  imports: [PrivateMessageModuleBase],
  controllers: [PrivateMessageController],
  providers: [PrivateMessageService],
  exports: [PrivateMessageService],
})
export class PrivateMessageModule {}

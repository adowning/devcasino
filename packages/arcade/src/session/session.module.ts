import { Module } from "@nestjs/common";
import { SessionModuleBase } from "./base/session.module.base";
import { SessionService } from "./session.service";
import { SessionController } from "./session.controller";

@Module({
  imports: [SessionModuleBase],
  controllers: [SessionController],
  providers: [SessionService],
  exports: [SessionService],
})
export class SessionModule {}

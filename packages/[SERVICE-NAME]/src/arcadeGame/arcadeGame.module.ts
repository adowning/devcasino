import { Module } from "@nestjs/common";
import { ArcadeGameModuleBase } from "./base/arcadeGame.module.base";
import { ArcadeGameService } from "./arcadeGame.service";
import { ArcadeGameController } from "./arcadeGame.controller";

@Module({
  imports: [ArcadeGameModuleBase],
  controllers: [ArcadeGameController],
  providers: [ArcadeGameService],
  exports: [ArcadeGameService],
})
export class ArcadeGameModule {}

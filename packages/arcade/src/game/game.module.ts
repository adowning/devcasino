import { Module } from "@nestjs/common";
import { GameModuleBase } from "./base/game.module.base";
import { GameService } from "./game.service";
import { GameController } from "./game.controller";

@Module({
  imports: [GameModuleBase],
  controllers: [GameController],
  providers: [GameService],
  exports: [GameService],
})
export class GameModule {}

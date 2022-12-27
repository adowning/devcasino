import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameService } from "./game.service";
import { GameControllerBase } from "./base/game.controller.base";

@swagger.ApiTags("games")
@common.Controller("games")
export class GameController extends GameControllerBase {
  constructor(
    protected readonly service: GameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

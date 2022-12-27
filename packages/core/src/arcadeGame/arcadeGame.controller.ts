import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ArcadeGameService } from "./arcadeGame.service";
import { ArcadeGameControllerBase } from "./base/arcadeGame.controller.base";

@swagger.ApiTags("arcadeGames")
@common.Controller("arcadeGames")
export class ArcadeGameController extends ArcadeGameControllerBase {
  constructor(
    protected readonly service: ArcadeGameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

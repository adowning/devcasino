import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RoomMessageService } from "./roomMessage.service";
import { RoomMessageControllerBase } from "./base/roomMessage.controller.base";

@swagger.ApiTags("roomMessages")
@common.Controller("roomMessages")
export class RoomMessageController extends RoomMessageControllerBase {
  constructor(
    protected readonly service: RoomMessageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

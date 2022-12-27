import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PrivateMessageService } from "./privateMessage.service";
import { PrivateMessageControllerBase } from "./base/privateMessage.controller.base";

@swagger.ApiTags("privateMessages")
@common.Controller("privateMessages")
export class PrivateMessageController extends PrivateMessageControllerBase {
  constructor(
    protected readonly service: PrivateMessageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

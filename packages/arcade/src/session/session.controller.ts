import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SessionService } from "./session.service";
import { SessionControllerBase } from "./base/session.controller.base";

@swagger.ApiTags("sessions")
@common.Controller("sessions")
export class SessionController extends SessionControllerBase {
  constructor(
    protected readonly service: SessionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

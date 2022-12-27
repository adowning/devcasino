import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FriendRelationshipService } from "./friendRelationship.service";
import { FriendRelationshipControllerBase } from "./base/friendRelationship.controller.base";

@swagger.ApiTags("friendRelationships")
@common.Controller("friendRelationships")
export class FriendRelationshipController extends FriendRelationshipControllerBase {
  constructor(
    protected readonly service: FriendRelationshipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FriendRelationshipService } from "../friendRelationship.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FriendRelationshipCreateInput } from "./FriendRelationshipCreateInput";
import { FriendRelationshipWhereInput } from "./FriendRelationshipWhereInput";
import { FriendRelationshipWhereUniqueInput } from "./FriendRelationshipWhereUniqueInput";
import { FriendRelationshipFindManyArgs } from "./FriendRelationshipFindManyArgs";
import { FriendRelationshipUpdateInput } from "./FriendRelationshipUpdateInput";
import { FriendRelationship } from "./FriendRelationship";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FriendRelationshipControllerBase {
  constructor(
    protected readonly service: FriendRelationshipService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FriendRelationship",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FriendRelationship })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: FriendRelationshipCreateInput
  ): Promise<FriendRelationship> {
    return await this.service.create({
      data: {
        ...data,

        acceptor: data.acceptor
          ? {
              connect: data.acceptor,
            }
          : undefined,

        inviter: data.inviter
          ? {
              connect: data.inviter,
            }
          : undefined,
      },
      select: {
        acceptor: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        inviter: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FriendRelationship",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [FriendRelationship] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(FriendRelationshipFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<FriendRelationship[]> {
    const args = plainToClass(FriendRelationshipFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        acceptor: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        inviter: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FriendRelationship",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FriendRelationship })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FriendRelationshipWhereUniqueInput
  ): Promise<FriendRelationship | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        acceptor: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        inviter: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FriendRelationship",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FriendRelationship })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FriendRelationshipWhereUniqueInput,
    @common.Body() data: FriendRelationshipUpdateInput
  ): Promise<FriendRelationship | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          acceptor: data.acceptor
            ? {
                connect: data.acceptor,
              }
            : undefined,

          inviter: data.inviter
            ? {
                connect: data.inviter,
              }
            : undefined,
        },
        select: {
          acceptor: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          inviter: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "FriendRelationship",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FriendRelationship })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FriendRelationshipWhereUniqueInput
  ): Promise<FriendRelationship | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          acceptor: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          inviter: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
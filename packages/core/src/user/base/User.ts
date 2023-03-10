/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsOptional,
  ValidateNested,
  IsJSON,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { FriendRelationship } from "../../friendRelationship/base/FriendRelationship";
import { PrivateMessage } from "../../privateMessage/base/PrivateMessage";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { RoomMessage } from "../../roomMessage/base/RoomMessage";
import { EnumUserStatus } from "./EnumUserStatus";
@ObjectType()
class User {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [FriendRelationship],
  })
  @ValidateNested()
  @Type(() => FriendRelationship)
  @IsOptional()
  friendRelationships?: Array<FriendRelationship>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [FriendRelationship],
  })
  @ValidateNested()
  @Type(() => FriendRelationship)
  @IsOptional()
  invites?: Array<FriendRelationship>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [PrivateMessage],
  })
  @ValidateNested()
  @Type(() => PrivateMessage)
  @IsOptional()
  privateMessages?: Array<PrivateMessage>;

  @ApiProperty({
    required: false,
    type: () => [PrivateMessage],
  })
  @ValidateNested()
  @Type(() => PrivateMessage)
  @IsOptional()
  receivedMessges?: Array<PrivateMessage>;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  roles!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => [RoomMessage],
  })
  @ValidateNested()
  @Type(() => RoomMessage)
  @IsOptional()
  roomMessages?: Array<RoomMessage>;

  @ApiProperty({
    required: false,
    enum: EnumUserStatus,
  })
  @IsEnum(EnumUserStatus)
  @IsOptional()
  @Field(() => EnumUserStatus, {
    nullable: true,
  })
  status?: "Online" | "Offline" | "Busy" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { User };

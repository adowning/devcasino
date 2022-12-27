/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsJSON,
  IsEnum,
} from "class-validator";
import { FriendRelationshipCreateNestedManyWithoutUsersInput } from "./FriendRelationshipCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { PrivateMessageCreateNestedManyWithoutUsersInput } from "./PrivateMessageCreateNestedManyWithoutUsersInput";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { RoomMessageCreateNestedManyWithoutUsersInput } from "./RoomMessageCreateNestedManyWithoutUsersInput";
import { EnumUserStatus } from "./EnumUserStatus";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => FriendRelationshipCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FriendRelationshipCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FriendRelationshipCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  friendRelationships?: FriendRelationshipCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => FriendRelationshipCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FriendRelationshipCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FriendRelationshipCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  invites?: FriendRelationshipCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => PrivateMessageCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PrivateMessageCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PrivateMessageCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  privateMessages?: PrivateMessageCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => PrivateMessageCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PrivateMessageCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PrivateMessageCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  receivedMessges?: PrivateMessageCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => RoomMessageCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => RoomMessageCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => RoomMessageCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  roomMessages?: RoomMessageCreateNestedManyWithoutUsersInput;

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
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { UserCreateInput };

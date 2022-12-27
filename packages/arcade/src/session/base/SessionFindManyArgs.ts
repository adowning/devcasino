/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SessionWhereInput } from "./SessionWhereInput";
import { Type } from "class-transformer";
import { SessionOrderByInput } from "./SessionOrderByInput";

@ArgsType()
class SessionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SessionWhereInput,
  })
  @Field(() => SessionWhereInput, { nullable: true })
  @Type(() => SessionWhereInput)
  where?: SessionWhereInput;

  @ApiProperty({
    required: false,
    type: [SessionOrderByInput],
  })
  @Field(() => [SessionOrderByInput], { nullable: true })
  @Type(() => SessionOrderByInput)
  orderBy?: Array<SessionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SessionFindManyArgs };
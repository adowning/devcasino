/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ArcadeGameWhereUniqueInput } from "./ArcadeGameWhereUniqueInput";
import { ArcadeGameUpdateInput } from "./ArcadeGameUpdateInput";

@ArgsType()
class UpdateArcadeGameArgs {
  @Field(() => ArcadeGameWhereUniqueInput, { nullable: false })
  where!: ArcadeGameWhereUniqueInput;
  @Field(() => ArcadeGameUpdateInput, { nullable: false })
  data!: ArcadeGameUpdateInput;
}

export { UpdateArcadeGameArgs };

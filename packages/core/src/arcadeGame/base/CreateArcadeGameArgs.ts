/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ArcadeGameCreateInput } from "./ArcadeGameCreateInput";

@ArgsType()
class CreateArcadeGameArgs {
  @Field(() => ArcadeGameCreateInput, { nullable: false })
  data!: ArcadeGameCreateInput;
}

export { CreateArcadeGameArgs };

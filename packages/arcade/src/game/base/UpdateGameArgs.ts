/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { GameWhereUniqueInput } from "./GameWhereUniqueInput";
import { GameUpdateInput } from "./GameUpdateInput";

@ArgsType()
class UpdateGameArgs {
  @Field(() => GameWhereUniqueInput, { nullable: false })
  where!: GameWhereUniqueInput;
  @Field(() => GameUpdateInput, { nullable: false })
  data!: GameUpdateInput;
}

export { UpdateGameArgs };

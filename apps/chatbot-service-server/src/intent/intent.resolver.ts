import * as graphql from "@nestjs/graphql";
import { IntentResolverBase } from "./base/intent.resolver.base";
import { Intent } from "./base/Intent";
import { IntentService } from "./intent.service";

@graphql.Resolver(() => Intent)
export class IntentResolver extends IntentResolverBase {
  constructor(protected readonly service: IntentService) {
    super(service);
  }
}

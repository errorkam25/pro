import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IntentService } from "./intent.service";
import { IntentControllerBase } from "./base/intent.controller.base";

@swagger.ApiTags("intents")
@common.Controller("intents")
export class IntentController extends IntentControllerBase {
  constructor(protected readonly service: IntentService) {
    super(service);
  }
}

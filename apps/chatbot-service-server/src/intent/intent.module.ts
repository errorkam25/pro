import { Module } from "@nestjs/common";
import { IntentModuleBase } from "./base/intent.module.base";
import { IntentService } from "./intent.service";
import { IntentController } from "./intent.controller";
import { IntentResolver } from "./intent.resolver";

@Module({
  imports: [IntentModuleBase],
  controllers: [IntentController],
  providers: [IntentService, IntentResolver],
  exports: [IntentService],
})
export class IntentModule {}

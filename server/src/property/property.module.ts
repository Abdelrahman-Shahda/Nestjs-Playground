import { Module } from "@nestjs/common";
import { PropertyModuleBase } from "./base/property.module.base";
import { PropertyService } from "./property.service";
import { PropertyController } from "./property.controller";

@Module({
  imports: [PropertyModuleBase],
  controllers: [PropertyController],
  providers: [PropertyService],
  exports: [PropertyService],
})
export class PropertyModule {}

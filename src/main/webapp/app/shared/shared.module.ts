import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GatewayJhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GatewayJhipsterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GatewayJhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayJhipsterSharedModule {
  static forRoot() {
    return {
      ngModule: GatewayJhipsterSharedModule
    };
  }
}

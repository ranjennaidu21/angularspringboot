import { NgModule } from '@angular/core';

import { AngularspringbootSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AngularspringbootSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AngularspringbootSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AngularspringbootSharedCommonModule {}

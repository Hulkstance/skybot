import { ChangeDetectorRef, Directive, HostBinding } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { ConfigService } from '@vex/services/config.service';

@UntilDestroy()
@Directive({
  selector: '[vexContainer]'
})
export class ContainerDirective {

  @HostBinding('class.container') enabled: boolean;

  constructor(private configService: ConfigService,
              private cd: ChangeDetectorRef) {
    this.configService.config$.pipe(
      map(config => config.boxed),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe(boxed => {
      this.enabled = boxed;
      this.cd.markForCheck();
    });
  }

}

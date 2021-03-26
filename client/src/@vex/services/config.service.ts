import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

import { DeepPartial } from '../interfaces/deep-partial.type';
import { mergeDeep } from '../utils/merge-deep';
import { LayoutService } from './layout.service';
import { configs } from './configs';
import { ConfigName } from '../interfaces/config-name.model';
import { Config } from '../interfaces/config.model';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  defaultConfig = ConfigName.apollo;

  configs: Config[] = configs;

  private configSubject = new BehaviorSubject(this.configs.find(c => c.id === this.defaultConfig));
  config$ = this.configSubject.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document,
              private layoutService: LayoutService) {
    this.config$.subscribe(config => {
      const body = this.document.body;

      this.configs.forEach(c => {
        if (body.classList.contains(c.id)) {
          body.classList.remove(c.id);
        }
      });

      body.classList.add(config.id);

      config.sidenav.state === 'expanded' ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();

      this.document.body.dir = config.rtl ? 'rtl' : 'ltr';

      // Workaround so charts and other externals know they have to resize on Layout switch
      if (window) {
        window.dispatchEvent(new Event('resize'));

        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 200);
      }
    });
  }

  setConfig(config: ConfigName) {
    const settings = this.configs.find(c => c.id === config);

    if (settings) {
      this.configSubject.next(settings);
    }
  }

  updateConfig(config: DeepPartial<Config>) {
    this.configSubject.next(mergeDeep({ ...this.configSubject.getValue() }, config));
  }

}

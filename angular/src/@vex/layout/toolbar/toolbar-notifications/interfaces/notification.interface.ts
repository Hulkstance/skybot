import { Icon } from '@visurel/iconify-angular';

import { DateTime } from 'luxon';

export interface Notification {
  id: string;
  icon: Icon;
  label: string;
  colorClass: string;
  datetime: DateTime;
  read?: boolean;
}

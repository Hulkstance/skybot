import { KeyValue } from '@angular/common';

export const trackByRoute = <T extends { route: string | string[] }>(index: number, item: T) => item.route;

export const trackById = <T extends { id: string | number }>(index: number, item: T) => item.id;

export const trackByKey = (index: number, item: KeyValue<any, any>) => item.key;

export const trackByValue = (index: number, value: string) => value;

export const trackByLabel = <T extends { label: string }>(index: number, value: T) => value.label;

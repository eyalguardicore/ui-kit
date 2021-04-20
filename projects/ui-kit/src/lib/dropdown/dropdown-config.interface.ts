import { IPopoverConfig } from '../core';

export type DropdownActionOrigin = boolean | 'inside' | 'outside';
export interface IDropdownConfig extends IPopoverConfig {
  autoClose?: DropdownActionOrigin;
}

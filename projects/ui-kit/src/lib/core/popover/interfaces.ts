import {
  PopoverPositionPreset,
  PopoverPositionType,
} from './popover-positions';
import { RequireOnlyOne } from '../interfaces/require-one';
import { FlexibleConnectedPositionStrategyOrigin } from '@angular/cdk/overlay';

export interface IOverlayConfig {
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  backdropClass?: string;
  panelClass?: string;
  hasBackdrop?: boolean;
}

export interface IPopoverConfig extends IOverlayConfig {
  positions?: IPopoverPositionDefinition[];
}

export interface IPopoverPositionDefinition {
  name: PopoverPositionType;
  offsetX?: number;
  offsetY?: number;
}

export type PopoverPosition = RequireOnlyOne<{
  preset: PopoverPositionPreset;
  definitions: IPopoverPositionDefinition[];
}>;

export type PopoverOrigin = FlexibleConnectedPositionStrategyOrigin | 'modal';

import { ConnectionPositionPair } from '@angular/cdk/overlay';

export type PopoverPositionType =
  | 'topCenter'
  | 'topStart'
  | 'topEnd'
  | 'bottomCenter'
  | 'bottomStart'
  | 'bottomEnd'
  | 'startTop'
  | 'startCenter'
  | 'startBotttom'
  | 'endTop'
  | 'endCenter'
  | 'endBotttom';

export enum PopoverPositionPreset {
  TOP,
  TOP_START,
  TOP_END,
  BOTTOM,
  BOTTOM_START,
  BOTTOM_END,
  START,
  START_TOP,
  START_BOTTOM,
  END,
  END_TOP,
  END_BOTTOM,
}

export const POPOVER_POSITION_DEFINITIONS: Record<PopoverPositionType, ConnectionPositionPair> = {
  startCenter: {
    originX: 'start',
    originY: 'center',
    overlayX: 'end',
    overlayY: 'center',
    panelClass: 'uikit-popover-overlay--start-center',
  },
  startTop: {
    originX: 'start',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'top',
    panelClass: 'uikit-popover-overlay--start-top',
  },
  startBotttom: {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'bottom',
    panelClass: 'uikit-popover-overlay--start-bottom',
  },
  endCenter: {
    originX: 'end',
    originY: 'center',
    overlayX: 'start',
    overlayY: 'center',
    panelClass: 'uikit-popover-overlay--end-center',
  },
  endTop: {
    originX: 'end',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'top',
    panelClass: 'uikit-popover-overlay--end-top',
  },
  endBotttom: {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'bottom',
    panelClass: 'uikit-popover-overlay--end-bottom',
  },
  bottomCenter: {
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top',
    panelClass: 'uikit-popover-overlay--bottom-center',
  },
  bottomStart: {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
    panelClass: 'uikit-popover-overlay--bottom-start',
  },
  bottomEnd: {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'top',
    panelClass: 'uikit-popover-overlay--bottom-end',
  },
  topCenter: {
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom',
    panelClass: 'uikit-popover-overlay--top-center',
  },
  topStart: {
    originX: 'start',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'bottom',
    panelClass: 'uikit-popover-overlay--top-start',
  },
  topEnd: {
    originX: 'end',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'bottom',
    panelClass: 'uikit-popover-overlay--top-end',
  },
};




// import { ConnectionPositionPair } from '@angular/cdk/overlay';

// export type DropdownPositionType =
//   | 'topCenter'
//   | 'topStart'
//   | 'topEnd'
//   | 'bottomCenter'
//   | 'bottomStart'
//   | 'bottomEnd';

// export enum DropdownPositionPreset {
//   TOP,
//   TOP_START,
//   TOP_END,
//   BOTTOM,
//   BOTTOM_START,
//   BOTTOM_END,
// }

// export const basePositions: Record<
//   DropdownPositionType,
//   ConnectionPositionPair
// > = {
//   bottomCenter: {
//     originX: 'center',
//     originY: 'bottom',
//     overlayX: 'center',
//     overlayY: 'top',
//     panelClass: 'uikit-dropdown-overlay--bottom-center',
//   },
//   bottomStart: {
//     originX: 'start',
//     originY: 'bottom',
//     overlayX: 'start',
//     overlayY: 'top',
//     panelClass: 'uikit-dropdown-overlay--bottom-start',
//   },
//   bottomEnd: {
//     originX: 'end',
//     originY: 'bottom',
//     overlayX: 'end',
//     overlayY: 'top',
//     panelClass: 'uikit-dropdown-overlay--bottom-end',
//   },
//   topCenter: {
//     originX: 'center',
//     originY: 'top',
//     overlayX: 'center',
//     overlayY: 'bottom',
//     panelClass: 'uikit-dropdown-overlay--top-center',
//   },
//   topStart: {
//     originX: 'start',
//     originY: 'top',
//     overlayX: 'start',
//     overlayY: 'bottom',
//     panelClass: 'uikit-dropdown-overlay--top-start',
//   },
//   topEnd: {
//     originX: 'end',
//     originY: 'top',
//     overlayX: 'end',
//     overlayY: 'bottom',
//     panelClass: 'uikit-dropdown-overlay--top-end',
//   },
// };

// const positionDefinitions: Record<
//   DropdownPositionType,
//   DropdownPositionType[]
// > = {
//   topCenter: [
//     'topCenter',
//     'topStart',
//     'topEnd',
//     'bottomCenter',
//     'bottomStart',
//     'bottomEnd',
//   ],
//   topStart: [
//     'topStart',
//     'topCenter',
//     'topEnd',
//     'bottomStart',
//     'bottomCenter',
//     'bottomEnd',
//   ],
//   topEnd: [
//     'topEnd',
//     'topCenter',
//     'topStart',
//     'bottomEnd',
//     'bottomCenter',
//     'bottomStart',
//   ],
//   bottomCenter: [
//     'bottomCenter',
//     'bottomStart',
//     'bottomEnd',
//     'topCenter',
//     'topStart',
//     'topEnd',
//   ],
//   bottomStart: [
//     'bottomStart',
//     'bottomCenter',
//     'bottomEnd',
//     'topStart',
//     'topCenter',
//     'topEnd',
//   ],
//   bottomEnd: [
//     'bottomEnd',
//     'bottomCenter',
//     'bottomStart',
//     'topEnd',
//     'topCenter',
//     'topEnd',
//   ],
// };

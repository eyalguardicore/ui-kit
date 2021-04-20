import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

export const fadeInOut = trigger('fade', [
  state('void', style({ opacity: '0' })),
  state('enter', style({ opacity: '1' })),
  state('leave', style({ opacity: '0' })),
  transition('* => *', animate('200ms ease-out'))
]);

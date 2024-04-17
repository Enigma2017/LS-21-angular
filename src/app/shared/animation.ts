import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  state('void', style({
    opacity: 0
  })),
  transition('void <=> *', animate(300)),
]);

export const zoomIn = trigger('zoomIn', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(0.5)'
    }),
    animate('300ms ease-out', style({
      opacity: 1,
      transform: 'scale(1)' 
    }))
  ])
]);
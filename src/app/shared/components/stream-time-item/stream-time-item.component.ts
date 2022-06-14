import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stream-time-item',
  templateUrl: './stream-time-item.component.html',
})
export class StreamTimeItemComponent {
  @Input()
  day: string;

  @Input()
  time: string;
}

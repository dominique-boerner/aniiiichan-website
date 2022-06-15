import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-twitch-stream',
  templateUrl: './twitch-stream.component.html',
})
export class TwitchStreamComponent {
  @Input()
  isOnline: boolean;

  @Input()
  viewerCount: string;

  @Input()
  gameName: string;

  @Input()
  type: string;

  @Input()
  startedAt: Date;
}

import { Component } from '@angular/core';
import { TwitchService } from '../../core/services/twitch-service/twitch.service';
import { StreamService } from '../../core/services/stream-service/stream.service';

/**
 * This page is the front page.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public isOnline$ = this.streamService.isOnline();
  public viewerCount$ = this.streamService.getViewerCount();
  public gameName$ = this.streamService.getGameName();
  public typeOfStream$ = this.streamService.getTypeOfStream();
  public startedAt$ = this.streamService.getStreamStartedAt();
  public videos$ = this.twitchService.getPastVideos();

  constructor(
    private readonly twitchService: TwitchService,
    private readonly streamService: StreamService
  ) {}
}

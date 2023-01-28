import { Component } from '@angular/core';
import { TwitchService } from '../../core/services/twitch-service/twitch.service';

/**
 * This page is the front page.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public isOnline$ = this.twitchService.isOnline();
  public viewerCount$ = this.twitchService.getViewerCount();
  public gameName$ = this.twitchService.getGameName();
  public typeOfStream$ = this.twitchService.getTypeOfStream();
  public startedAt$ = this.twitchService.getStreamStartedAt();
  public videos$ = this.twitchService.getPastVideos();

  constructor(private readonly twitchService: TwitchService) {}
}

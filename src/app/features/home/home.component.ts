import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TwitchIntegration } from '../../../environments/twitch-integration';
import { TwitchService } from '../../core/services/twitch-service/twitch.service';
import { TwitchResponse } from '../../core/models/twitch-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public isOnline = false;
  public viewerCount: string;
  public gameName: string;
  public type: string;
  public startedAt: Date;

  constructor(private readonly twitchService: TwitchService) {}

  ngOnInit() {
    this.twitchService.getStreamData().subscribe((response: TwitchResponse) => {
      const responseData = response.data[0];

      this.isOnline = response.data.length > 0;
      this.viewerCount = responseData.viewer_count;
      this.gameName = responseData.game_name;
      this.type = responseData.type;
      this.startedAt = responseData.started_at;
    });
  }
}

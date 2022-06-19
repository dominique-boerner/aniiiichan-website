import { Component, OnInit } from '@angular/core';
import { TwitchService } from '../../core/services/twitch-service/twitch.service';
import { TwitchResponse } from '../../core/models/twitch-response';
import { TwitchVideo } from 'src/app/core/models/twitch-video';
import { TwitchData } from 'src/app/core/models/twitch-data';

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

  public videos: TwitchVideo[];

  constructor(private readonly twitchService: TwitchService) {}

  ngOnInit() {
    this.twitchService.getStreamData().subscribe((response) => {
      const responseData = response.data[0];

      this.isOnline = response.data.length > 0;
      this.viewerCount = responseData.viewer_count;
      this.gameName = responseData.game_name;
      this.type = responseData.type;
      this.startedAt = responseData.started_at;
    });

    this.twitchService.getVideos().subscribe((response) => {
      console.log(response)
      this.videos = response.data;
    })
  }
}

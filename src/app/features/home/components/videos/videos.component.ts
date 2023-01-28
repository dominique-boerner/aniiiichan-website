import { Component, Input } from '@angular/core';
import { TwitchVideo } from 'src/app/core/models/twitch-video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
})
export class VideosComponent {

  @Input()
    videos: TwitchVideo[] | null;

}

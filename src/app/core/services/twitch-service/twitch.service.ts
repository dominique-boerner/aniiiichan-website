import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TwitchIntegration } from '../../../../environments/twitch-integration';
import { Observable } from 'rxjs';
import { TwitchResponse } from '../../models/twitch-response';
import { TwitchVideo } from '../../models/twitch-video';
import { TwitchData } from '../../models/twitch-data';

@Injectable({
  providedIn: 'root',
})
export class TwitchService {
  headers = {
    Authorization: `Bearer ${TwitchIntegration.ACCESS_TOKEN}`,
    'Client-Id': TwitchIntegration.CLIENT_ID,
  };

  constructor(private readonly http: HttpClient) {}

  getStreamData(): Observable<TwitchResponse<TwitchData>> {
    return this.http.get<TwitchResponse<TwitchData>>(
      'https://api.twitch.tv/helix/streams?user_login=aniiiichan',
      {
        headers: this.headers,
      }
    );
  }

  getVideos(): Observable<TwitchResponse<TwitchVideo>> {
    return this.http.get<TwitchResponse<TwitchVideo>>(
      'https://api.twitch.tv/helix/videos?user_id=750959779',
      {
        headers: this.headers
      }
    )
  }
}

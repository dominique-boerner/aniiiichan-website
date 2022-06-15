import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TwitchIntegration } from '../../../../environments/twitch-integration';
import { Observable } from 'rxjs';
import { TwitchResponse } from '../../models/twitch-response';

@Injectable({
  providedIn: 'root',
})
export class TwitchService {
  headers = {
    Authorization: `Bearer ${TwitchIntegration.ACCESS_TOKEN}`,
    'Client-Id': TwitchIntegration.CLIENT_ID,
  };

  constructor(private readonly http: HttpClient) {}

  getStreamData(): Observable<any> {
    return this.http.get<TwitchResponse>(
      'https://api.twitch.tv/helix/streams?user_login=aniiiichan',
      {
        headers: this.headers,
      }
    );
  }
}

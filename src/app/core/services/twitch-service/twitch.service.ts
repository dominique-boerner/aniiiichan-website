import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TwitchIntegration } from '../../../../environments/twitch-integration';
import { Observable } from 'rxjs';
import { TwitchResponse } from '../../models/twitch-response';
import { TwitchVideo } from '../../models/twitch-video';
import { TwitchData } from '../../models/twitch-data';
import { map } from 'rxjs/operators';

/**
 * This service handles api interactions with the twitch API.
 */
@Injectable({
  providedIn: 'root',
})
export class TwitchService {
  private readonly TWITCH_API_BASE_URL = 'https://api.twitch.tv/helix';
  private readonly API_HEADERS = {
    Authorization: `Bearer ${TwitchIntegration.ACCESS_TOKEN}`,
    'Client-Id': TwitchIntegration.CLIENT_ID,
  };

  constructor(private readonly http: HttpClient) {}

  /**
   * Get the past videos of the current month.
   */
  getPastVideos(): Observable<TwitchVideo[]> {
    const params = new HttpParams().set('user_id', '750959779');

    return this.http
      .get<TwitchResponse<TwitchVideo>>(`${this.TWITCH_API_BASE_URL}/videos`, {
        params,
        headers: this.API_HEADERS,
      })
      .pipe(map((response) => response.data));
  }

  /**
   * Get information about the current stream.
   */
  getStreamData(): Observable<TwitchResponse<TwitchData>> {
    const params = new HttpParams().set('user_login', 'aniiiichan');

    return this.http.get<TwitchResponse<TwitchData>>(
      `${this.TWITCH_API_BASE_URL}/streams`,
      {
        params,
        headers: this.API_HEADERS,
      }
    );
  }
}

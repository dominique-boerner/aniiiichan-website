import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  headers = {
    Authorization: `Bearer ${TwitchIntegration.ACCESS_TOKEN}`,
    'Client-Id': TwitchIntegration.CLIENT_ID,
  };

  constructor(private readonly http: HttpClient) {}

  /**
   * If ani is currently online.
   */
  isOnline(): Observable<boolean> {
    return this.getStreamData().pipe(
      map((response) => response.data.length > 0)
    );
  }

  /**
   * The amount of current stream viewers.
   * If ani isn't online, return null.
   */
  getViewerCount(): Observable<string | null> {
    return this.getStreamData().pipe(
      map((response) => response.data[0]?.viewer_count ?? null)
    );
  }

  /**
   * The current streams game name.
   * If ani isn't online, return null.
   */
  getGameName(): Observable<string | null> {
    return this.getStreamData().pipe(
      map((response) => response.data[0]?.game_name ?? null)
    );
  }

  /**
   * The current streams type.
   * If ani isn't online, return null.
   */
  getTypeOfStream(): Observable<string | null> {
    return this.getStreamData().pipe(
      map((response) => response.data[0]?.type ?? null)
    );
  }

  /**
   * The time the current stream started.
   * If ani isn't online, return null.
   */
  getStreamStartedAt(): Observable<Date | null> {
    return this.getStreamData().pipe(
      map((response) => response.data[0]?.started_at ?? null)
    );
  }

  /**
   * Get the past videos of the current month.
   */
  getPastVideos(): Observable<TwitchVideo[]> {
    return this.http
      .get<TwitchResponse<TwitchVideo>>(
        'https://api.twitch.tv/helix/videos?user_id=750959779',
        {
          headers: this.headers,
        }
      )
      .pipe(map((response) => response.data));
  }

  private getStreamData(): Observable<TwitchResponse<TwitchData>> {
    return this.http.get<TwitchResponse<TwitchData>>(
      'https://api.twitch.tv/helix/streams?user_login=aniiiichan',
      {
        headers: this.headers,
      }
    );
  }
}

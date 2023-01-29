import { Injectable } from '@angular/core';
import { TwitchService } from '../twitch-service/twitch.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * This service handles information about the current ongoing stream.
 */
@Injectable({
  providedIn: 'root',
})
export class StreamService {
  constructor(private readonly twitchService: TwitchService) {}

  /**
   * If ani is currently online.
   */
  isOnline(): Observable<boolean> {
    return this.twitchService
      .getStreamData()
      .pipe(map((response) => response.data.length > 0));
  }

  /**
   * The amount of current stream viewers.
   * If ani isn't online, return null.
   */
  getViewerCount(): Observable<string | null> {
    return this.twitchService
      .getStreamData()
      .pipe(map((response) => response.data[0]?.viewer_count ?? null));
  }

  /**
   * The current streams game name.
   * If ani isn't online, return null.
   */
  getGameName(): Observable<string | null> {
    return this.twitchService
      .getStreamData()
      .pipe(map((response) => response.data[0]?.game_name ?? null));
  }

  /**
   * The current streams type.
   * If ani isn't online, return null.
   */
  getTypeOfStream(): Observable<string | null> {
    return this.twitchService
      .getStreamData()
      .pipe(map((response) => response.data[0]?.type ?? null));
  }

  /**
   * The time the current stream started.
   * If ani isn't online, return null.
   */
  getStreamStartedAt(): Observable<Date | null> {
    return this.twitchService
      .getStreamData()
      .pipe(map((response) => response.data[0]?.started_at ?? null));
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  HttpClientModule
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StreamtimesComponent } from './features/home/components/streamtimes/streamtimes.component';
import { HomeComponent } from './features/home/home.component';
import { ParagraphComponent } from './shared/components/paragraph/paragraph.component';
import { SocialItemComponent } from './shared/components/social-item/social-item.component';
import { StreamTimeItemComponent } from './shared/components/stream-time-item/stream-time-item.component';
import { SubtitleComponent } from './shared/components/subtitle/subtitle.component';
import { TitleComponent } from './shared/components/title/title.component';
import { TwitchStreamComponent } from './shared/components/twitch-stream/twitch-stream.component';
import { SocialsComponent } from './features/home/components/socials/socials.component';
import { HeroComponent } from './features/home/components/hero/hero.component';
import { VideosComponent } from './features/home/components/videos/videos.component';
import { TwitchThumbnailPipe } from './shared/pipes/twitch-thumbnail.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TwitchStreamComponent,
    TitleComponent,
    SubtitleComponent,
    ParagraphComponent,
    StreamTimeItemComponent,
    SocialItemComponent,
    StreamtimesComponent,
    SocialsComponent,
    HeroComponent,
    VideosComponent,
    TwitchThumbnailPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

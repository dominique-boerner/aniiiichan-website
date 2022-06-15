import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { TwitchStreamComponent } from './shared/components/twitch-stream/twitch-stream.component';
import { TitleComponent } from './shared/components/title/title.component';
import { SubtitleComponent } from './shared/components/subtitle/subtitle.component';
import { ParagraphComponent } from './shared/components/paragraph/paragraph.component';
import { StreamTimeItemComponent } from './shared/components/stream-time-item/stream-time-item.component';
import { SocialItemComponent } from './shared/components/social-item/social-item.component';
import {
  HttpClient,
  HttpClientJsonpModule,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';

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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

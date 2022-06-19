import { Pipe, PipeTransform } from '@angular/core';

interface TwitchVideoSize {
  width: number;
  height: number;
}

@Pipe({
  name: 'twitchThumbnail'
})
export class TwitchThumbnailPipe implements PipeTransform {

  transform(thumbail_url: string, args: TwitchVideoSize = { width: 1280, height: 722}): string {
    let newUrl = thumbail_url;
    newUrl = thumbail_url.replace("%{width}", ""+args.width).replace("%{height}", ""+args.height);

    return newUrl;
  }

}

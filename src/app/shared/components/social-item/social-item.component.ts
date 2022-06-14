import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-item',
  templateUrl: './social-item.component.html',
})
export class SocialItemComponent {
  @Input()
  imageSrc: string;

  @Input()
  text: string;

  @Input()
  href: string;
}

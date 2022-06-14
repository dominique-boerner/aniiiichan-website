import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-item',
  templateUrl: './social-item.component.html',
  styleUrls: ['./social-item.component.scss'],
})
export class SocialItemComponent {
  @Input()
  imageSrc: string;

  @Input()
  text: string;

  @Input()
  href: string;
}

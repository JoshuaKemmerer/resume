import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-icon',
  templateUrl: './skill-icon.component.html',
  styleUrls: ['./skill-icon.component.scss']
})
export class SkillIconComponent {
  @Input() altImageText;
  @Input() imgSrc;
  @Input() iconWidth = 20;
  @Input() link;
  @Input() text;

  constructor() {}
}

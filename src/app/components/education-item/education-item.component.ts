import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss']
})
export class EducationItemComponent implements OnInit {
  @Input() cumulativeGpa: string;
  @Input() degree: string;
  @Input() graduationMonthYear: string;
  @Input() location: string;
  @Input() school: string;

  constructor() { }

  ngOnInit(): void {
  }

}

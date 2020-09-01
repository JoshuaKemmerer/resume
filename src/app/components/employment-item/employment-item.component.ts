import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employment-item',
  templateUrl: './employment-item.component.html',
  styleUrls: ['./employment-item.component.scss']
})
export class EmploymentItemComponent implements OnInit {
  @Input() employer: string;
  @Input() endDateText: string;
  @Input() locationText: string;
  @Input() role: string;
  @Input() startDateText: string;

  constructor() { }

  ngOnInit(): void {
  }

}

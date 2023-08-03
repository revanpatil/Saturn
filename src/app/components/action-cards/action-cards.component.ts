import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-action-cards',
  templateUrl: './action-cards.component.html',
  styleUrls: ['./action-cards.component.scss']
})
export class ActionCardsComponent implements OnInit {
  @Input() title: String = '';
  @Input() img: String = '';
  @Input() bgColor: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}

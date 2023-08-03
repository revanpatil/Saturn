import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-classic-cards',
  templateUrl: './classic-cards.component.html',
  styleUrls: ['./classic-cards.component.scss']
})
export class ClassicCardsComponent implements OnInit {

  @Input() title: String = '';
  @Input() img: String = '';
  @Input() desc: String = '';
  @Input() oldprice: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}

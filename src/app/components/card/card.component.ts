import { Component, OnInit, Input } from '@angular/core';
import { card } from 'src/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: String = '';
  @Input() img: String = '';
  @Input() desc: String = '';
  constructor() {}

  ngOnInit(): void {}
}

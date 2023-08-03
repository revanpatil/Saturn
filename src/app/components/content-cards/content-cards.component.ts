import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-content-cards',
  templateUrl: './content-cards.component.html',
  styleUrls: ['./content-cards.component.scss'],
})
export class ContentCardsComponent implements  AfterViewInit {
  @Input() viewMode: String;
  @ViewChild('hasScore') hasScore: ElementRef;
  hasScoreContent = true;
  constructor() {}
  ngAfterViewInit() {
      // console.log(this.ref.nativeElement.childNodes.length);
      this.hasScoreContent = this.hasScore.nativeElement.childNodes.length > 0
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  actionCardsData = [
    {
      title: "TRACK",
      imgUrl: "/assets/action-item4.png",
      bgColor: "#CDCCF3"
    },
    {
      title: "WALLET",
      imgUrl: "/assets/action-item1.png",
      bgColor: "#F5FCC6"
    },
    {
      title: "BLOGS",
      imgUrl: "/assets/action-item2.png",
      bgColor: "#C5EEFD"
    },
    {
      title: "CONSULT",
      imgUrl: "/assets/action-item3.png",
      bgColor: "#FDEEE0"
    }
  ];

  classicCardsData = [
    {
      title: "Anti-ageing Combo",
      imgUrl: "/assets/productImage.png",
      desc: "Rs. 999",
      oldprice: "Rs. 1,598"
    },
    {
      title: "Anti-ageing Combo",
      imgUrl: "/assets/productImage.png",
      desc: "Rs. 999",
      oldprice: "Rs. 1,598"
    },
    {
      title: "Anti-ageing Combo",
      imgUrl: "/assets/productImage.png",
      desc: "Rs. 999",
      oldprice: "Rs. 1,598"
    },
    {
      title: "Anti-ageing Combo",
      imgUrl: "/assets/productImage.png",
      desc: "Rs. 999",
      oldprice: "Rs. 1,598"
    }
  ];

  productCardsData = [
    {
      title: "Groom to Perfection: Aloe Vera Hair Mask for Men's Hair Care",
      imgUrl: "/assets/classic1.png",
      desc: "By Mars by GHC on Jun 22, 2022"
    },
    {
      title: "Coffee for Hair Growth: Brew Up Longer, Thicker Hair with Coffee",
      imgUrl: "/assets/classic2.png",
      desc: "By Mars by GHC on Jun 22, 2022"
    },
    {
      title: "Maximizing Hair Growth and Health: 7 Benefits of Biotin Hair Gummies",
      imgUrl: "/assets/classic3.png",
      desc: "By Mars by GHC on Jun 22, 2022"
    },
    {
      title: "Vitamin E tabs for hair: Get Lustrous Hair In No Time!",
      imgUrl: "/assets/classic4.png",
      desc: "By Mars by GHC on Jun 22, 2022"
    }];

  productsCardDataNew = [
    {
      title: "6 Surprising Benefits of Washing your face with salt water",
      imgUrl: "/assets/skin-talk-1.png",
      desc: "By Mars by GHC on Jun 22, 2022"
    },
    {
      title: "Get Cear Radiant Skin with these 9 benefits of homey for pimples",
      imgUrl: "/assets/skin-talk-2.png",
      desc: "By Mars by GHC on Jun 22, 2022"
    },
    {
      title: "Everything you need to know about Saffron Benefits for Skin",
      imgUrl: "/assets/skin-talk-3.png",
      desc: "By Mars by GHC on Jun 22, 2022"
    },
    {
      title: "Natural ways to remove tan from heads",
      imgUrl: "/assets/skin-talk-4.png",
      desc: "By Mars by GHC on Jun 22, 2022"
    }
  ];

  features = [
    {
      imgUrl: "/assets/feature.png"
    },
    {
      imgUrl: "/assets/feature1.png"
    }
  ];
  actionCards$: Observable<any>;
  constructor() { }

  ngOnInit(): void {
    this.actionCards$ = of(this.actionCardsData);
  }

}

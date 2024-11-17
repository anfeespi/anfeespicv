import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  Projects = [
    {
      imgs: [
        '../../../../assets/images/puretouch/1.png',
        '../../../../assets/images/puretouch/2.png',
        '../../../../assets/images/puretouch/3.png',
        '../../../../assets/images/puretouch/4.png'
      ],
      Title: 'Pure Touch',
      Description: 'During a Hackathon we need to preserve the good habits of washing hands, so we develop an application that follows up all the proccess, using AI to identify the hands and its movements.',
      Technologies: ['JavaScript', 'React', 'TensorFlow', 'Figma'],
      ghLink: 'https://github.com/anfeespi/PureTouch'
    },
    {
      imgs: [
        '../../../../assets/images/forestbet/1.png',
        '../../../../assets/images/forestbet/2.png',
        '../../../../assets/images/forestbet/3.png',
        '../../../../assets/images/forestbet/4.png',
        '../../../../assets/images/forestbet/5.png',
        '../../../../assets/images/forestbet/6.png',
        '../../../../assets/images/forestbet/7.png',
        '../../../../assets/images/forestbet/8.png',
        '../../../../assets/images/forestbet/9.png'
      ],
      Title: 'ForestBet',
      Description: 'A web application through which bets could be placed and registered, with emails to confirm accounts and race performance in real time through an api, also using 3 different databases, 4 different projects or APIs to emulate modules and an architecture that would allow scalability and upgrades.',
      Technologies: ['Spring Boot', 'Thymeleaf', 'MongoDB', 'MySQL', 'Bootstrap', 'Figma', 'APIs'],
      ghLink: 'https://github.com/anfeespi/ForestBet',
    },
    {
      imgs: [
        '../../../../assets/images/pokedex/1.png',
        '../../../../assets/images/pokedex/2.png',
        '../../../../assets/images/pokedex/3.png',
        '../../../../assets/images/pokedex/4.png',
        '../../../../assets/images/pokedex/5.png'
      ],
      Title: 'Pokedex Gen V',
      Description: 'A Java desktop application that emulates a generation 5 pokedex, using pure Java and pokeApi API queries in order to obtain pokemon images and information.',
      Technologies: ['Java', 'MVC', 'APIs', 'Java Swing', 'Figma'],
      ghLink: 'https://github.com/anfeespi/myRepository/tree/main/MyProjects/Pokedex',
    },
    {
      imgs: [
        '../../../../assets/images/connect4/1.png',
        '../../../../assets/images/connect4/2.png',
        '../../../../assets/images/connect4/3.png',
        '../../../../assets/images/connect4/4.png',
        '../../../../assets/images/connect4/5.png',
        '../../../../assets/images/connect4/6.png',
        '../../../../assets/images/connect4/7.png'
      ],
      Title: 'Connect 4',
      Description: 'A Java application that uses persistence through serialized or binary files, that allows to play 4 online Transformers themed games, having support for 2 languages and light and dark themes, as well as handling property files.',
      Technologies: ['Java', 'Persistence', 'Properties', 'MVC', 'Figma', 'Java Swing'],
      ghLink: 'https://github.com/anfeespi/myRepository/tree/main/MyProjects/ConnectFour'
    }
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000
  }

  @ViewChild('imgContainer') imgContainer!: ElementRef;

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

  debug() {
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}

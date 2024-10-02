import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Andrés Espitia | Backend Developer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Web, software, developer' },
      { name: 'description', content: 'As a software engineer with expertise in Backend, I have a comprehensive understanding of backend web development. My strong foundation in Java language allows me to effectively work with back-end technologies such as Spring.' },
    ]);

    AOS.init();
  }
}

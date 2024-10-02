import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'Experience',
      Organization: 'Universidad El Bosque',
      Title: 'Programming Tutor',
      Date: '2024',
      Description: [
        'I served as a tutor in front of students from lower semesters helping with\n' +
        'topics about Programming 1 (DAO, DTO, Inheritance, Computational Logic, Project Management and\n' +
        'management and project management, programming fundamentals, MVC, Distribution and software\n' +
        'software architecture), at the same time I must generate reports and reports for the coordination and the professors\n' +
        'and the professors themselves, complying with minimum semester schedules.'
      ]
    },
    {
      Tab: 'Education',
      Organization: 'Universidad El Bosque',
      Title: 'Systems Engineer',
      Date: '2022 - 2026 (in progress)',
      Description: [
        '- Competitive Programming Group Representation.',
        '- Cumulative Weighted Average 4.5/5.0.'
      ]
    },
    {
      Tab: 'Education',
      Organization: 'Escuela Tecnológica Instituto Técnico Central',
      Title: 'Industrial Technical Bachelor in the speciality of systems and computer science',
      Date: '2016 - 2021',
      Description: [
        '- Achievement of gold medal for academic performance (2017, 2021).',
        '- Bronze medal for academic achievement (2020)',
        '- Obtaining honorable mention for academic average higher than 4.0/5.0',
        '(2016(3), 2017(4), 2018(3), 2019(3), 2020(4), 2021(4))',
        '- Earned honors diploma for academic achievement (2017, 2020, 2021).',
        '- Weighted average of the entire academic process higher than 4.0/5.0'
      ]
    }
  ];

  active = 0

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }
}

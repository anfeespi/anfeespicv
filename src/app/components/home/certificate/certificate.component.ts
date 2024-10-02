import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
  certificates = [
    {
      Title: 'Java OOP Fundamentals certificate of Oracle Next Education',
      Organization: ['Alura Latam + Oracle'],
      image: '../../../../assets/images/certificates/OraclePOOFundamentals.png'
    },
    {
      Title: 'Java OOP certificate of Oracle Next Education',
      Organization: ['Alura Latam + Oracle'],
      image: '../../../../assets/images/certificates/OraclePOO.png'
    },
    {
      Title: 'Certificate of participation ICPC Colombia 2022',
      Organization: ['ICPC'],
      image: '../../../../assets/images/certificates/2022-Honorable.png'
    },
    {
      Title: 'Certificate of participation ICPC Colombia 2023',
      Organization: ['ICPC'],
      image: '../../../../assets/images/certificates/2023-Honorable.png'
    },
    {
      Title: 'Certificate of participation Google Kickstart',
      Organization: ['Google'],
      image: '../../../../assets/images/certificates/Kickstart2022.png'
    },
    {
      Title: 'Honor Mention',
      Organization: ['ETITC'],
      image: '../../../../assets/images/certificates/HonorMention.png'
    },
  ]
  constructor(
    private router: Router,
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  redirect(route: string, event: any) {
    const id = event.target.id;
    if (id == 'demoLink' || id == 'ghLink') {
      return
    }
    window.open(route, '_blank');
  }
}

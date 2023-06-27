import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-section-carousel-two',
  templateUrl: './section-carousel-two.component.html',
  styleUrls: ['./section-carousel-two.component.scss'],
})
export class SectionCarouselTwoComponent implements OnInit {
  fetchedData: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.fetchedData = data;
    })
  }
}

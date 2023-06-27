import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(private dataService: DataService) {}
  fetchedData: any[] = [];

  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.fetchedData = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  loading: boolean = false;
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      console.log("loading: ", v);
      this.loading = v;
    });

  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../projects/service/store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public mensaje$;

  constructor(private store: StoreService) {}

  ngOnInit() {
    this.mensaje$ = this.store.select$();
  }
}

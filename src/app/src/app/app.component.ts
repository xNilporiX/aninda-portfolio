import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data/data.service';
import { NavBarComponent } from "./shared/components/nav-bar/nav-bar.component";
import { FlowbiteService } from './services/flowbite/flowbite.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService, private flowbiteService: FlowbiteService ){
    this.dataService.getData();
  }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
    });
  }
}

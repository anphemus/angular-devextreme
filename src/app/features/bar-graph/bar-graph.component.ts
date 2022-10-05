import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit, OnDestroy, OnChanges {
  public chart: any;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
    console.log('creacion del chart');
    this.createChart();
  }
  ngOnDestroy(): void {
    console.log('el bar-graph desaparece');

  }


  
  createChart(){

    this.chart = new Chart("MyChart2", {
      type: 'line',

      data: {
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
}

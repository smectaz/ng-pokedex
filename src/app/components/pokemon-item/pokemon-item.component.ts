import { Component, Input, OnInit } from '@angular/core';

    @Component({
      selector: 'app-pokemon-item',
      templateUrl: './pokemon-item.component.html',
      styleUrls: ['./pokemon-item.component.scss']
    })
    export class PokemonItemComponent implements OnInit {
      @Input() name: string | undefined;
      constructor() { }

      ngOnInit(): void {

    }

  }

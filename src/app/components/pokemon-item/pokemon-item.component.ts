import { Component, EventEmitter, Input, Output } from '@angular/core';

    @Component({
      selector: 'app-pokemon-item',
      templateUrl: './pokemon-item.component.html',
      styleUrls: ['./pokemon-item.component.scss']
    })
    export class PokemonItemComponent {
      @Input() name: string | undefined;
      @Output() removeClick = new EventEmitter();


    remove($event: MouseEvent){
      $event.stopPropagation;
      console.log('remove item');
      this.removeClick.emit();
    }
  }

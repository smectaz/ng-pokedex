import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-pokemon-item',
      templateUrl: './pokemon-item.component.html',
      styleUrls: ['./pokemon-item.component.scss']
    })
    export class PokemonItemComponent implements OnInit {
    nbCaught = 0;
    buttonAddClicked = false;
    buttonRemoveClicked = false;
    pokemonName = '';
    zeroPokemon = '';

    constructor() { }

      ngOnInit(): void {

      }

      pokemonNameChanged($event: Event){
        console.log($event);
        const inputElement = $event.target as HTMLInputElement;
        this.pokemonName = inputElement.value;
      }

      addPokemonButton($event:Event) {
      console.log($event);

      this.nbCaught ++;

      this.buttonAddClicked = true;
      setTimeout(() => {
        this.buttonAddClicked = false;
      }, 1000);
    }

    removePokemonButton($event:Event) {
      console.log($event)

      if (this.nbCaught==0){
        this.zeroPokemon = "TU N'AS PLUS DE POKEMON ! VA EN CAPTURER !";
        setTimeout(() => {
          this.zeroPokemon = "";
        }, 1000);

      } else {

      this.nbCaught --;
      this.buttonRemoveClicked = true;
      setTimeout(() => {
      this.buttonRemoveClicked = false;
    }, 1000);
      }
    }



    }


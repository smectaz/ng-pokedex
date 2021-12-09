import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

    nbCaught = 0;
    buttonAddClicked = false;
    buttonRemoveClicked = false;
    pokemonName = '';

    pokemons: string [] = [];

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

      this.pokemons.push(this.pokemonName);
      console.log(this.pokemons);
      setTimeout(() => {
        this.buttonAddClicked = false;
      }, 1000);
    }

    removePokemonButton($event:Event) {
      console.log($event)
      this.nbCaught --;
      this.buttonRemoveClicked = true;
      this.pokemons.pop();
      console.log(this.pokemons);
      setTimeout(() => {
      this.buttonRemoveClicked = false;
    }, 1000);
      }

      generateBackgroundColor(){
        return this.nbCaught > 5 ? '#00dd00' : '#882222';
      }

}

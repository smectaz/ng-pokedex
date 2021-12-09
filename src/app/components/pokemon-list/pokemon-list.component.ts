import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {


    buttonAddClicked = false;
    buttonRemoveClicked = false;
    pokemonName = '';

    pokemons: string[] = [];

    constructor() { }

      ngOnInit(): void {

      }

      addPokemonButton($event:Event) {

        console.log(this.pokemonName);

        if(this.pokemonName!==''){

          this.buttonAddClicked = true;
          this.pokemons.push(this.pokemonName);
          console.log(this.pokemons);
          this.pokemonName = '';
        }

      }

      generateBackgroundColor(){
        return this.pokemons.length > 5 ? '#EDA834' : '#8EC4F0';
      }

      removePokemon(index: number){
        this.buttonRemoveClicked = true;
        this.buttonAddClicked = false;
        this.pokemons.length-=1;
        console.log('remove list ' + index);
        this.pokemons.splice(index, 1);
      }

}

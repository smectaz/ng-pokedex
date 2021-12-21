import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

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
    nameInputElementRef: any;

    constructor(private loggingService: LoggingService) { }

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

      onAddPokemon(element: HTMLElement) {
        console.log(this.nameInputElementRef?.nativeElement);
        console.log(element);
        this.loggingService.logItemCreated(this.pokemonName);
        this.pokemons.push(this.pokemonName);
      }

}

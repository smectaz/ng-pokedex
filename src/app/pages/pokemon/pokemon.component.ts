import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent implements OnInit {
pokemonName:string | undefined;
nextPokemon:string | undefined;
previousPokemon:string | undefined;

  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.pokemonName = params["name"];
      this.nextPokemon = this.pokemonService.getNextPokemonName(this.pokemonName);
      this.previousPokemon = this.pokemonService.getPreviousPokemonName(this.pokemonName);
    });
  }

  goToNextPokemon(){
    if (!this.nextPokemon) return;
    this.router.navigate(['/pokemon',this.nextPokemon]);
  }

  goToPreviousPokemon(){
    if (!this.previousPokemon) return;
    this.router.navigate(['/pokemon',this.previousPokemon]);
  }

}

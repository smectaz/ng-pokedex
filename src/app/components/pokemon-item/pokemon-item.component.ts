import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
})
export class PokemonItemComponent implements OnInit {
  @Input() name!: string;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {}

  remove($event: MouseEvent) {
    $event.stopPropagation;
    this.pokemonService.removePokemon(this.name);
  }

  goToPokemon() {
    this.router.navigate(['/pokemon', this.name]);
  }
}

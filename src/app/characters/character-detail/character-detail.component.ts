import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  pageTitle = 'Character Detail';
  character: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private characterService: CharacterService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ': ' + id;
    this.character = this.characterService.getCharacter(id);
  }

  onBack(): void {
    this.router.navigate(['/characters']);
  }
}

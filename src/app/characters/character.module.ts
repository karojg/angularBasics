import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'characters', component: CharacterListComponent },
      { path: 'characters/:id', component: CharacterDetailComponent },
    ]),
    SharedModule
  ]
})
export class CharacterModule { }

import { Repository } from './../../app/models/github.repository';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the UserRepositoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-repository',
  templateUrl: 'user-repository.html'
})
export class UserRepositoryComponent {


  @Input() repository:Repository;

  constructor() {
  }

}

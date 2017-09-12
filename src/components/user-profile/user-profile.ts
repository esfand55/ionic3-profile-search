import { User } from './../../app/models/github.user';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the UserProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfileComponent {

  @Input() user:User;
  
  constructor() {
    
  }

}

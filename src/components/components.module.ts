import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile';
import { UserRepositoryComponent } from './user-repository/user-repository';

@NgModule({
	declarations: [
		UserProfileComponent,
		UserRepositoryComponent
	],
	imports: [IonicModule],
	exports: [
		UserProfileComponent,
		UserRepositoryComponent
	]
})
export class ComponentsModule { }

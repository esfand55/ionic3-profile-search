import { Repository } from './../../app/models/github.repository';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github-service/github-service';
import { User } from '../../app/models/github.user';

/**
 * Generated class for the ProfileSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile'
})
@Component({
  selector: 'profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {

  username:string;

  user :User;
  repoList: Repository[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private github: GithubService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSearchPage');
  }

  searchGithubUserProfile ():void {
      //  this.github.getMockupUserProfileInfo (this.username).subscribe (data => this.user= data);
      //  this.github.getMockupUserRepositories (this.username).subscribe (data=> this.repoList= data);

       this.navCtrl.push('SearchResultsPage',{username: this.username});
  }


}

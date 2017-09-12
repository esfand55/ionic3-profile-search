import { GithubService } from './../../providers/github-service/github-service';
import { Repository } from './../../app/models/github.repository';
import { User } from './../../app/models/github.user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})

export class SearchResultsPage {
  username: string;
  user: User;
  repoList: Repository[];

  constructor(private loading: LoadingController, private navCtrl: NavController, private navParams: NavParams, private github: GithubService) {
  }

  ionViewDidLoad() {
  }

  goHome (){
    // this.navCtrl.pop();
    this.navCtrl.push ('ProfileSearchPage');
  }

  ionViewWillLoad() {
    this.username = this.navParams.get("username");
    this.getUserInformation(this.username);
  }


  getUserInformation(username: string) {
    let loader = this.showLoading();
    this.github.getUserProfileInfo(username).subscribe((data: User) => this.user = data);
    this.github.getUserRepositories(username).subscribe(data => this.repoList = data);
    this.dismissLoading(loader);
  }


  showLoading() {
    let loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    return loader;
  }

  dismissLoading(loader: Loading){
    loader.dismiss();
  }

}

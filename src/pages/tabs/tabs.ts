import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { LoginService } from '../../app/services/login.service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = 'AnimalListPage';
  tab5Root = 'BlueRfidPage';

  constructor(private navCtrl: NavController, private loginService: LoginService) {
    navCtrl.swipeBackEnabled = true;
  }

  logout() {
    this.loginService.logOut();
    this.navCtrl.goToRoot({
      animate: true
    });
  }

}

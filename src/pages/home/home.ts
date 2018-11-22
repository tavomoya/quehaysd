import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import * as Constants from '../../constants'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Array<{name: string, place: string, date: string}>;

  constructor(public navCtrl: NavController, private http: Http) {
    this.getEvents();
  }

  async getEvents() {
    try {
      const res = await this.http.get('https://quehaysd.herokuapp.com/events').toPromise();
      console.log('hola :)', res.json());
      this.items = [...res.json()]

    } catch (err) {
      console.log('El error', err);
    }
  }

}

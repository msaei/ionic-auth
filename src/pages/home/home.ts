import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user: Observable<firebase.User>;
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;

  }

  public login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //console.log(this.user);
  }

  public logout() {
    this.afAuth.auth.signOut();
    //console.log(this.user);
  }

}

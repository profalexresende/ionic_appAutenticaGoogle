import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'
import { Observable, from  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth:AngularFireAuth) { }

  public loginWithGoogle(){
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  public logout(): Observable<any>{
    return from (this.auth.signOut());
  }

  public logged(){
    console.log(this.auth.user);
    return this.auth.user;
  }
}

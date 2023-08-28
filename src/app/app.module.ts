import { AuthService } from './services/auth.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Importações do Angular Fire e environment.ts
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFirestoreModule
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

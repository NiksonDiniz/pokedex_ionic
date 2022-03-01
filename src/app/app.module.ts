import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokemonNamePipe } from './pipes/pokemon-name.pipe';
// import { PipesModule } from './pipes/pipes.module';

import { CameraPreview } from '@awesome-cordova-plugins/camera-preview/ngx';

@NgModule({
  declarations: [AppComponent, PokemonNamePipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CameraPreview,
  ],
  bootstrap: [AppComponent],
  exports: [PokemonNamePipe],
})
export class AppModule {}
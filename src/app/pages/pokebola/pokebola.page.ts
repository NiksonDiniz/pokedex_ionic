import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CameraPreviewOptions,
  CameraPreview,
} from '@awesome-cordova-plugins/camera-preview/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pokebola',
  templateUrl: './pokebola.page.html',
  styleUrls: ['./pokebola.page.scss'],
})
export class PokebolaPage implements OnInit {
  pokemonId: string;
  picture: string;
  captured: boolean = false;

  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1,
    storeToFile: false,
  };

  constructor(
    private route: ActivatedRoute,
    private cameraPreview: CameraPreview,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params) this.pokemonId = params.pokemonId;
    });

    this.cameraPreview
      .startCamera(this.cameraPreviewOpts)
      .then(() => {
        console.log('Camera Started...');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  capturar() {
    console.log('Trying to capture....');

    this.cameraPreview.takePicture(this.cameraPreviewOpts).then(
      (imageData) => {
        this.picture = 'data:image/jpeg;base64,' + imageData;
        this.captured = true;

        // this.showPokemon();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

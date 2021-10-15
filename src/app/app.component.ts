import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'SaudePlus';
  modalbase: boolean = true;

  constructor() {
  }

  public abrirModalImc() {
    if (this.modalbase = true) {
      var myDialog: any = <any>document.getElementById("Calcule seu IMC");
      myDialog.showModal();
    } else (this.modalbase = false)
  }
}

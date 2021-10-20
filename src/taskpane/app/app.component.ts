import { Component } from "@angular/core";
// images references in the manifest
import "../../../assets/icon-16.png";
import "../../../assets/icon-32.png";
import "../../../assets/icon-80.png";

@Component({
  selector: "app-home",
  templateUrl: "./app.component.html",
})
export default class AppComponent {
  sum = 0;

  async run() {
    this.sum++;
    /**
     * Insert your Outlook code here
     */
  }
}

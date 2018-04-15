import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  my_url: any;
  url = "https://alamgirqazi.github.io/blog/";

  constructor(private sanitize: DomSanitizer, public navCtrl: NavController) {}

  public urlpaste() {
    this.my_url = "https://alamgirqazi.github.io/blog/";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.my_url);
  }
}

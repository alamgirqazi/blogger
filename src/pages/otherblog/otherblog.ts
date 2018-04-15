import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "page-otherblog",
  templateUrl: "otherblog.html"
})
export class OtherBlogPage {
  my_url: any;

  constructor(private sanitize: DomSanitizer, public navCtrl: NavController) {}

  public newurlpaste() {
    this.my_url = "https://alamgirqazi.github.io/otherblog/";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.my_url);
  }
}

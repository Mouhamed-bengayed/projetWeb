import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HomeComponent } from "../home/home.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [NavbarComponent, HomeComponent, FooterComponent]
})
export class MainComponent {

}

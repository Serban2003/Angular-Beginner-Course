import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'HotelInventoryApp';
  role = 'Admin';
  
  constructor(@Optional() private loggerService : LoggerService, @Inject(localStorageToken) private localStorage : Storage){
    
  }

  @ViewChild('user', { read : ViewContainerRef }) vcr! : ViewContainerRef;
  @ViewChild('name', { static  : true }) name! : ElementRef;

  ngOnInit(): void {
    this.loggerService.Log("AppComponent.ngOnInit()");
    this.name.nativeElement.innerText = "Hilton Hotel";
    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.hotelName = 'HotelInventoryApp';
  }
}

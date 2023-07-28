import { AfterViewChecked, AfterViewInit, Component, DoCheck, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList} from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements DoCheck, AfterViewInit, AfterViewChecked{
  hotelName = 'Hilton Hotel';
  hideRooms = false;
  selectedRoom! : RoomList;

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  title = 'Room List';

  toggle(){
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList): void {
    this.selectedRoom = room;
  }

  addRoom(){
    const room : RoomList = {
      roomNumber: 5,
      roomType : 'Double Room',
      amenities : 'Air Conditioning',
      price : 20000,
      photos: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      checkinTime : new Date(),
      checkoutTime : new Date(),
      rating : 4
    }
    // this.roomList.push(room);
    this.roomList =[...this.roomList, room];
  }

  roomList : RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent! : QueryList<HeaderComponent>;

  constructor(@SkipSelf() private roomsService: RoomsService) { //services must be private!!
    this.roomList = this.roomsService.roomList;
  }

  ngOnInit() : void {
    
  }

  ngDoCheck(): void {
    console.log('do check is called');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
    this.headerChildrenComponent.last.title = "Header View";
  }

  ngAfterViewChecked(): void {
    
  }

}

import { AfterViewChecked, AfterViewInit, Component, DoCheck, ViewChild } from '@angular/core';
import { Room, RoomList} from './rooms';
import { HeaderComponent } from '../header/header.component';

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

  ngOnInit() : void {
    console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Double Room',
        amenities: 'Air Conditioning',
        price: 2000,
        photos: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioning, Free Wi-Fi, Bathroom',
        price: 5000,
        photos: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        checkinTime: new Date('9-Nov-2021'),
        checkoutTime: new Date('15-Nov-2021'),
        rating: 3.456,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioning, Free Wi-Fi, Bathroom, TV, Kitchen',
        price: 8000,
        photos: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        checkinTime: new Date('2-Nov-2021'),
        checkoutTime: new Date('22-Nov-2021'),
        rating: 4.9,
      },
    ]; 
  }

  ngDoCheck(): void {
    console.log('do check is called');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
  }

  ngAfterViewChecked(): void {
    
  }
}

import { Component } from '@angular/core';
import { Room, RoomList} from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  hideRooms = false;

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  roomList : RoomList[] = [
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
  ] 

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Service, House, Agent } from './add-offering-program.service';
@Component({
  selector: 'app-add-offering-popup',
  templateUrl: './add-offering-popup.component.html',
  styleUrls: ['./add-offering-popup.component.scss'],
})
export class AddOfferingPopupComponent {
  houses: House[];

  currentHouse: House;
  @Input() popupVisible: boolean = false;

  ADD_TO_FAVORITES = 'Add to Favorites';

  REMOVE_FROM_FAVORITES = 'Remove from Favorites';

  constructor(service: Service) {
    this.houses = service.getHouses();
    this.currentHouse = this.houses[0];
  }

  showHouse(house: House) {
    this.currentHouse = house;
    this.popupVisible = true;
  }

  changeFavoriteState(e: any) {
    const favoriteState = !this.currentHouse.Favorite;
    const message = `This item has been ${
      favoriteState ? 'added to' : 'removed from'
    } the Favorites list!`;
    this.currentHouse.Favorite = favoriteState;

    notify(
      {
        message,
        width: 450,
      },
      favoriteState ? 'success' : 'error',
      2000
    );
  }
}

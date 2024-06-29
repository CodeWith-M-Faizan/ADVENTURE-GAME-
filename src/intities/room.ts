import type { Item } from './item';

export interface Room {
  description: string;
  items: Array<Item>;
  adjacentRooms: Array<Room>;

  describe(): string;
  addItem(item: Item): void;
  removeItem(item: Item): void;
}

export class RoomImpl implements Room {
  constructor(
    public description: string,
    public items: Array<Item>,
    public adjacentRooms: Array<Room>
  ) {}

  describe(): string {
    return this.description;
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  removeItem(item: Item): void {
    this.items = this.items.filter(i => i !== item);
  }
}

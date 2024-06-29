"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomImpl = void 0;
class RoomImpl {
    constructor(description, items, adjacentRooms) {
        this.description = description;
        this.items = items;
        this.adjacentRooms = adjacentRooms;
    }
    describe() {
        return this.description;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }
}
exports.RoomImpl = RoomImpl;

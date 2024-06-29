"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor(player, rooms) {
        this.player = player;
        this.rooms = rooms;
    }
    start() {
        console.log('Welcome to the Text Adventure Game!');
        this.describeCurrentRoom();
    }
    describeCurrentRoom() {
        console.log(this.player.currentRoom.describe());
        this.player.currentRoom.items.forEach((item) => {
            console.log(`You see a ${item.name}: ${item.description}`);
        });
    }
    movePlayer(to) {
        this.player.move(to);
        this.describeCurrentRoom();
    }
}
exports.Game = Game;

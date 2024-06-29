"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const player_1 = require("../src/entities/player");
const room_1 = require("../src/entities/room");
const item_1 = require("../src/entities/item");
const game_1 = require("../src/game");
(0, vitest_1.describe)('Game', () => {
    (0, vitest_1.it)('should start the game correctly', () => {
        const bedroom = new room_1.RoomImpl('You are in a cozy bedroom.', [], []);
        const hallway = new room_1.RoomImpl('You are in a long hallway.', [], []);
        bedroom.adjacentRooms.push(hallway);
        hallway.adjacentRooms.push(bedroom);
        const key = new item_1.ItemImpl('Key', 'A small rusty key.');
        bedroom.addItem(key);
        const player = new player_1.PlayerImpl('Hero', 100, [], bedroom);
        const game = new game_1.Game(player, [bedroom, hallway]);
        game.start();
        (0, vitest_1.expect)(player.currentRoom).toBe(bedroom);
    });
    (0, vitest_1.it)('should move the player between rooms', () => {
        const bedroom = new room_1.RoomImpl('You are in a cozy bedroom.', [], []);
        const hallway = new room_1.RoomImpl('You are in a long hallway.', [], []);
        bedroom.adjacentRooms.push(hallway);
        hallway.adjacentRooms.push(bedroom);
        const player = new player_1.PlayerImpl('Hero', 100, [], bedroom);
        const game = new game_1.Game(player, [bedroom, hallway]);
        game.movePlayer(hallway);
        (0, vitest_1.expect)(player.currentRoom).toBe(hallway);
    });
});

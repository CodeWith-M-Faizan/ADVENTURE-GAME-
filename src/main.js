"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game");
const player_1 = require("./entities/player");
const room_1 = require("./entities/room");
const item_1 = require("./entities/item");
// Initialize rooms
const bedroom = new room_1.RoomImpl('You are in a cozy bedroom.', [], []);
const hallway = new room_1.RoomImpl('You are in a long hallway.', [], []);
const kitchen = new room_1.RoomImpl('You are in a modern kitchen.', [], []);
// Set adjacent rooms
bedroom.adjacentRooms.push(hallway);
hallway.adjacentRooms.push(bedroom, kitchen);
kitchen.adjacentRooms.push(hallway);
// Initialize items
const key = new item_1.ItemImpl('Key', 'A small rusty key.');
bedroom.addItem(key);
// Initialize player
const player = new player_1.PlayerImpl('Hero', 100, [], bedroom);
// Initialize and start the game
const game = new game_1.Game(player, [bedroom, hallway, kitchen]);
game.start();
// Simulate player actions
game.movePlayer(hallway);
game.movePlayer(kitchen);

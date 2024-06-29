import { describe, it, expect } from 'vitest';
import { RoomImpl } from '../src/entities/room';
import { ItemImpl } from '../src/entities/item';
import { Game } from '../src/game';
import { PlayerImpl } from '../src/entities/player'; // Import the PlayerImpl class

describe('Game', () => {
  it('should start the game correctly', () => {
    const bedroom = new RoomImpl('You are in a cozy bedroom.', [], []);
    const hallway = new RoomImpl('You are in a long hallway.', [], []);
    bedroom.adjacentRooms.push(hallway);
    hallway.adjacentRooms.push(bedroom);

    const key = new ItemImpl('Key', 'A small rusty key.');
    bedroom.addItem(key);

    const player = new PlayerImpl('Hero', 100, [], bedroom); // Use the imported PlayerImpl class
    const game = new Game(player, [bedroom, hallway]);

    game.start();

    expect(player.currentRoom).toBe(bedroom);
  });

  it('should move the player between rooms', () => {
    const bedroom = new RoomImpl('You are in a cozy bedroom.', [], []);
    const hallway = new RoomImpl('You are in a long hallway.', [], []);
    bedroom.adjacentRooms.push(hallway);
    hallway.adjacentRooms.push(bedroom);

    const player = new PlayerImpl('Hero', 100, [], bedroom);
    const game = new Game(player, [bedroom, hallway]);

    game.movePlayer(hallway);

    expect(player.currentRoom).toBe(hallway);
  });
});
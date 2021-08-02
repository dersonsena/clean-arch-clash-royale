import { Card } from "@/domain/entity/deck";
import { Player } from "@/domain/entity/player";

export const deckInputs = [
  {
    capacity: 8,
    player: new Player({ name: 'Kilderson Sena', trophy: 150, clan: 'Xpto Clan' }),
    cards: [
      new Card({ name: 'Ice Spirit', level: 6, elixir: 1 }),
      new Card({ name: 'Tesla', level: 8, elixir: 4 }),
      new Card({ name: 'Wizard', level: 6, elixir: 5 }),
      new Card({ name: 'Valkyrie', level: 5, elixir: 4 }),
      new Card({ name: 'Arrows', level: 7, elixir: 3 }),
      new Card({ name: 'Balloon', level: 5, elixir: 5 }),
      new Card({ name: 'Guards', level: 7, elixir: 3 }),
      new Card({ name: 'Fireball', level: 9, elixir: 4 }),
    ]
  },
  {
    capacity: 8,
    player: new Player({ name: 'Dayanny Maria', trophy: 110, clan: 'Wondman Clan' }),
    cards: [
      new Card({ name: 'Fisherman', level: 6, elixir: 3 }),
      new Card({ name: 'Goblin Gang', level: 7, elixir: 3 }),
      new Card({ name: 'X-Bow', level: 8, elixir: 6 }),
      new Card({ name: 'Spear Globins', level: 8, elixir: 2 }),
      new Card({ name: 'Globin Barrel', level: 6, elixir: 3 }),
      new Card({ name: 'Globins', level: 9, elixir: 2 }),
      new Card({ name: 'Ice Golem', level: 8, elixir: 2 }),
      new Card({ name: 'Lumberjack', level: 7, elixir: 4 }),
    ]
  },
  {
    capacity: 8,
    player: new Player({ name: 'Kauan Lucas', trophy: 90, clan: 'Xpto Clan' }),
    cards: [
      new Card({ name: 'Fisherman', level: 6, elixir: 3 }),
      new Card({ name: 'Goblin Gang', level: 7, elixir: 3 }),
      new Card({ name: 'X-Bow', level: 8, elixir: 6 }),
      new Card({ name: 'Ice Spirit', level: 6, elixir: 1 }),
      new Card({ name: 'Tesla', level: 8, elixir: 4 }),
      new Card({ name: 'Wizard', level: 6, elixir: 5 }),
      new Card({ name: 'Lumberjack', level: 7, elixir: 4 }),
      new Card({ name: 'Fireball', level: 9, elixir: 4 }),
    ]
  }
]
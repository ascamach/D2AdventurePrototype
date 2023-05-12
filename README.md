A simple adventure game by Addison Camacho based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: 
    - Crewmate, Main, Supplies, Engine, Captain, Bridge

- **2+ scenes *not* based on `AdventureScene`**:
    - Good_end, Bad_end, Note

- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: item_shine(). This method makes an item shine, making it more distinct as an interactable vs other items.
    - Enhancement 2: shake(). Makes an item shake based on the code from `game.js`.

Experience requirements:
- **4+ locations in the game world**: 
    - Crewmate Quarters, Main Room, Supplies Room, Engine Room, Captain's Room, Bridge
- **2+ interactive objects in most scenes**:
    - Crewmate Quarters: spacesuit, hatch
    - Main Room: the 5 hatches to each room
    - Supplies Room: code for navigation room, wire, hatches to 2 rooms
- **Many objects have `pointerover` messages**:
    - Monitors in the room
    - All interactable objects have `pointerover` messages
- **Many objects have `pointerdown` effects**:
    - All interactable objects have the `shake` method or are takeable. The only exception is the note in the Captain's Room and the second monitor in the Bridge.
- **Some objects are themselves animated**: 
    - The spacesuit and the wire are animated when they are taken.

Asset sources:
- Each image asset was created by me using `Aseprite`. An amazing app for $20, please check them out on their Steam page or through this URL: https://www.aseprite.org/ 

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly).
- `real_game.js` was written by me for this adventure game.
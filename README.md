[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/FYbECNos)


Monster Mayhem

Introduction

"Monster Mayhem" is an exciting new web-based board game project that introduces players to a 10x10 grid of interconnected hexagons. This assessment primarily focuses on setting up essential functionalities like highlighting hexagons, enabling selection and deselection, and incorporating asynchronous data processing. Additionally, there's a challenge to add extra game mechanics such as character movement and path highlighting. Through detailed documentation, I'll showcase troubleshooting and problem-solving skills, ensuring a seamless gaming experience.

Game Rules

The objective of "Monster Mayhem" is to find the monsters lurking within the grid.
A total of 5 monsters are hidden throughout the game board.
The game is designed for two players, each with a distinct color scheme.
Player 1 is represented by Gold, while Player 2 is represented by Black.
Players take turns clicking on hexagons, marking their presence on the board with their respective colors.
When a player discovers a monster, the hexagon containing the monster turns purple, and a purple indicator appears next to the player's name.
The first player to find 3 out of the 5 monsters wins the game.

Troubleshooting Steps

Several troubleshooting steps were crucial in achieving the final result:

Reorganization of Elements (HTML): Moving the monster counters out of the original container and placing them inside a new container allowed for better control over the layout. This ensured that the monster counters could be positioned on each side of the board as needed, enhancing the game's visual appeal and functionality.

Styling of New Elements (CSS): Adding styles for the new elements, specifically the monster counters, ensured they were positioned correctly on the left and right sides of the board. Adjustments were made to ensure that the counters had an appropriate appearance and seamlessly integrated with the existing design, maintaining visual consistency.

Update of Event Listeners (JavaScript): It was essential to maintain the functionality of the event listeners for the hexagons even after adding the monster counters. These event listeners enable player interaction, allowing them to mark their presence on the board by clicking on the hexagons. Updating these event listeners ensured that the core gameplay mechanics remained intact.

Addition of Logic for Monster Counting and Presentation (JavaScript): Implementing logic to count and display the monsters found by each player was crucial for tracking progress and providing visual feedback. When a player discovered a monster, the corresponding counter was incremented, and a monster icon appeared, allowing players to track their progress during the game effectively.

Reorganization of Elements: By reorganizing the layout of the game elements, particularly the placement of the monster counters, I gained better control over their positioning on the page. This allowed me to position the counters on each side of the board, improving both gameplay functionality and visual aesthetics.

Styling of New Elements: Adding styles for the new elements, such as the monster counters, ensured they were visually appealing and seamlessly integrated with the game's design. By adjusting the CSS styles, I ensured the counters were positioned correctly and maintained visual coherence with the overall game layout.

Update of Event Listeners: Ensuring the event listeners for the hexagons remained functional was crucial for maintaining the game's interactivity. By updating these event listeners, I ensured that players could continue to interact with the hexagons and mark their presence on the board effectively.

Addition of Logic for Monster Counting and Presentation: Implementing logic to count and display the monsters found by each player enhanced the game's functionality and provided players with a clear indication of their progress. By adding this logic, I improved the overall gaming experience and made it more engaging for players.

In summary, each troubleshooting step addressed key aspects of the game's development, including layout organization, visual presentation, interactivity, and gameplay mechanics. These steps were crucial to ensuring the game functioned correctly and provided an enjoyable experience for players.

Conclusion

Through meticulous troubleshooting and problem-solving, I successfully enhanced the "Monster Mayhem" board game, ensuring it met the desired objectives and provided an immersive gaming experience. By addressing various challenges related to layout organization, styling, event handling, and game logic, I improved the game's functionality and aesthetics, ultimately delivering a polished and engaging product. Moving forward, I am excited to continue refining and expanding the game's features, further enhancing its appeal and entertainment value.


export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string; // URL to itch.io
  tags: string[];
}

export const GAMES: Game[] = [
  {
    id: "just-a-ball-rolling-game",
    title: "Just a Ball Rolling Game",
    description: "This is a simple game in which you control a ball! Your only objective is to maneuver your ball into the square-shaped basket present at the end of each level.",
    image: "/images/video_games/just-a-ball-rolling-game.webp",
    link: "https://sebgame.itch.io/just-a-ball-rolling-game",
    tags: [	"3D", "Difficult", "Low-poly", "Minimalist", "Physics", "Short", "Simple", "Speedrun"]
  },
  {
    id: "adventure-dude",
    title: "Adventure Dude",
    description: "This is a platformer-style game in which you can explore the world at your own pace.",
    image: "/images/video_games/adventure-dude.webp",
    link: "https://sebgame.itch.io/adventure-dude",
    tags: [	"2D", "Platformer", "Dark", "Exploration", "Jumping", "Metroidvania", "Pixel Art", "Tileset"]
  },
  {
    id: "board-game",
    title: "Board Game",
    description: "In this action-packed fighting game, defeat increasingly difficult waves of enemies originating from a multitude of board games.",
    image: "/images/video_games/board-game.webp",
    link: "https://sebgame.itch.io/board-game",
    tags: [	"3D", "Action", "Low-poly", "Colorful", "Top Down", "Shoot 'Em Up", "Speedrun", "Tabletop"]
  },
  {
    id: "slimeslair",
    title: "Slime'Slair",
    description: "Enter a dangerous dungeon filled with evil slimes! Can you help a lost slime find his way home?",
    image: "/images/video_games/slime-slair.webp",
    link: "https://sebgame.itch.io/slimeslair",
    tags: [	"3D", "Dungeon Crawler", "Top Down", "Shoot 'Em Up", "Cute", "Fantasy", "Roguelike"]
  },
  {
    id: "goo",
    title: "GOO!",
    description: "Dive into a thrilling educational journey where you'll explore the intricacies of pH regulation, equilibrium constants, and buffers!!",
    image: "/images/video_games/goo.webp",
    link: "https://erict837.itch.io/goo1",
    tags: [	"3D", "Dungeon Crawler", "Top Down", "Sci-Fi", "Shoot 'Em Up", "Educational"]
  },
  {
    id: "let-it-grow",
    title: "Let it Grow",
    description: "Water plants to release your stress. But watch out, there are evil ghosts lurking around every corner...",
    image: "/images/video_games/let-it-grow.webp",
    link: "https://sebgame.itch.io/let-it-grow",
    tags: [	"3D", "Difficult", "Low-poly", "Minimalist", "Physics", "Short", "Simple", "Singleplayer", "Speedrun"]
  }
];
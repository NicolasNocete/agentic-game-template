import Phaser from "phaser";

class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  create(): void {
    this.add.text(32, 32, "Agentic Phaser project is running.", {
      color: "#ffffff",
      fontFamily: "sans-serif",
      fontSize: "24px"
    });
  }
}

new Phaser.Game({
  type: Phaser.AUTO,
  parent: "app",
  width: 1280,
  height: 720,
  backgroundColor: "#1f2937",
  scene: MainScene
});

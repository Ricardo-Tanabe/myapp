import Phaser from "phaser";
import GameScene from './GameScene'

export const initPhaserGame = () => {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 640,
            parent: 'game-container',
            scene: [GameScene],
            backgroundColor: '#000',
        };

        return new Phaser.Game(config)
    }
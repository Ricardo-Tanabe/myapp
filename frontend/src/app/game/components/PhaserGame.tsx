import { useEffect } from "react";
import { initPhaserGame } from "../phaser/main";

const PhaserGame = () => {
    useEffect(() => {
        const game = initPhaserGame()

        return () => {
            game.destroy(true);
        }
    }, []);

    return <div id="game-container"
            style={{
                width: "800px",
                height: "600px",
                margin: "0 auto"
            }} />
}

export default PhaserGame
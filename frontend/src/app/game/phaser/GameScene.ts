import Phaser from "phaser";

const GRID_WIDTH = 10;
const GRID_HEIGHT = 20;
const BLOCK_SIZE = 32;
const TETROMINO_SHAPES = [
    { shape: [ [1, 1], [1, 1] ] },
    { shape: [ [1, 1, 1, 1], ] },
    { shape: [ [0, 1, 0], [1, 1, 1] ] },
    { shape: [ [1, 0, 0], [1, 1, 1] ] },
    { shape: [ [0, 0, 1], [1, 1, 1] ] },
    { shape: [ [0, 1, 1], [1, 1, 0] ] },
    { shape: [ [1, 1, 0], [0, 1, 1] ] }
];

export default class GameScene extends Phaser.Scene {
    gridState: number[][] = [];
    activeBlocks: Phaser.GameObjects.Image[] = [];
    currentShape: number[][] = [];
    currentX: number = 3;
    currentY: number = 0;
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    dropTimer: number = 0;
    dropInterval: number = 1000;
    titleText!: Phaser.GameObjects.Text;

    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.image('block', '/bloco.png');
    }

    create() {
        this.gridState = Array.from({ length: GRID_HEIGHT}, () =>
            Array(GRID_WIDTH).fill(0)
        )

        this.cursors = this.input!.keyboard!.createCursorKeys();
        this.spawnPiece()

        this.titleText = this.add.text(10, 10, 'Tetris', {
            fontSize: '24px',
            color: '#fff'
        });

        // this.drawGrid();
    }

    update(time: number) {
        if(Phaser.Input.Keyboard.JustDown(this.cursors.up!)) this.rotatePiece();
        if(Phaser.Input.Keyboard.JustDown(this.cursors.left!)) this.movePieceHorizontal(-1);
        if(Phaser.Input.Keyboard.JustDown(this.cursors.right!)) this.movePieceHorizontal(1);
        
        if (time > this.dropTimer + this.dropInterval || this.cursors.down?.isDown) {
            this.dropTimer = time;
            this.movePieceDown();
        }
    }

    spawnPiece() {
        const randomIndex = Phaser.Math.Between(0, TETROMINO_SHAPES.length - 1);
        this.currentShape = TETROMINO_SHAPES[randomIndex].shape;
        this.currentX = 3;
        this.currentY = 0;
        this.drawCurrentPiece();
    }

    drawCurrentPiece(shape = this.currentShape) {
        this.activeBlocks = []
        
        for (let row = 0; row < shape.length; row++) {
            for (let col = 0; col < shape[row].length; col++) {
                if(shape[row][col]) {
                    const x = (this.currentX + col) * BLOCK_SIZE
                    const y = (this.currentY + row) * BLOCK_SIZE
                    const block = this.add.image(x, y, 'block')
                    block.setOrigin(0)
                    this.activeBlocks.push(block)
                }
            }
        }
    }

    movePieceDown() {
        if (this.canMoveDown()) {
            for (const block of this.activeBlocks) {
                block.y = Math.round(block.y / BLOCK_SIZE) * BLOCK_SIZE;
                block.y += BLOCK_SIZE;
            }
            this.currentY += 1;
        } else {
            this.placePieceOnGrid();
            for (const block of this.activeBlocks) block.destroy();
            this.activeBlocks = [];
            this.clearFullLines();
            this.spawnPiece();
        }
    }

    canMoveDown(): boolean {
        for (const block of this.activeBlocks) {
            const x = Math.round(block.x / BLOCK_SIZE);
            const y = Math.round(block.y / BLOCK_SIZE) + 1;

            if (y >= GRID_HEIGHT || this.gridState[y][x] === 1) {
                return false;
            }
        }
        return true;
    }

    placePieceOnGrid() {
        for (const block of this.activeBlocks) {
            const x = Math.round(block.x / BLOCK_SIZE);
            const y = Math.round(block.y / BLOCK_SIZE);

            if (y >= 0 && y < GRID_HEIGHT && x >= 0 && x < GRID_WIDTH) {
                this.gridState[y][x] = 1;
            }
        }
    }

    clearFullLines() {
        for (let y = GRID_HEIGHT - 1; y >= 0; y--) {
            if (this.gridState[y].every(cell => cell === 1)) {
                this.gridState.splice(y, 1);
                this.gridState.unshift(Array(GRID_WIDTH).fill(0));
                y++
            }
        }

        for (const child of [...this.children.list]) {
            if (child instanceof Phaser.GameObjects.Image && child.texture.key === 'block') {
                child.destroy();
            }
        }

        this.renderGrid();
    }

    renderGrid() {
        for(let row = 0; row < GRID_HEIGHT; row++) {
            for (let col = 0; col < GRID_WIDTH; col++) {
                if(this.gridState[row][col] === 1) {
                    const x = Math.round(col * BLOCK_SIZE);
                    const y = Math.round(row * BLOCK_SIZE);
                    const block = this.add.image(x, y, 'block');
                    block.setOrigin(0);
                }
            }
        }
    }
    
    movePieceHorizontal(direction: number) {
        let canMove = true;

        for (const block of this.activeBlocks) {
            const nextX = block.x + direction * BLOCK_SIZE
            const col = Math.round(nextX / BLOCK_SIZE)
            const row = Math.round(block.y / BLOCK_SIZE)

            if (col < 0 || col >= GRID_WIDTH || this.gridState[row][col] === 1) {
                canMove = false;
                break
            }
        }

        if (canMove) {
            for (const block of this.activeBlocks) {
                block.x = Math.round(block.x / BLOCK_SIZE) * BLOCK_SIZE;
                block.x += direction * BLOCK_SIZE;
            }
            this.currentX += direction;
        }
    }

    rotatePiece() {
        const newShape = rotateMatrix(this.currentShape);

        for (let row = 0; row < newShape.length; row++) {
            for (let col = 0; col < newShape[row].length; col++) {
                if (newShape[row][col]) {
                    const gridX = this.currentX + col;
                    const gridY = this.currentY + row;

                    if (gridX < 0 || gridX >= GRID_WIDTH ||
                        gridY < 0 || gridY >= GRID_HEIGHT ||
                        this.gridState[gridY][gridX] === 1 ) {
                        return;
                    }
                }
            }
        }

        this.activeBlocks.forEach(block => block.destroy());
        this.currentShape = newShape;
        this.drawCurrentPiece();
    }

}

function rotateMatrix(matrix: number[][]): number[][] {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const rotated: number[][] = [];

    for (let col = 0; col < cols; col++) {
        const newRow: number[] = [];
        for (let row = rows - 1; row >= 0; row--) {
            newRow.push(matrix[row][col]);
        }
        rotated.push(newRow);
    }

    return rotated;
}
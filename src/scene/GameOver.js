import { BaseScene } from './BaseScene'
import gameOverBackground from '../assets/images/background-gameover.png'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants/game'

const FONT_SIZE = 80
const TEXT_COLOR = '#FFFFFF'

export class GameOver extends BaseScene {
  constructor (config) {
    super({
      key: 'GameOver',
      ...config
    })
    this.score = 0
  }

  preload () {
    this.load.image('gameOverBackground', gameOverBackground)
  }

  init ({ finalScore }) {
    this.score = finalScore
  }

  create () {
    this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, 'gameOverBackground')
    this.add.text(
      0,
      SCREEN_HEIGHT / 2 - 70,
      this.score.toString(10),
      {
        font: `${FONT_SIZE}px DisposableDroid`,
        color: TEXT_COLOR,
        align: 'center',
        fixedWidth: SCREEN_WIDTH
      }
    )
    console.log('score is', this.score)
  }
}

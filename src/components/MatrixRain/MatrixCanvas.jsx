import React from 'react'
import PropTypes from 'prop-types'

/**
 * fill the background with a matrix-like animation
 *
 * all settings are optional.
 * @param {String} matrixRain "#0F0"
 * @param {String} matrixBackground "#000"
 * @param {String} matrixFont "15pt monospace"
 * @param {Function} matrixText Function() returns random char
 * @param {Number} spaceX 20
 * @param {Number} spaceY 20
 * @param {Object} style CSS
 */
class MatrixCanvas extends React.Component {
  constructor(props) {
    super(props)
    this.matrixText = props.matrixText
      ? props.matrixText
      : () => String.fromCharCode(64 + Math.random() * 128)
    this.spaceX = props.spaceX || 20
    this.spaceY = props.spaceY || 20
    this.canvasRef = React.createRef()
    this.defaultStyle = { position: 'fixed', top: 0, left: 0, zIndex: -1 }
    this.style = { ...this.defaultStyle, ...props.style }
    this.w = window.innerWidth
    this.h = window.innerHeight
    this.cols = Math.floor(this.w / 15) + 1
    this.ypos = Array(this.cols).fill(0)
    this.getCanvas = () => document.querySelector('canvas').getContext('2d')
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateCanvas()
    }, 50)
    return () => clearInterval(this.interval)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  updateCanvas() {
    this.w = window.innerWidth
    this.h = window.innerHeight
    const ctx = this.getCanvas()
    ctx.fillStyle = this.props.matrixBackground || '#000'
    ctx.fillRect(0, 0, this.w, this.h)
    ctx.fillStyle = this.props.matrixRain || '#0F0'
    ctx.font = this.props.matrixFont || '15pt monospace'
    this.ypos.forEach((y, ind) => {
      const text = this.matrixText()
      const x = ind * this.spaceX
      ctx.fillText(text, x, y)
      if (y > 100 + Math.random() * 10000) this.ypos[ind] = 0
      else this.ypos[ind] = y + this.spaceY
    })
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        width={this.w}
        height={this.h}
        style={this.style}
      />
    )
  }
}

MatrixCanvas.propTypes = {
  matrixRain: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  matrixBackground: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  matrixFont: PropTypes.string,
  matrixText: PropTypes.func,
  spaceX: PropTypes.number,
  spaceY: PropTypes.number
}

export default MatrixCanvas

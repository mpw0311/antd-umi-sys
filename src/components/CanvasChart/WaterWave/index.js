import React, { PureComponent } from 'react';
import autoHeight from '../autoHeight';
import styles from './index.less';

@autoHeight()
class WaterWave extends PureComponent {
  state = {
    radio: 1
  }
  componentDidMount() {
    this.renderChart();
    this.resize();
    window.addEventListener(
      'resize',
      () => {
        //所有注册到 raf 中的回调，浏览器会统一管理， 在适当的时候一同执行所有回调。
        //当页面不可见，例如当前标签页被切换，隐藏在后面的时候，为了减少终端的损耗，raf 就会暂停。
        requestAnimationFrame(() => this.resize());
      },
      { passive: true }
    );
  }
  componentDidUpdate(prevProps) {
    const { percent } = this.props;
    const _render = () => {
      clearTimeout(this.finishTimer);
      this.finishTimer = setTimeout(() => {
        if (this.isFinish) {
          this.renderChart('update');
        } else {
          _render();
        }
      }, 500);
    };
    if (prevProps.percent !== percent) {
      _render();
    }

  }
  componentWillUnmount() {
    cancelAnimationFrame(this.timer);
    if (this.node) {
      this.node.innerHTML = '';
    }
    window.removeEventListener('resize', this.resize);
  }
  resize = () => {
    if (this.root) {
      const { height } = this.props;
      const { offsetWidth } = this.root.parentNode;
      this.setState({
        radio: offsetWidth < height ? offsetWidth / height : 1
      });
    }
  }
  renderChart = (type) => {
    const { percent, color = '#1890FF' } = this.props;
    const data = percent / 100;
    const self = this;
    cancelAnimationFrame(this.timer);
    if (!this.node || (data !== 0 && !data)) {
      return;
    }
    const canvas = this.node;
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const radius = canvasWidth / 2;
    const lineWidth = 2;
    const cR = radius - lineWidth;

    ctx.beginPath();
    ctx.lineWidth = lineWidth * 2;

    const axisLength = canvasWidth - lineWidth;
    const unit = axisLength / 8;
    const range = 0.2;//振幅
    let currRange = range;
    const xOffset = lineWidth;
    let sp = 0;//周期偏移量
    let currData = 0;
    const waveupsp = 0.005;//水波上涨速度

    let arcStack = [];
    const bR = radius - lineWidth;
    const circleOffset = -(Math.PI / 2);
    let circleLock = true;

    for (let i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
      arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
    }
    const cStartPoint = arcStack.shift();
    ctx.strokeStyle = color;
    ctx.moveTo(cStartPoint[0], cStartPoint[1]);

    function drawSin() {
      ctx.beginPath();
      ctx.save();

      const sinStack = [];
      for (let i = xOffset; i < xOffset + axisLength; i += 20 / axisLength) {
        const x = sp + (xOffset + i) / unit;
        const y = Math.sin(x) * currRange;
        const dx = i;
        const dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;

        ctx.lineTo(dx, dy);
        sinStack.push([dx, dy]);
      }
      const startPoint = sinStack.shift();

      ctx.lineTo(xOffset + axisLength, canvasHeight);
      ctx.lineTo(xOffset, canvasHeight);
      ctx.lineTo(startPoint[0], startPoint[1]);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
      gradient.addColorStop(0, '#FFF');
      gradient.addColorStop(1, color);
      ctx.fillStyle = gradient;

      ctx.fill();
      ctx.restore();
      //完成第一次绘制
      if (self.isFinish === undefined) {
        self.isFinish = true;
      }
    }
    function render() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      if (circleLock && type !== 'update') {
        if (arcStack.length) {
          const temp = arcStack.shift();
          ctx.lineTo(temp[0], temp[1]);
          ctx.stroke();
        } else {
          circleLock = false;
          ctx.lineTo(cStartPoint[0], cStartPoint[1]);
          ctx.stroke();
          arcStack = null;

          ctx.globalCompositeOperation = 'destination-over';
          ctx.beginPath();
          ctx.lineWidth = lineWidth;
          ctx.arc(radius, radius, bR, 0, 2 * Math.PI, 1);

          ctx.beginPath();
          ctx.save();
          ctx.arc(radius, radius, radius - 3 * lineWidth, 0, 2 * Math.PI, 1);

          ctx.restore();
          ctx.clip();
          ctx.fillStyle = color;
        }
      } else {
        if (data >= 0.85) {
          if (currRange > range / 4) {
            const t = range * 0.01;
            currRange -= t;
          }
        } else if (data <= 0.1) {
          if (currRange < range * 1.5) {
            const t = range * 0.01;
            currRange += t;
          }
        } else {
          if (currRange <= range) {
            const t = range * 0.01;
            currRange += t;
          }
          if (currRange >= range) {
            const t = range * 0.01;
            currRange -= t;
          }
        }
        if (data - currData > 0) {
          currData += waveupsp;
        }
        if (data - currData < 0) {
          currData -= waveupsp;
        }

        sp += 0.07;
        drawSin();
      }
      self.timer = requestAnimationFrame(render);
    }
    render();
  }
  render() {
    const { height, title, percent } = this.props;
    return (
      <div
        className={styles.waterWave}
        ref={root => this.root = root}
        style={{ transform: `scale(${this.state.radio})` }}
      >
        <div style={{ width: height, height, overflow: 'hidden' }}>
          <canvas
            className={styles.waterWaveCanvasWrapper}
            ref={node => this.node = node}
            width={height * 2}
            height={height * 2}
          />
        </div>
        <div className={styles.text} style={{ width: height }}>
          {title && <span>{title}</span>}
          <h4>{percent}%</h4>
        </div>
      </div>
    );
  }
}
export default WaterWave;
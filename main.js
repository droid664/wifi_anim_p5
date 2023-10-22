import p5 from 'p5'
import './style.css'

const sketch = (p) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight)
        p.background(0)
    }
    p.draw = () => {
        p.background(0, 30)

        let incline = -30

        for (let y = -10; y < 30; y++) {
            for (let x = 0; x < 30; x++) {
                let cx = x * 100
                let cy = y * 130 + x * incline
                let yOffset = 20
                let dist = (Math.sin(p.frameCount * 0.08 + x / 5) + 0.5) * 30 

                p.noStroke()
                p.fill('#fcba03')
                p.ellipse(cx, cy, 10, 10)
                p.noFill()
                p.stroke('#fcba03')
                p.strokeWeight(4)
                p.arc(cx, cy - yOffset - dist, 30 + dist, 25 + dist, -135, 0)
            }
        }
    }
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
        p.background(0)
    }
}

new p5(sketch)
import { newRenderer } from "./renderer.js"
import { newCircle } from "./shapes/circle.js";
import { newRectangle } from "./shapes/rectangle.js";
import { newSquare } from "./shapes/square.js";

const shape: Shape = newRectangle(2, 3)
const renderer = newRenderer(shape)
renderer.draw();
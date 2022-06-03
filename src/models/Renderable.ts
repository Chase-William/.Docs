import Renderer from "../markdown/Renderer";
import Model from "./Model";
import Nestable from "./Nestable";

export default interface Renderable {
  render(renderer: Renderer): void
}
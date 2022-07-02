import RenderManager from "../renderer/RenderManager";

export default interface Renderable {
  render(renderManager: RenderManager): void
}
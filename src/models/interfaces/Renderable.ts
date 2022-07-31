import RenderManager from "../../renderer/RenderManager";

/**
 * Represents and entity that can be rendered.
 */
export default interface Renderable {
  render(renderManager: RenderManager): void
}
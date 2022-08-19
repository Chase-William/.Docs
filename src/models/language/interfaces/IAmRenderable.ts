import RenderManager from "../../../renderer/RenderManager";

/**
 * Represents and entity that can be rendered.
 */
export default interface IAmRenderable {
  render(renderManager: RenderManager): void
}
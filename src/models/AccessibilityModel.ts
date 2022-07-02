import { jsonMember, jsonObject } from "typedjson";
import Model from "./Model";

/**
 * 
 * A model that has accessibility modifiers used by types and members alike.
 * 
 */
@jsonObject
export default class AccessibilityModel extends Model {
  @jsonMember(Boolean, { name: 'IsPublic' })
  isPublic: boolean;
  @jsonMember(Boolean, { name: 'IsPrivate' })
  isPrivate: boolean;
  @jsonMember(Boolean, { name: 'IsProtected' })
  isProtected: boolean;
  @jsonMember(Boolean, { name: 'IsInternal' })
  isInternal: boolean;
}
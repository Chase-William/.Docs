import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import MethodComment from '../written/MethodComment';
import MemberModel from './MemberModel';

@JsonObject()
export default class MethodModel extends MemberModel<MethodComment> {
  @JsonProperty({ name: 'ReturnType' })
  returnType: string;
  @JsonProperty({ name: 'Parameters' })
  parameters: [string, string][];
}

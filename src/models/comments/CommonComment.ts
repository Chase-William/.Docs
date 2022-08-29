import { jsonMember, jsonObject } from 'typedjson';
import InheritDocTag from './InheritDocTag';

const HTML_ESCAPED_QUOTE = "&quot;"
const HTML_ESCAPED_GREATER_THAN = "&gt;"
const HTML_ESCAPED_LESS_THAN = "&lt;"

@jsonObject()
export default class CommonComment {
  @jsonMember(String, { name: 'Summary' })
  summary: string;
  @jsonMember(String, { name: 'Remarks' })
  remarks: string;
  @jsonMember(String, { name: 'Example' })
  example: string;
  @jsonMember(InheritDocTag, { name: 'Inheritdoc' })
  inheritdoc: InheritDocTag;

  getHTMLAttributeSafeSummary(): string {   
    if (!this.summary) 
      return ''
    return this.summary?.replace(/"/ig, HTML_ESCAPED_QUOTE)
                        .replace(/>/ig, HTML_ESCAPED_GREATER_THAN)
                        .replace(/</ig, HTML_ESCAPED_LESS_THAN)
  }
}

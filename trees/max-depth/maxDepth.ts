import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  let length = 1;


  for (let child of node!.children) {
    // length += maxDepth(child);
    if (node!.children) return length--;
    length += maxDepth(child);

  }

  return length++;
}


export { maxDepth };
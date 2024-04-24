import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  let length = 1;
  let maxLength =1


  length > maxLength 

  for (let child of node!.children) {
    // length += maxDepth(child);
    length += maxDepth(child);

  }

  return length++;
}


//            1
//          / | \
//        2   3   4
//               / \
//              5   6
//                   \
//                    7
//                     \
//                      8



export { maxDepth };
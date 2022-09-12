export interface TreeRoot<V> {
  leaves: TreeNode<V>[];
}

interface TreeNode<V> {
  value: V;
  leaves: TreeNode<V>[];
}

type VisitorFunc<V> = (node: TreeNode<V>, dependencyNode?: TreeNode<V>) => void;

export function visitTreeWithDependencies<V>(t: TreeRoot<V>, visitorFunc: VisitorFunc<V>): void {
  t.leaves.forEach(leafNode => {
    visitorFunc(leafNode);
    visitSubTreeWithDependencies(leafNode, visitorFunc);
  });
}

function visitSubTreeWithDependencies<V>(t: TreeNode<V>, visitorFunc: VisitorFunc<V>): void {
  t.leaves.forEach(leafNode => {
    visitorFunc(leafNode, t);
    visitSubTreeWithDependencies(leafNode, visitorFunc);
  });
}

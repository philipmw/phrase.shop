import {TreeRoot, visitTreeWithDependencies} from "./tree";

describe("tree", () => {
  describe(".visitTreeWithDependencies", () => {
    const tree: TreeRoot<string> = {
      leaves: [
        {
          value: "leaf 1",
          leaves: [],
        },
        {
          value: "leaf 2",
          leaves: [
            {
              value: "leaf 2's leaf 1",
              leaves: [],
            }
          ],
        },
        {
          value: "leaf 3",
          leaves: [],
        },
      ]
    };

    it("visits every node and passes the callback the node value and its dependency", () => {
      const visitedValues: string[] = [];
      const visitedDependencies: string[] = [];
      visitTreeWithDependencies(tree, (node, depNode) => {
        visitedValues.push(node.value);
        visitedDependencies.push(depNode?.value ?? "N/A");
      });

      expect(visitedValues).toHaveLength(4);
      expect(visitedDependencies).toHaveLength(4);

      expect(visitedValues).toEqual(["leaf 1", "leaf 2", "leaf 2's leaf 1", "leaf 3"]);
      expect(visitedDependencies).toEqual(["N/A", "N/A", "leaf 2", "N/A"]);
    });
  });
});

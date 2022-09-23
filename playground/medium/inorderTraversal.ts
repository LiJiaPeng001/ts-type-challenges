/**
 * @desc 在顺序遍历中实现二叉树的类型版本。
 */

const tree1 = {
  val: 1,
  left: {
    val: 4,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

type A1 = InorderTraversal<typeof tree1> // [1, 3, 2]

// 答案
interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type InorderTraversal<T extends TreeNode | null> =
  [T] extends [TreeNode]
  ? (
    [
      ...InorderTraversal<T['left']>,
      T['val'],
      ...InorderTraversal<T['right']>
    ]
  )
  : []
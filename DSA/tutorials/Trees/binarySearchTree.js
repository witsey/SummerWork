class TreeNode 
{
    constructor(val = 0, left = null, right = null) 
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree 
{
    constructor() 
    {
        this.root = null;
        this.size = 0;
        this.height = -1;
    }

    insert(val) // a method to insert a new value to the tree
    {
        const newNode = new TreeNode(val);
        if (this.root === null) {
            this.root = newNode;
            this.height = 0;
        }
        else {
            this.insertNode(this.root, newNode, 0)
        }
        this.size++;
    }

    insertNode(node, newNode, currentHeight) // a method to insert a node in it's correct position
    {
        if (newNode.val < node.val) {                               // if the new node is smaller than the current one it should be inserted to the left
            if (node.left === null) {
                node.left = newNode;                                    // since the left side of the node is empty, append the new one to the current one 
                this.height = Math.max(this.height, currentHeight + 1); // if the current branch height is the largest, update the height
            }
            else {                                                               // if there exist a node on the left side of the current one
                node.left = this.insertNode(node.left, newNode, currentHeight + 1) // recursivelly apply the inserting down to the left node
            }
        }
        else {                                                    
            if (node.right === null) 
            {
                node.right = newNode;
                this.height = Math.max(this.height, currentHeight + 1);
            }
            else {
                node.right = this.insertNode(node.right, newNode, currentHeight + 1);
            }
        }
        return node;
    }

    search(val, node = this.root) 
    {
        if (node === null)
            return false;

        if (node.val === val)
            return true
        
        else if (val < node.val)
            return this.search(val, node.left)

        else 
            return this.search(val, node.right)
    }


    preOrderTraversal(node = this.root) 
    {
        if (node === null)
            return
        
        console.log(node.val, ', ')
        this.preOrderTraversal(node.left)
        this.preOrderTraversal(node.right)
    }

    inOrderTraversal(node = this.root) 
    {
        if (node === null)
            return
        
        this.inOrderTraversal(node.left)
        console.log(node.val, ', ')
        this.inOrderTraversal(node.right)
    }

    postOrderTraversal(node = this.root)
    {
        if (node === null)
            return

        this.postOrderTraversal(node.left)
        this.postOrderTraversal(node.right)
        console.log(node.val, ', ')
    }
    
    getSize() {return this.size}
    getHeight() {return this.height} 
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(17);

tree.postOrderTraversal()
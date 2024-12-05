class TreeNode 
{
    constructor(val = 0, left = null, right = null) 
    {
        this.val = val;
        this.left = left;
        this.right = right;
        this.height = -1;
    }

    updateHeight() {this.height = 1 + Math.max(this.left ? this.left.height : -1, this.right ? this.right.height : -1)}
    getBalanceFactor() {return this ? (this.right ? this.right.height : -1) - (this.left ? this.left.height : 0) : -1}
}


class AVLBinaryTree 
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

        node.updateHeight();

        if (node.getBalanceFactor() > 1 || node.getBalanceFactor() < -1) {this.balance(node, node.getBalanceFactor())}

        return node;
    }


    balance(node, balanceFactor) 
    {
        if (balanceFactor < -1) // Left heavy
        {
            if (node.left.getBalanceFactor() > 0) // LR Case
                node.left = this.rotateLeft(node.left);

            return this.rotateRight(node);
        }
        else // Right heavy
        {
            if (node.right.getBalanceFactor() < 0) // RL case
                node.right = this.rotateRight(node.right)
            
            return this.rotateLeft(node);
        }
    }
    

    rotateRight(node) 
    {
        const leftDummy = node.left;          // set a dummy to be the left child of our node
        const rightDummy = leftDummy.right;  // set another dummy to hold the right child of the left child of our node

        leftDummy.right = node;              // now do the rotation by assiging our node as the right child of it's left child (the left child is now a parent)
        node.left = rightDummy;             // to prevent any node loss, assign the right child of prev left child as the right child of our node
        
        node.updateHeight();
        leftDummy.updateHeight();          // update heights

        return leftDummy                  // return the new root of the tree (or subtree)
    }


    rotateLeft(node) 
    {
        const rightDummy = node.right;
        const leftDummy = rightDummy.left;

        rightDummy.left = node;
        node.right = leftDummy;

        node.updateHeight();
        rightDummy.updateHeight();

        return rightDummy;
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


    minNode(node) 
    {
        let current = node;
        while (current.left) 
        {
            current = current.left
        }
        return current.val;
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
    
    getTreeSize() {return this.size}
    getTreeHeight() {return this.height} 
}


const tree = new AVLBinaryTree();
tree.insert(10);
tree.insert(0);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(17);

tree.postOrderTraversal();
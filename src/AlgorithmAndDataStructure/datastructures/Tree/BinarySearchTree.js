//Concept: RootNode-only two child of each
//               4
//              /  \
//             6    20
//            / \    /\
//           1   33  15 170
//Traversing Alog:
// Tranverse from root check if there is left node. if there is
//and root node is less than left node, goto the left and assign left = currentNode;
//Check if right node

class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    /**
     * insert in tree(making a tree);
     * @param value
     */
    insert(value){
        let newNode = new Node(value);
        if(this.root ===null){
            this.root = newNode;
        } else {
            let currentNode = this.root
            //if there is root node make a comparison to left
            //here we do not which node is less than the root node so we will find until
            //we find the node is less than newNode value. so will make while loop true
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else{
                    if(value > currentNode.value){
                        if(!currentNode.right){
                            currentNode.right = newNode;
                            return this;
                        }
                        currentNode = currentNode.right;
                    }
                }

            }
        }
        return this;
    }

    //search in tree
    /**
     * check if value is equal to the currentNode.value then return that node else
     * assign left and right value in current node.
     */
    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while (currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            } else if(value > currentNode.value){
                currentNode = currentNode.right
            } else if(value === currentNode.value){
                return currentNode;
            }
        }
        return false
    }

    //delet a node from tree
    remove(value){
        let node = new Node(value);
        if(!this.root) {
            return false;
        }
        let currentNode = this.root;
        let successor = this.getSucessor(value, currentNode);
        console.log('successor::', successor);
        return this;
    }

    traverse(){

    }

    getSucessor(value,currentNode){
        while (currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            } else if(value > currentNode.value){
                currentNode = currentNode.right
            } else if(value === currentNode.value){
                if(currentNode.right){
                    let tempNode = currentNode.right;
                    currentNode.value = tempNode.value
                    currentNode = tempNode;
                } else {
                    currentNode = null;
                }
                return currentNode;
            }
        }
        return false;
    }
}

const tree = new BinarySearchTree();
tree.insert(4);
tree.insert(6);
tree.insert(33);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.lookup(20);
tree.remove(33)
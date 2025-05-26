// Create an empty array to act as the stack
let stack = [];

// Peek function to check if stack is empty and return the top value
function peek(grocery_stack) {
    if (grocery_stack.length === 0) {
        console.log("Stack is empty.");
        return null;
    } else {
        console.log("Top of stack:", grocery_stack[grocery_stack.length - 1]);
        return grocery_stack[grocery_stack.length - 1];
    }
}

// Push function to add an item to the stack
function push(grocery_stack, item) {
    grocery_stack.push(item);
    peek(stack);
    console.log("Stack after push:", grocery_stack);
}

// Pop function to remove the last item from the stack
function pop(grocery_stack) {
    if (grocery_stack.length === 0) {
        console.log("Cannot pop. Stack is empty.");
        peek(grocery_stack);
        return null;
    }
    let removed = grocery_stack.pop();
    peek(grocery_stack);
    console.log("Stack after pop:", grocery_stack);
    return removed;
}

// Accept five grocery items from user
for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item #${i + 1}:`);
    push(stack, item);
}

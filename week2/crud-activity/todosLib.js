let toDoArray = [];
let nextId = 1;

function addOne(task, completed, dueDate) {
    if (!task || completed === undefined || !dueDate) {
        return false;
    }

    const newToDo = {
        id: nextId++,
        task,
        completed,
        dueDate
    };

    toDoArray.push(newToDo);
    return newToDo;
}

function getAll() {
    return toDoArray;
}

function findById(id) {
    const numericId = Number(id);
    return toDoArray.find(item => item.id === numericId) || false;
}

function updateOneById(id, updatedData) {
    const toDo = findById(id);
    if (toDo) {
        if (updatedData.task !== undefined) toDo.task = updatedData.task;
        if (updatedData.completed !== undefined) toDo.completed = updatedData.completed;
        if (updatedData.dueDate !== undefined) toDo.dueDate = updatedData.dueDate;
        return toDo;
    }
    return false;
}

function deleteOneById(id) {
    const numericId = Number(id);
    const initialLength = toDoArray.length;
    toDoArray = toDoArray.filter(toDo => toDo.id !== numericId);
    return toDoArray.length < initialLength;
}

// Testing the Module
if (require.main === module) {
    let result = addOne("Buy groceries", false, "2025-08-30");
    console.log(result);
    result = addOne("Study english", true, "2025-10-29");
    console.log(result);

    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { task: "Exercise", completed: false }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}

// Export the ToDos object so that the functions can be used in other modules
const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;

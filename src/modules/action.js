// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    GET_ITEMS: "GET_ITEMS",
    GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS",
    SAVE_STUDENT: "SAVE_STUDENT",
    SAVE_CLASS: "SAVE_CLASS",
    GET_INFO: "GET_INFO",
    GET_INFO_SUCCESS: "GET_INFO_SUCCESS",
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });

  const getItems = () => ({
    type: Types.GET_ITEMS
  });

  const saveStudent = (studentName, studentCode) => ({
    type: Types.SAVE_STUDENT,
    name: studentName,
    code: studentCode
  });

  const saveClass = (className, classCode) => ({
    type: Types.SAVE_CLASS,
    name: className,
    code: classCode
  });

  const getInfo = () => ({
    type: Types.GET_INFO
  });

  export default {
    createItem,
    deleteItem,
    getItems,
    saveStudent,
    saveClass,
    getInfo,
    Types
  };
import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [],
  studentName: "",
  studentCode: "",
  className: "",
  classCode: ""
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.GET_ITEMS_SUCCESS: {
      let items = action.items;
      let newState = _.cloneDeep(state);
      newState.items = items;
      return newState;
    }

    case ACTIONS.Types.CREATE_ITEM: {
      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.SAVE_STUDENT: {
      let name = action.name;
      let code = action.code;
      let newState = _.cloneDeep(state);
      newState.studentName = name;
      newState.studentCode = code;
      return newState;
    }

    case ACTIONS.Types.SAVE_CLASS: {
      let name = action.name;
      let code = action.code;
      let newState = _.cloneDeep(state);
      newState.className = name;
      newState.classCode = code;
      return newState;
    }


    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;
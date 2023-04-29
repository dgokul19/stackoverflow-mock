export const ADD_QUESTIONS = 'ADD_QUESTIONS';

function stackReducer(state, action) {
    switch (action.type) {
      case 'ADD_QUESTIONS': {
        const { question } = action.payload || {};
        return {
            ...state,
            questions : [
                ...state.questions,
                {...question}
            ]
        };
      }
      default: {
        return state;
      }
    }
  }

  export { stackReducer };
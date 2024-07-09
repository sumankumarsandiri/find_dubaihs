const MainReducer = (state, action) => {
    switch (action.type) {
      case "SET_ALLSERVICES_LOADING":
        return {
          ...state,
          isLoading: true,
        };
      case "SET_ALLSERVICES_DATA":
        return {
          ...state,
          isLoading: false,
          services: action.payload.services,
          totalPages: action.payload.totalPages,
          page: action.payload.page,
          limit: action.payload.limit,
          totalServices: action.payload.totalServicesCount
        };
        case "ADDSERVICE_LOADING":
          return {
            ...state,
            isLoading: true,
        };
        case "ADDSERVICE_LOADING_RESULT":
          return {
            ...state,
            isLoading: false,
        };
        case "DELETESERVICE_LOADING":
          return {
            ...state,
            isLoading: true,
        };
        case "DELETESERVICE_LOADING_RESULT":
          return {
            ...state,
            isLoading: false,
        };
        case "SEARCH_FILTER":
          return {
            ...state,
            query: action.payload,
        };
        case "DECREMENT_PAGE":
          let pageResult = state.page;
          if (pageResult > 1) {
            pageResult = pageResult - 1;
          }
            return {
              ...state,
              isLoading: false,
              page: pageResult
              
          };
      case "INCREMENT_PAGE":
        let myPage = state.page + 1;
        if (myPage > state.totalPages) {
          myPage = 1;
        }
          return {
            ...state,
            isLoading: false,
            page: myPage
            
        };
        case "GETTING_PAGE_NUMBER":
            return {
              ...state,
              page: action.payload
              
          };
        case "GETSERVICE_LOADING":
          return {
            ...state,
            isLoading: true,
        };
        case "GETTING_SERVICE_DETAILS":
          return {
            ...state,
            isLoading: false,
            inputData: action.payload
          };
      default:
        return state;
    }
  };
  
  export default MainReducer;
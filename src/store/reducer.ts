export const reducer = (action: any, prevState: any) => {
    switch (action.type) {
      case "NAVIGATE":
        prevState.screen = action.payload;
        break;

        case "SETUSER":
        prevState.user = action.payload;
        break;
    }
  
    return prevState;
  };
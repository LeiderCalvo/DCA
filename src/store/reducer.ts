export const reducer = (currentAction: any, currentState: any) => {
    const { type, payload } = currentAction; 

    switch (type) {    
        case "NAVIGATE":
            currentState.screen = payload
        break;
    }

    return currentState;
}
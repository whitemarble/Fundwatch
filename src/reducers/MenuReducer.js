const initialState = {
    MobileMenuClass:"mobile-menu",
    MBopen:"mobile-button button-on",
    MBclose:"mobile-button button-off"
}

const MenuReducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case 'mmopen':
        return {
            MobileMenuClass: "mobile-menu-open",
            MBopen:"mobile-button button-off",
            MBclose:"mobile-button button-on"
        };
        case 'mmclose':
        return {
            MobileMenuClass: "mobile-menu",
            MBopen:"mobile-button button-on",
            MBclose:"mobile-button button-off"
        }
        case 'mmclicked':
        return {
            MobileMenuClass: "mobile-menu",
            MBopen:"mobile-button button-on",
            MBclose:"mobile-button button-off"
        }
        default:
        return state;
    }
    
}

export default MenuReducer
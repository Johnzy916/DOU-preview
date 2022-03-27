// DARK reducer
export default (state, action) => {
    switch (action.type) {
        case 'SET_DARK_MODE':
            return {
                ...state,
                isDarkMode: action.isDark
            }
        default: return state;
    }
}

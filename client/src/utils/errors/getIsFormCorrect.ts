const getIsFormValid = (...isValidInput: boolean[]) => {
    return isValidInput.every(Boolean);
}

export default getIsFormValid;
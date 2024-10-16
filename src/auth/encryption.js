export const encrypt = (value) => {
    return window.btoa(value);
}

export const decrypt = (value) => {
    return window.atob(value)

}
export const findTerm = (string) => {
    let subStr= string.split('=')
    let middle = subStr[1]
    let find = middle.split('&')[0]
    return find
}

export const nearTerm = (string) => {
    return string.split('=')[2]
}
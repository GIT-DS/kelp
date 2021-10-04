export const findTerm = (string) => {
    let subStr= string.split('=')
    let middle = subStr[1]
    let mid2 = middle.split('&')[0]
    let find = mid2.split('%20').join(' ')
    return find
}

export const nearTerm = (string) => {
    let mid = string.split('=')[2]
    let near = mid.split('%20').join(' ')
    return near
}
export const getImageURL = imageName => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
}

export const randomSport = 
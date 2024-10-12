export const getImageUrl = (fileName: string, extension: string = "svg") => {
    return new URL(`../assets/images/${fileName}.${extension}`, import.meta.url)
        .href;
};

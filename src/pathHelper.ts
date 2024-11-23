export const getImageUrl = (fileName: string, extension: string = "jpg") => {
    return new URL(, import.meta.url)
        .href;
};

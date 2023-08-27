import { defineStore } from "pinia";

export const useImageStore = defineStore("imagestore", {
    state: () => ({
        image: '' as string,
        predefinedImages: [
            "/images/hero-image-1.webp",
            "/images/hero-image-2.jpeg",
            "/images/hero-image-3.webp",
        ] as string[],
    }),

    actions: {
        addToPredifinedImages(image: string) {
            this.predefinedImages.unshift(image)
        },
        selectImage(image: string) {
            this.image = image
        }
    },
});

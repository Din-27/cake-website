import { useKeenSlider } from "keen-slider/react"

export const KeenSlider = (update) => {

    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        rtl: true,
        breakpoints: {
            "(min-width: 600px)": {
                slides: { perView: 2, spacing: 10 },
            },
            "(min-width: 800px)": {
                slides: { perView: 3, spacing: 10 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 4, spacing: 10 },
            },
        },
        slides: { perView: update },
    })
    return ref
}
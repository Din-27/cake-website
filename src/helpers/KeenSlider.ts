import { useKeenSlider } from "keen-slider/react"

export const KeenSlider = (update) => {

    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        // rtl: true,
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
        slides: { perView: update, spacing: 0 },
    }, [
        (slider) => {
            let timeout: ReturnType<typeof setTimeout>
            let mouseOver = false
            function clearNextTimeout() {
                clearTimeout(timeout)
            }
            function nextTimeout() {
                clearTimeout(timeout)
                if (mouseOver) return
                timeout = setTimeout(() => {
                    slider.next()
                }, 2000)
            }
            slider.on("created", () => {
                // slider.container.addEventListener("mouseover", () => {
                //     mouseOver = true
                //     clearNextTimeout()
                // })
                slider.container.addEventListener("mouseout", () => {
                    mouseOver = false
                    nextTimeout()
                })
                nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
        },
    ])
    return ref
}
// on page load, scroll to page top

const scrollToTop = () => {
    window.scrollTo({
       top: 0,
       behavior: "instant"
    })
}

export default scrollToTop
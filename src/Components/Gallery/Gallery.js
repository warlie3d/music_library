import GalleryItem from "./GalleryItem"
//handles the display
function Gallery({ data }) {
    const display = data.map(item => {
        //to get the unique id from the gallery item
        return <GalleryItem key={item.trackId} item={item} />
    })
    return (
        <div>
            {/* put data on the screen */}
            {display}
        </div>
    )
}

export default Gallery
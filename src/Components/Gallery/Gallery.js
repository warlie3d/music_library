import GalleryItem from "./GalleryItem"

function Gallery({ data }) {
    const display = data.map(item => {
        //to get the unique id from the search bar 
        return <GalleryItem key={item.trackId} item={item} />
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
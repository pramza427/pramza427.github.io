function PictureGrid({imgObj}) {
    console.log(imgObj)

    return (
        <div className="container mx-auto mb-10 w-full 2xl:w-1/2 text-center">
            <div className="carouselContainer">
                <div className="carousel">
                    {imgObj.map((img, idx) => (
                        <div key={idx} className="w-full h-full relative" >
                            <img src={img.url} className="object-fill" />
                            <div className="absolute bottom-10 right-1/2">
                                {img.location}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PictureGrid;
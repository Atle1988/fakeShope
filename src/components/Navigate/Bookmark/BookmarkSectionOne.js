// bookmark-spacer = margin-top: 70px;

export default function BookmarkSectionOne(){
    return(
        <>
            <div className="bookmarkOne bookmark-spacer">
                <div className="bookmarkOne-left">
                    <h1>A Simple Bookmark Manager</h1>
                    <p>A clean and simple interface to organize your favourite websites. Open a new 
                    browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="bookmarkOne-btn">
                        <button>Get it on Chrome</button>
                        <button>Get it on Firefox</button>
                    </div>
                </div>
                <div className="bookmarkOne-right">
                </div> 
            </div>
        </>
    )
}
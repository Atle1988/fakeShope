import BookmarkNav from "./BookmarkNav"
import BookmarkSectionOne from "./BookmarkSectionOne"
import Features from "./Features"
import Extension from "./Extension"
import Questions from "./Questions"
import BookmarkFooter from "./BookmarkFooter"


export default function Bookmark(){
    return(
        <div className="bookmark-wrapper">
            <BookmarkNav />
            <BookmarkSectionOne />
            <Features />
            <Extension />
            <Questions />
            <BookmarkFooter />
        </div>
    )
}


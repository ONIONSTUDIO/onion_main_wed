import React from "react";
import { Book } from "./book/book";
import bookData from "./book/bookData";

const BookElement = bookData.map(items =>
    <Book
       key = {items.id}
       {...items}
       />)

export function Work() {
    return(
        <>
            <div className="work-main">
                <h1>This is Work Page</h1>
                <h2>calll the api from mongo db to print list of book availllable</h2>
                {BookElement}
            </div>
        </>
    )
}
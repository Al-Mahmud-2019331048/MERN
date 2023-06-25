import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const firstBook={
    author:"Rebecca Yarros",
    title:"Iron Flame (The Empyrean, 2)",
    img:"./images/book1.jpg"
}

const secondBook={
    author:"Rebecca Yarros",
    title:"Fourth Wing",
    img:"./images/book2.jpg"
}

const thirdBook={
    author:"Koolen Younger",
    title:"It Starts with Us",
    img:"./images/book3.jpg"
}


const BookList=()=>{
    return(
        <section className='booklist'>
            <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>

            <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
            
            <Book author={thirdBook.author} title={thirdBook.title} img={thirdBook.img}/>
        </section>
    )
}

const Book=(props)=>{
    console.log(props);
    return(
        <article className='book'>
            <img src={props.img} alt={props.title} />
            <h2>{props.title} </h2>
            <h4> {props.author}</h4>
        </article>
    );
}


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);
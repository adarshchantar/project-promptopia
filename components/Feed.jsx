'use client';
import { useState, useEffect } from "react"
import PromptCard from "./PromptCard";

const PromptCardList = ({data, handleTagClick}) => {
  return(
    <div className="mt-16 prompt_layout">
       { data.map((post) => (
          <PromptCard key={post.id} post={post} handleTagClick={handleTagClick}/>
       ))}
      </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [post, setPost] = useState([]);

  const handlesearchChange = (e) => {
  }

  useEffect(() => {
    const fetchPosts = async () => {
       const response = await fetch('/api/prompt');
       const data = await response.json();

        setPost(data);
    }
    fetchPosts();

  }, []);

  return (
    <section className="feed">
       <form className="relative w-full flex-center">
          <input type="text" placeholder="Search for a tag or username" className="search_input peer"
          value={searchText} onChange={handlesearchChange} required
          />

        </form>

        <PromptCardList data={post} handleTagClick={()=>{}}/>
      </section>
  )
}

export default Feed
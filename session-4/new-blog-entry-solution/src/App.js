import React, {useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import BlogEntryList from './components/blog/list/List';
import blogListData from './data/blog-entries'
import New from './components/blog/new/New';


function App() {
  const [blogEntries, setBlogEntries] = useState(blogListData)
  const handlePublishedBlogEntries = blogEntries.filter(blogEntry => {
    return blogEntry.publish
  })
  const handleAddNewToList = (blog) => {
    setBlogEntries([...blogEntries, blog])
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <New addBlogEntry={handleAddNewToList} />
          </div>
          <div className="col">
            <BlogEntryList list={handlePublishedBlogEntries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

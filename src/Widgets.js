import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (    
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Quinn's React Project Done", "Breaking News")}
      {newsArticle("Chinese spy balloon shot down", "Top news - 10,567 readers?")}
      {newsArticle("COVID 19 gone?", "Bottom news - 5 readers!")}
      {newsArticle("Sydney rental crisis", "We'll have to move!")}
      {newsArticle("World War 3?", "We are on the brink")}
      {newsArticle("A semester overseas?", "I think it's a bit late for me 🥲")}
    </div>
  );
}

export default Widgets
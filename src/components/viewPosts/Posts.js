import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

import Spinner from '../Spinner/Spinner';
import PostItem from './PostItem';

const Posts = (props) => {

    const modelData = 
    {
        "status": "ok",
        "totalResults": 37,
        "articles": [
            {
                "_id": "1245695256",
                "author": "CNBC",
                "authorId":"41546454",
                "title": "Stock futures fall after Wednesday's afternoon market slide: Live updates - CNBC",
                "mainPost": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!",
                "imageUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0weWFPSVZFYnZXbnllZTJ3bkNHZkpEZWFwdnRZdDg1by1qc05hWnFodkNhQkRUd2dhdnFndVQyZG5uZkx1OVRXVUlQbGJwSlZSTHJjM0cwb205d3lBZW9DV0dBbjJ5dmJFV0tXUllKa3RFNmJ5U1pB0gF8QVVfeXFMTXRnbFhISGtaSDhsLV9scXE2RHVoS0JFOUd6ZXBCSDBPVFNFdlVqZUxHdDIyM0VZMUU0RWQ1dXZEQ2J0NzAxMUJxNk5MU1J0V2hyOEY2WUd4RDdmVWpOZWVXT05OMUQ0dUdqb0FXT3pmX3RONUdxcDRIRldHNg?oc=5",
                "publishedAt": "2024-08-08T00:01:00Z",
            
            },
            {
                "_id": "1245695254",
                "author": "CNBC",
                "authorId":"41546454",
                "title": "Stock futures fall after Wednesday's afternoon market slide: Live updates - CNBC",
                "mainPost": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!",
                "imageUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0weWFPSVZFYnZXbnllZTJ3bkNHZkpEZWFwdnRZdDg1by1qc05hWnFodkNhQkRUd2dhdnFndVQyZG5uZkx1OVRXVUlQbGJwSlZSTHJjM0cwb205d3lBZW9DV0dBbjJ5dmJFV0tXUllKa3RFNmJ5U1pB0gF8QVVfeXFMTXRnbFhISGtaSDhsLV9scXE2RHVoS0JFOUd6ZXBCSDBPVFNFdlVqZUxHdDIyM0VZMUU0RWQ1dXZEQ2J0NzAxMUJxNk5MU1J0V2hyOEY2WUd4RDdmVWpOZWVXT05OMUQ0dUdqb0FXT3pmX3RONUdxcDRIRldHNg?oc=5",
                "publishedAt": "2024-08-08T00:01:00Z",
            
            },
            {
                "_id": "1245695258",
                "author": "CNBC",
                "authorId":"41546454",
                "title": "Stock futures fall after Wednesday's afternoon market slide: Live updates - CNBC",
                "mainPost": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!",
                "imageUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0weWFPSVZFYnZXbnllZTJ3bkNHZkpEZWFwdnRZdDg1by1qc05hWnFodkNhQkRUd2dhdnFndVQyZG5uZkx1OVRXVUlQbGJwSlZSTHJjM0cwb205d3lBZW9DV0dBbjJ5dmJFV0tXUllKa3RFNmJ5U1pB0gF8QVVfeXFMTXRnbFhISGtaSDhsLV9scXE2RHVoS0JFOUd6ZXBCSDBPVFNFdlVqZUxHdDIyM0VZMUU0RWQ1dXZEQ2J0NzAxMUJxNk5MU1J0V2hyOEY2WUd4RDdmVWpOZWVXT05OMUQ0dUdqb0FXT3pmX3RONUdxcDRIRldHNg?oc=5",
                "publishedAt": "2024-08-08T00:01:00Z",
            
            },
            {
                "_id": "1245695259",
                "author": "CNBC",
                "authorId":"41546454",
                "title": "Stock futures fall after Wednesday's afternoon market slide: Live updates - CNBC",
                "mainPost": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!",
                "imageUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0weWFPSVZFYnZXbnllZTJ3bkNHZkpEZWFwdnRZdDg1by1qc05hWnFodkNhQkRUd2dhdnFndVQyZG5uZkx1OVRXVUlQbGJwSlZSTHJjM0cwb205d3lBZW9DV0dBbjJ5dmJFV0tXUllKa3RFNmJ5U1pB0gF8QVVfeXFMTXRnbFhISGtaSDhsLV9scXE2RHVoS0JFOUd6ZXBCSDBPVFNFdlVqZUxHdDIyM0VZMUU0RWQ1dXZEQ2J0NzAxMUJxNk5MU1J0V2hyOEY2WUd4RDdmVWpOZWVXT05OMUQ0dUdqb0FXT3pmX3RONUdxcDRIRldHNg?oc=5",
                "publishedAt": "2024-08-08T00:01:00Z",
            
            },
            {
                "_id": "1245695251",
                "author": "CNBC",
                "authorId":"41546454",
                "title": "Stock futures fall after Wednesday's afternoon market slide: Live updates - CNBC",
                "mainPost": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!",
                "imageUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0weWFPSVZFYnZXbnllZTJ3bkNHZkpEZWFwdnRZdDg1by1qc05hWnFodkNhQkRUd2dhdnFndVQyZG5uZkx1OVRXVUlQbGJwSlZSTHJjM0cwb205d3lBZW9DV0dBbjJ5dmJFV0tXUllKa3RFNmJ5U1pB0gF8QVVfeXFMTXRnbFhISGtaSDhsLV9scXE2RHVoS0JFOUd6ZXBCSDBPVFNFdlVqZUxHdDIyM0VZMUU0RWQ1dXZEQ2J0NzAxMUJxNk5MU1J0V2hyOEY2WUd4RDdmVWpOZWVXT05OMUQ0dUdqb0FXT3pmX3RONUdxcDRIRldHNg?oc=5",
                "publishedAt": "2024-08-08T00:01:00Z",
            
            },
            {
                "_id": "1245695233",
                "author": "CNBC",
                "authorId":"41546454",
                "title": "Stock futures fall after Wednesday's afternoon market slide: Live updates - CNBC",
                "mainPost": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!",
                "imageUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0weWFPSVZFYnZXbnllZTJ3bkNHZkpEZWFwdnRZdDg1by1qc05hWnFodkNhQkRUd2dhdnFndVQyZG5uZkx1OVRXVUlQbGJwSlZSTHJjM0cwb205d3lBZW9DV0dBbjJ5dmJFV0tXUllKa3RFNmJ5U1pB0gF8QVVfeXFMTXRnbFhISGtaSDhsLV9scXE2RHVoS0JFOUd6ZXBCSDBPVFNFdlVqZUxHdDIyM0VZMUU0RWQ1dXZEQ2J0NzAxMUJxNk5MU1J0V2hyOEY2WUd4RDdmVWpOZWVXT05OMUQ0dUdqb0FXT3pmX3RONUdxcDRIRldHNg?oc=5",
                "publishedAt": "2024-08-08T00:01:00Z",
            
            },
            {
                "_id": "12456952488",
                "author": "CNBC",
                "authorId":"41546454",
                "title": "Stock futures fall after Wednesday's afternoon market slide: Live updates - CNBC",
                "mainPost": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!",
                "imageUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0weWFPSVZFYnZXbnllZTJ3bkNHZkpEZWFwdnRZdDg1by1qc05hWnFodkNhQkRUd2dhdnFndVQyZG5uZkx1OVRXVUlQbGJwSlZSTHJjM0cwb205d3lBZW9DV0dBbjJ5dmJFV0tXUllKa3RFNmJ5U1pB0gF8QVVfeXFMTXRnbFhISGtaSDhsLV9scXE2RHVoS0JFOUd6ZXBCSDBPVFNFdlVqZUxHdDIyM0VZMUU0RWQ1dXZEQ2J0NzAxMUJxNk5MU1J0V2hyOEY2WUd4RDdmVWpOZWVXT05OMUQ0dUdqb0FXT3pmX3RONUdxcDRIRldHNg?oc=5",
                "publishedAt": "2024-08-08T00:01:00Z",
            
            },
            {
                "_id": "1245695225",
                "author": "CNBC",
                "authorId":"41546454",
                "title": "Stock futures fall after Wednesday's afternoon market slide: Live updates - CNBC",
                "mainPost": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!",
                "imageUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0weWFPSVZFYnZXbnllZTJ3bkNHZkpEZWFwdnRZdDg1by1qc05hWnFodkNhQkRUd2dhdnFndVQyZG5uZkx1OVRXVUlQbGJwSlZSTHJjM0cwb205d3lBZW9DV0dBbjJ5dmJFV0tXUllKa3RFNmJ5U1pB0gF8QVVfeXFMTXRnbFhISGtaSDhsLV9scXE2RHVoS0JFOUd6ZXBCSDBPVFNFdlVqZUxHdDIyM0VZMUU0RWQ1dXZEQ2J0NzAxMUJxNk5MU1J0V2hyOEY2WUd4RDdmVWpOZWVXT05OMUQ0dUdqb0FXT3pmX3RONUdxcDRIRldHNg?oc=5",
                "publishedAt": "2024-08-08T00:01:00Z",
            
            },
            {
                "_id": "1245695226",
                "author": "CNBC",
                "authorId":"41546454",
                "title": "Stock futures fall after Wednesday's afternoon market slide: Live updates - CNBC",
                "mainPost": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!",
                "imageUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0weWFPSVZFYnZXbnllZTJ3bkNHZkpEZWFwdnRZdDg1by1qc05hWnFodkNhQkRUd2dhdnFndVQyZG5uZkx1OVRXVUlQbGJwSlZSTHJjM0cwb205d3lBZW9DV0dBbjJ5dmJFV0tXUllKa3RFNmJ5U1pB0gF8QVVfeXFMTXRnbFhISGtaSDhsLV9scXE2RHVoS0JFOUd6ZXBCSDBPVFNFdlVqZUxHdDIyM0VZMUU0RWQ1dXZEQ2J0NzAxMUJxNk5MU1J0V2hyOEY2WUd4RDdmVWpOZWVXT05OMUQ0dUdqb0FXT3pmX3RONUdxcDRIRldHNg?oc=5",
                "publishedAt": "2024-08-08T00:01:00Z",
            
            },
            {
                "_id": "1245695211",
                "author": "CNBC",
                "authorId":"41546454",
                "title": "Stock futures fall after Wednesday's afternoon market slide: Live updates - CNBC",
                "mainPost": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!",
                "imageUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0weWFPSVZFYnZXbnllZTJ3bkNHZkpEZWFwdnRZdDg1by1qc05hWnFodkNhQkRUd2dhdnFndVQyZG5uZkx1OVRXVUlQbGJwSlZSTHJjM0cwb205d3lBZW9DV0dBbjJ5dmJFV0tXUllKa3RFNmJ5U1pB0gF8QVVfeXFMTXRnbFhISGtaSDhsLV9scXE2RHVoS0JFOUd6ZXBCSDBPVFNFdlVqZUxHdDIyM0VZMUU0RWQ1dXZEQ2J0NzAxMUJxNk5MU1J0V2hyOEY2WUd4RDdmVWpOZWVXT05OMUQ0dUdqb0FXT3pmX3RONUdxcDRIRldHNg?oc=5",
                "publishedAt": "2024-08-08T00:01:00Z",
            
            },
            {
                "_id": "1245695289",
                "author": "CNBC",
                "authorId":"41546454",
                "title": "Stock futures fall after Wednesday's afternoon market slide: Live updates - CNBC",
                "mainPost": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!",
                "imageUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0weWFPSVZFYnZXbnllZTJ3bkNHZkpEZWFwdnRZdDg1by1qc05hWnFodkNhQkRUd2dhdnFndVQyZG5uZkx1OVRXVUlQbGJwSlZSTHJjM0cwb205d3lBZW9DV0dBbjJ5dmJFV0tXUllKa3RFNmJ5U1pB0gF8QVVfeXFMTXRnbFhISGtaSDhsLV9scXE2RHVoS0JFOUd6ZXBCSDBPVFNFdlVqZUxHdDIyM0VZMUU0RWQ1dXZEQ2J0NzAxMUJxNk5MU1J0V2hyOEY2WUd4RDdmVWpOZWVXT05OMUQ0dUdqb0FXT3pmX3RONUdxcDRIRldHNg?oc=5",
                "publishedAt": "2024-08-08T00:01:00Z",
            
            },
            {
                "_id": "1245695123",
                "author": "CNBC",
                "authorId":"41546454",
                "title": "Stock futures fall after Wednesday's afternoon market slide: Live updates - CNBC",
                "mainPost": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!",
                "imageUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0weWFPSVZFYnZXbnllZTJ3bkNHZkpEZWFwdnRZdDg1by1qc05hWnFodkNhQkRUd2dhdnFndVQyZG5uZkx1OVRXVUlQbGJwSlZSTHJjM0cwb205d3lBZW9DV0dBbjJ5dmJFV0tXUllKa3RFNmJ5U1pB0gF8QVVfeXFMTXRnbFhISGtaSDhsLV9scXE2RHVoS0JFOUd6ZXBCSDBPVFNFdlVqZUxHdDIyM0VZMUU0RWQ1dXZEQ2J0NzAxMUJxNk5MU1J0V2hyOEY2WUd4RDdmVWpOZWVXT05OMUQ0dUdqb0FXT3pmX3RONUdxcDRIRldHNg?oc=5",
                "publishedAt": "2024-08-08T00:01:00Z",
            
            },
            {
                "_id": "1245695456",
                "author": "CNBC",
                "authorId":"41546454",
                "title": "Stock futures fall after Wednesday's afternoon market slide: Live updates - CNBC",
                "mainPost": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!",
                "imageUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0weWFPSVZFYnZXbnllZTJ3bkNHZkpEZWFwdnRZdDg1by1qc05hWnFodkNhQkRUd2dhdnFndVQyZG5uZkx1OVRXVUlQbGJwSlZSTHJjM0cwb205d3lBZW9DV0dBbjJ5dmJFV0tXUllKa3RFNmJ5U1pB0gF8QVVfeXFMTXRnbFhISGtaSDhsLV9scXE2RHVoS0JFOUd6ZXBCSDBPVFNFdlVqZUxHdDIyM0VZMUU0RWQ1dXZEQ2J0NzAxMUJxNk5MU1J0V2hyOEY2WUd4RDdmVWpOZWVXT05OMUQ0dUdqb0FXT3pmX3RONUdxcDRIRldHNg?oc=5",
                "publishedAt": "2024-08-08T00:01:00Z",
            
            },
            {
                "_id": "1245695789",
                "author": "CNBC",
                "authorId":"41546454",
                "title": "Stock futures fall after Wednesday's afternoon market slide: Live updates - CNBC",
                "mainPost": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!. Ad optio quo iure tempora odio, unde ipsa blanditiis fuga mollitia autem!",
                "imageUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0weWFPSVZFYnZXbnllZTJ3bkNHZkpEZWFwdnRZdDg1by1qc05hWnFodkNhQkRUd2dhdnFndVQyZG5uZkx1OVRXVUlQbGJwSlZSTHJjM0cwb205d3lBZW9DV0dBbjJ5dmJFV0tXUllKa3RFNmJ5U1pB0gF8QVVfeXFMTXRnbFhISGtaSDhsLV9scXE2RHVoS0JFOUd6ZXBCSDBPVFNFdlVqZUxHdDIyM0VZMUU0RWQ1dXZEQ2J0NzAxMUJxNk5MU1J0V2hyOEY2WUd4RDdmVWpOZWVXT05OMUQ0dUdqb0FXT3pmX3RONUdxcDRIRldHNg?oc=5",
                "publishedAt": "2024-08-08T00:01:00Z",
            
            }
    
        ]
    }



    
  const fetchMoreData = async () => {

  };


  return (
    <div>
         <h1 className='container' style={{marginTop: '62px'}}>Top Headlines - {props.category?props.category:"General"}</h1>
    
    {/* ------------------- Using Spinner -------------------- */}
    <InfiniteScroll
      dataLength={modelData.articles.length}
      next={fetchMoreData}
      hasMore={modelData.articles.length !== modelData.totalResults}
      loader={<Spinner/>}
    > 

<div className="container">
    <div className="row" >
      {modelData.articles.map((element) => {

        return <div className="col-md-4" key={element.url}>
          {/* <PostItem title={element.title} description={element.mainPost} imgUrl={element.imageUrl} newsUrl={element.url} date={element.publishedAt} author={element.author} */}
          <PostItem postId= {element._id} title={element.title} description={element.mainPost} imgUrl={element.imageUrl} date={element.publishedAt} author={element.author} />
        </div>




      })}
    </div>

    </div>
    </InfiniteScroll>
    </div>
  )
}

export default Posts

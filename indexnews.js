const apiKey = '1455b929237dacb1145484bb186cd80c';
const apiUrl = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=any&max=5&apikey=${apiKey}`; // Corrected apiUrl

//top 10 news
const topTitle= document.querySelector('.title')
const topImg= document.querySelector('.top-img')
const topDes= document.querySelector('.description')
const topten= document.querySelector('.top-news')




async function getWorldNews() {
  
    const response = await fetch(apiUrl);
    return response.json();
    
}

async function NewsData() {

    let topnews = await getWorldNews();
   {
      console.log('All articles:', topnews);
    }
 topnews.articles.forEach((article, index) => {
    console.log(`\nArticle ${index + 1}:`);
     console.log('Title:', article.title);
     console.log('Description:', article.description);
     console.log('URL:', article.url);
     console.log('URL:', article.image);
     console.log('Title:', article.source.name);
     console.log('Published At:', article.publishedAt);

     const toptennews = `
       <section class="top-news">
        <div class="top">
            <img src=${article.image} class="top-img" >
            
           <a href=${article.url} >${article.title}</a>
            </div>
        <p>${article.source.name}</p>

        <h10 class="date-det"></h10><br>
        </section>`

topten.insertAdjacentHTML('beforeend',toptennews);

}
); 
}

NewsData();

 
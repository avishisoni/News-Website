const apiKey = '1455b929237dacb1145484bb186cd80c';


function createApiUrl(category, value) {
    return `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=any&max=${value}&apikey=${apiKey}`;
}
//top 10 news
const topten = document.querySelector('.top-news')
const firstimg = document.querySelector('.first-img')
const firstSour = document.querySelector('.firstsource')
const firstDes = document.querySelector('.firstdes')
const firstTitle = document.querySelector('.firsttitle')
const SportsNews = document.querySelector('.sportsLeft')
const SportsTNews = document.querySelector('.sportsRight')
const HealthNews = document.querySelector('.Health')
const BusinessNews = document.querySelector('.Business')
const TechNews = document.querySelector('.technology')
const MoredetNews = document.querySelector('.moreNews')
const Entertainment = document.querySelector('.entertainment')

async function getWorldNews(category, value) {
    const url = createApiUrl(category, value)
    const response = await fetch(url);
    if (!response.ok) {
        console.error('Failed to fetch data:', response.status, response.statusText);
        return null;
    }
    return response.json();

}

async function NewsData(category, value) {

    let topnews = await getWorldNews(category, value);
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

        const firstarticle = topnews.articles[0];

        firstimg.src = firstarticle.image
        firstTitle.textContent = firstarticle.title
        firstSour.textContent = firstarticle.source.name
        firstDes.textContent = firstarticle.description
    });

    topnews.articles.slice(1, 6).forEach((article) => {
        const toptennews = `
       <section class="top-news">
        <div class="top">
            <img src=${article.image} class="top-img" >
                        <p>${article.source.name}</p>

           <a href=${article.url} >${article.title}</a><br>
           <span>${article.description}</span>
        <span class="date-det">${article.publishedAt}</span>



            </div>

        </section>`

        topten.insertAdjacentHTML('beforeend', toptennews);
    })
    topnews.articles.slice(6, 12).forEach((article) => {
        const morenews = `
        <div class="moreNews">
         <div class="moreDet">
            <a>${article.title}</a>
            <p>Continue Reading ></p>
            <hr>
        </div></div>`

        MoredetNews.insertAdjacentHTML('beforeend', morenews);
    })
}
async function SportsData(category, value) {
    let topsportsnews = await getWorldNews(category, value);
    {
        console.log('All articles:', topsportsnews);
    }
    const firstsportsarticle = topsportsnews.articles[0];
    document.querySelector('.sportsImg1').src = firstsportsarticle.image
    document.querySelector('.sportsTitle').textContent = firstsportsarticle.title
    document.querySelector('.SportsDes').textContent = firstsportsarticle.description



    topsportsnews.articles.slice(1, 3).forEach((article) => {
        const topSports = `<div class="sportsTab">
        <div class="sportsLeft">
            <img src="${article.image}" class="sportsImg">
            <a href="...">${article.title}</a>
           </div>
        </div>`

        SportsNews.insertAdjacentHTML('beforeend', topSports);
    })
    topsportsnews.articles.slice(3, 5).forEach((article) => {
        const topTSports = `<div class="sportsTab">
        <div class="sportsRight">
            <img src="${article.image}" class="sportsImg">
            <a href="...">${article.title}</a>
           </div>
        </div>`
        SportsTNews.insertAdjacentHTML('beforeend', topTSports);

    })


} async function HealthData(category, value) {
    let tophealthnews = await getWorldNews(category, value);
    {
        console.log('All articles:', tophealthnews);
    }
    tophealthnews.articles.slice(0).forEach((article) => {
        const tophealth = `
<section class="cateNews"> 

       <div class="Health">
            <div class="news">
                <img src="${article.image}">
                <a>${article.title}</a>
                
            </div></div> </section><hr>`

        HealthNews.insertAdjacentHTML('beforeend', tophealth);
    })
}
async function BusinessData(category, value) {
    let topbusinessnews = await getWorldNews(category, value);
    {
        console.log('All articles:', topbusinessnews);
    }
    topbusinessnews.articles.slice(0).forEach((article) => {
        const topbusiness = `
         <section class="cateNews"> 
          <div class="Business">
            <div class="news">
                <img src="${article.image}">
                <a>${article.title}</a>
                
            </div></div></section><hr>`

        BusinessNews.insertAdjacentHTML('beforeend', topbusiness);
    })
}
async function TechData(category, value) {
    let toptechnews = await getWorldNews(category, value);
    {
        console.log('All articles:', toptechnews);
    }
    toptechnews.articles.slice(0).forEach((article) => {
        const toptech = `
    <section class="cateNews"> 

           <div class="technology">
                <div class="news">
                    <img src="${article.image}">
                    <a>${article.title}</a>
                    
                </div></div></section><hr>`

        TechNews.insertAdjacentHTML('beforeend', toptech);
    })
}
async function EntData(category, value) {
    let topEntnews = await getWorldNews(category, value);
    {
        console.log('All articles:', topEntnews);
    }
    topEntnews.articles.slice(0).forEach((article) => {
        const topEnt = `
        <div class="entertainment">
        <div class="entNews">
            <img src="${article.image}">
            <a href="${article.url}">${article.title}</a>
            <p>Continue Reading ></p>
        </div></div>
    
           `

        Entertainment.insertAdjacentHTML('beforeend', topEnt);
    })
}

TechNews.innerHTML = ""
BusinessNews.innerHTML = ""
HealthNews.innerHTML = ""
topten.innerHTML = ""
SportsNews.innerHTML = ""
SportsTNews.innerHTML = ""


async function loadGeneralNews() {
    await NewsData('general', '12');
}

async function loadHealthNews() {
    await HealthData('health', '4');
}
async function loadSportsNews() {
    await SportsData('sports', '5');
}
async function loadBusinessNews() {
    await BusinessData('business', '4');
}
async function loadTechNews() {
    await TechData('technology', '4');
}
async function loadEntNews() {
    await EntData('entertainment', '5');
}
loadTechNews();
loadBusinessNews();
loadHealthNews();
loadGeneralNews();
loadSportsNews();
loadEntNews();


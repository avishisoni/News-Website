import {API_KEY} from "./config.js";

function createApiUrl(category, value) {
    return `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=any&max=${value}&apikey=${API_KEY}`;
}
//top 10 news
const topten = document.querySelector('.topNews-Container')
const firstimg = document.querySelector('.first-img')
const firstSour = document.querySelector('.firstsource')
const firstDes = document.querySelector('.firstdes')
const firstTitle = document.querySelector('.firsttitle')
const SportsNews = document.querySelector('.sportsLeft')
const SportsTNews = document.querySelector('.sportsRight')
const HealthNews = document.querySelector('.Health-Container')
const BusinessNews = document.querySelector('.Business-Container ')
const TechNews = document.querySelector('.Technology-Container')
const MoredetNews = document.querySelector('.moreNews')
const Entertainment = document.querySelector('.entertainment')

async function getWorldNews(category, value) {
    const url = createApiUrl(category, value)
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data for ${category}: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return { articles: [] }; // Return an empty array to avoid further issues
    }
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

    topnews.articles.slice(1).forEach((article) => {
        const toptennews = `
        <div class="top">
            <img src=${article.image} class="top-img" ><hr>
        <div class="top-details">

                        <p>${article.source.name}</p>

           <a href=${article.url} >${article.title}</a><br>
           <p>${article.description}</p>
        <span class="date-det">${article.publishedAt}</span>

</div>

            </div>`

        topten.insertAdjacentHTML('beforeend', toptennews);
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
        const topSports = `
        <div class="sportsLeft">
            <img src="${article.image}" class="sportsImg">
            <a href="...">${article.title}</a>
        </div>`

        SportsNews.insertAdjacentHTML('beforeend', topSports);
    })
    topsportsnews.articles.slice(3, 5).forEach((article) => {
        const topTSports = `
        <div class="sportsRight">
            <img src="${article.image}" class="sportsImg">
            <a href="${article.url}">${article.title}</a>
        </div>`
        SportsTNews.insertAdjacentHTML('beforeend', topTSports);

    })


} async function HealthData(category, value) {
    let tophealthnews = await getWorldNews(category, value);
    const healthHeader = `
    <div class="Health-Container">
        <h4>Health</h4>
    </div>
`
HealthNews.insertAdjacentHTML('beforeend', healthHeader);

    tophealthnews.articles.slice(0).forEach((article) => {
        const tophealth = `
 <div class="Health-Container">

       <div class="Health">
            <div class="news">
                <img src="${article.image}">
                <a>${article.title}</a>
                
            </div></div></div><hr>`

        HealthNews.insertAdjacentHTML('beforeend', tophealth);
    })
}
async function BusinessData(category, value) {
    let topbusinessnews = await getWorldNews(category, value);
    const businessHeader = `
        <div class="Business-Container">
            <h4>Business</h4>
        </div>
    `
    BusinessNews.insertAdjacentHTML('beforeend', businessHeader);

    topbusinessnews.articles.slice(0).forEach((article) => {
        const topbusiness = `
                <div class="Business-Container">

          <div class="Business">
            <div class="news">
                <img src="${article.image}">
                <a>${article.title}</a>
                
            </div></div></div><hr>`

        BusinessNews.insertAdjacentHTML('beforeend', topbusiness);
    })
}
async function TechData(category, value) {
    let toptechnews = await getWorldNews(category, value);
    const technologyHeader = `
        <div class="Technology-Container">
            <h4>Technology</h4>
        </div>
    `
    TechNews.insertAdjacentHTML('beforeend', technologyHeader);

    
    toptechnews.articles.slice(0).forEach((article) => {
        const toptech = `
                <div class="Technology-Container">

           <div class="technology">
                <div class="news">
                    <img src="${article.image}">
                    <a>${article.title}</a>
                    
                </div></div></div><hr>`

        TechNews.insertAdjacentHTML('beforeend', toptech);
    })
}
async function MoreData(category, value) {
    let topmorenews = await getWorldNews(category, value);
    
    topmorenews.articles.slice(0).forEach((article) => {
        const topmore = `
        <div class="moreNews">
            <div class="moreDet">
                <a href="${article.url}">${article.title}</a>
                <p>Continue Reading ></p>
                <hr>
            </div>

        </div>`

        MoredetNews.insertAdjacentHTML('beforeend', topmore);
    })
}

async function EntData(category, value) {
    let topEntnews = await getWorldNews(category, value);
    {
        console.log('All articles:', topEntnews);
    }
    topEntnews.articles.slice(0).forEach((article) => {
        const topEnt = `
        <div class="entNews">
            <img src="${article.image}">
            <a href="${article.url}">${article.title}</a>
            <p>Continue Reading ></p>
        </div></div>`

        Entertainment.insertAdjacentHTML('beforeend', topEnt);
    })
}

topten.innerHTML = ""
SportsNews.innerHTML = ""
SportsTNews.innerHTML = ""
HealthNews.innerHTML = ""
BusinessNews.innerHTML = ""
TechNews.innerHTML = ""
MoredetNews.innerHTML = ""
Entertainment.innerHTML = ""


async function loadGeneralNews() {
    await NewsData('general', '6');
}
async function loadSportsNews() {
    await SportsData('sports', '5');
}
async function loadHealthNews() {
    await HealthData('health', '4');
}
async function loadBusinessNews() {
    await BusinessData('business', '4');
}
async function loadTechNews() {
    await TechData('technology', '4');
}
async function loadWorldNews() {
    await  MoreData('world', '9');
}
async function loadEntNews() {
    await EntData('entertainment', '10');
    
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}``

async function loadAllNews() {
    await loadGeneralNews();

    await loadSportsNews();

    await loadHealthNews();
    await delay(1000); 

    await loadBusinessNews();
    await delay(1000); 

    await loadTechNews();
    await delay(1000); 

    await loadWorldNews();
    await delay(1000); 

    await loadEntNews();

}
loadAllNews();

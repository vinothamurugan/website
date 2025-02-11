// News article data
const articleData = {
    title: 'India Wins Thrilling Match Against Pakistan',
    content: 'India won a thrilling match against Pakistan in the ICC Cricket World Cup. The match was played at the Old Trafford stadium in Manchester, England. India batted first and scored 336 runs in 50 overs. Pakistan chased the target but fell short by 89 runs. Indian bowler Jasprit Bumrah took 3 wickets for 60 runs.',
};

// Display news article
const articleTitle = document.getElementById('article-title');
articleTitle.textContent = articleData.title;

const articleContent = document.getElementById('article-content');
articleContent.textContent = articleData.content;

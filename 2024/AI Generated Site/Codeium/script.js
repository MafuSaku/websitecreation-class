// Get the article list element
const articleList = document.getElementById('article-list');

// Sample data for articles
const articles = [
  {
    title: 'Article 1',
    category: 'Category 1',
    date: '2023-02-20'
  },
  {
    title: 'Article 2',
    category: 'Category 2',
    date: '2023-02-22'
  },
  {
    title: 'Article 3',
    category: 'Category 3',
    date: '2023-02-25'
  }
];

// Function to generate article list items
function generateArticleList() {
  articles.forEach(article => {
    const articleListItem = document.createElement('li');
    const articleLink = document.createElement('a');
    articleLink.href = '#';
    articleLink.textContent = article.title;
    articleListItem.appendChild(articleLink);
    articleList.appendChild(articleListItem);
  });
}

// Call the function to generate the article list
generateArticleList();
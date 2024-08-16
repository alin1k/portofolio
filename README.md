# Portofolio 

This is my portofolio webpage. All my projects are fetched from my GitHub profile using the GitHub API. Projects are displayed only if they are labeled as 'featured-project'

This is the function that fetches all my repos from my GitHub profile

```javascript
const getUserRepos = async ()=>{
  const res = await fetch('https://api.github.com/users/alin1k/repos',
    { cache: 'no-store' }
  );
  return res.json();
}
```

I opt out of caching beacuse I want my projects info to be updated in real time.

This is how I filter all my repos to only display projects labeled as 'featured-project'

```javascript
let repos = await getUserRepos();
repos = repos.filter((repo: any) => {
  return repo.topics.includes("featured-project")
})
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


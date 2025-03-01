
import React from 'react';
import Card from './components/board.jsx';
import './App.css';

export const resources = [
  {
    title: "Break Through Tech",
    description: "Empowering minorities in AI/ML",
    link: "https://www.breakthroughtech.org",
    image: "https://tech.cornell.edu/wp-content/uploads/2020/01/4.png"
  },
  {
    title: "CODE PATH",
    description: "Career ready courses for tech excellence",
    link: "https://www.codepath.org/courses",
    image: "https://mlt.org/wp-content/uploads/2018/09/codepath-1x1_solid-transparent.png"
  },
  {
    title: "SheCodes",
    description: "Teaches coding skills to women",
    link: "https://www.shecodes.io",
    image: "https://pathrise-website-guide-wp.s3.us-west-1.amazonaws.com/guides/wp-content/uploads/2021/08/30174811/shecodes_logo.png"
  },
  {
    title: "DeepLearning.ai",
    description: "AI Courses and Specializations by Andrew NG and other AI Leaders",
    link: "https://www.deeplearning.ai",
    image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F125559383%2F317212851579%2F1%2Foriginal.20210208-232017?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2246%2C2246&s=40aa0fb13fe40ce86241ae7b8fc8caea"
  },
  {
    title: "AnitaB.org",
    description: "Empowering women in GHC",
    link: "https://anitab.org",
    image: "https://ghc.anitab.org/wp-content/uploads/2017/10/anitab_org-announcement.png"
  },
  {
    title: "Girls Who Code",
    description: "Closing the gender gap in tech through coding education.",
    link: "https://girlswhocode.com",
    image: "https://images.squarespace-cdn.com/content/v1/51c482b0e4b0998b1b533b22/1619469264508-6HXN7AGP81M7GZIW1HGK/Square+White+Logo+on+Teal.png"
  },
  {
    title: "MENA Women in Tech",
    description: "Empowering women in tech across MENA.",
    link: "https://www.menawomenintech.com",
    image: "https://media.licdn.com/dms/image/v2/C560BAQFJpZVxAkgWqQ/company-logo_200_200/company-logo_200_200/0/1630614048009/persian_women_in_tech_logo?e=2147483647&v=beta&t=O68SYG_0VItIHJQdU2tRVGAzchN53AOpFBE3shCLDxo"
  },
  {
    title: "LeetCode",
    description: "Practice coding interview problems.",
    link: "https://leetcode.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
  },
  {
    title: "Major League Hacking",
    description: "Global student hackathon community.",
    link: "https://mlh.io",
    image: "https://media.licdn.com/dms/image/v2/C560BAQGig0-5n4XMkA/company-logo_200_200/company-logo_200_200/0/1671221609482/mlh_fellowship_logo?e=2147483647&v=beta&t=rC5WI1UChiTtWAaLb_HJYlMcFGWRAaGxgrnqd_NGmzc"
  },
  {
    title: "Google Developer Student Clubs",
    description: "University-based developer communities.",
    link: "https://developers.google.com/community/gdsc",
    image: "https://undergrad.cs.umd.edu/sites/undergrad.cs.umd.edu/files/GDSC_Logo_White_Background_0.png"
  },
  {
    title: "DataCamp",
    description: "Interactive learning for data science & AI.",
    link: "https://www.datacamp.com",
    image: "https://lts.lehigh.edu/sites/default/files/field/image/DataCamp%20for%20LTS%20News.png"
  },
  {
    title: "CS50",
    description: "Harvard’s intro to computer science.",
    link: "https://cs50.harvard.edu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBwuddBfDYzFHfvCjSk2dHhn1KL_weVdxIA&s"
  }
];



const App = () => {
  return (
    <div className="container">

      <h1>Community Boardd</h1>

      <div className="card-grid">

        {resources.map((resource, index) => ( < Card key={index} {...resource} /> ))}

      </div>
    </div>
  );
};

export default App;

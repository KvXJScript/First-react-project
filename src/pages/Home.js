import React from 'react';
import "../styles/Home.css";

const HomePage = () => {
   return ( 
   <div className="homepage">
   <h1>To Do List!</h1>
   <p className="number1">To do lists don't need to be complicated—plenty of people use a pen and paper for the job without any problem. And yet a new to do list app seems to come out every day. Why? Because keeping track of your tasks is an intensely personal thing, and people will reject anything that doesn't feel right pretty much instantly. That makes it hard to find the right app.</p>
   <p className="number2">To that end, we've been hard at work researching the best to do apps, trying to find the best ones for various use cases. We started by finding the best apps for every platform: Android, Windows, macOS, and iPhone/iPad. Research for these pieces was exhaustive: We tried the top-rated apps in every respective app store, spent a lot of time reading other roundups, and spent way too much time migrating our personal to do lists from one app to another.

And now we’re offering you what we feel is the cream of the crop.</p>
   <h2>What Makes a Great To Do List App?</h2>
   <p className="number1">When it comes to do lists everyone has different criteria. We kept this in mind as we tested applications and noticed a few features that made apps stand out. The best to do list apps:</p>
   <ul>
      <li>Make it fast to add and organize tasks. Ideally a task is added and categorized in a couple taps or keystrokes.</li>
      <li>Offer multiple ways to organize your tasks. Tags, lists, projects, and due dates are all helpful, and the best apps offer at least a few categories like this.</li>
      <li>Remind you about self-imposed deadlines. Notifications, widgets, emails—the best applications make it obvious when something needs to be completed.</li>
      <li>Offer clean user interfaces. Well-designed to do apps fit into your workflow so you can get back to what you're supposed to be doing.</li>
      <li>Sync between every platform you use. Which platforms is going to depend on what you personally use, but we didn't consider anything that doesn't sync between desktop and mobile.</li>
   </ul>
   <p className="number1">We tried to find the best applications that balance these things in various ways. None of these apps will be right for everyone, but hopefully one of them is right for you. Let's dive in.</p>
   </div> );
}
   
export default HomePage;
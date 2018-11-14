# Front-end task: JS Youtube Channels

## Task

1.  Change the HTML structure of `static/index.html` and write remaining CSS rules to mimic  
    the layout shown on mock-ups located in `screenshots/` directory. 
    
2.  Some HTML and CSS have already been written. You need to implement missing components:
    * heading
    * channel list
    
    `channels.json` file contains all of the necessary youtube channels data.
    
3.  Add following behavior to the application:
    
    1.  Selecting radio button should sort listed channels accordingly. 
        Sorting order (asc/desc) is up to you. 
        
    2.  Filter channels by title based on an input text. Filtering should be case-insensitive. 
        
    3.  Pressing `clear` button should reset both sorting options and text filter.

    4.  Clicking or tapping on a channel logo should open the link to the channel's youtube page in a new browser card.

    5.  Make sure to represent numbers in the US/British notation (each 10^3 group separated by a comma) e.g. one million = 1,000,000

4.  Fill out `NOTES.md` file, commenting the task and your solution,
    e.g. which browsers or devices you tested on, what assumptions or simplifications have been made, etc.

5.  Add unit tests for parts of your code responsible for sorting and filtering. 
    If you wish to add more tests, you are welcome to do it.

**Solve the task as best as you can. Code quality is more important for us than a quick but mediocre solution.**

## Limitations
*   You must NOT use any JS frameworks (i.e. Angular / React / Redux / Vue). We want to see if you are
    able to create a working app in plain JavaScript (ES6/ES2015+ is encouraged).
    
*   We recommend not to use any CSS frameworks. We want to see what your CSS code looks like.

## Notes

*   Everything else is permitted, including changing code or project structure, adding build tools, testing frameworks or dependencies.

*   Application layout does not have to be pixel-perfect when compared to screenshots.

*   Your solution will be judged by its code quality (HTML/CSS/JS) and look and feel of the finished product.


## Running the task

Node.js 8 or greater is required.

```bash
$ npm install
$ npm start
```

Server address will appear in the terminal.

## How to deliver your solution

*   Create a private repository on [bitbucket.org](https://bitbucket.org)
    
*   Put original, unchanged content of this task in _master_ branch. Put your solution in a different branch.
    
*   Create a pull request from the branch with your solution to _master_ branch in your repository. 
    We will go through it and comment your work based on it.

*   Allow `allegrotech` user to view your repository and add it as a pull request reviewer. 
    
Good luck!
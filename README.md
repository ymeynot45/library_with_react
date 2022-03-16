2021-01-19 - Plain JS version

This was my first real attempt to write a site with JavaScript. The Odin Project gave me the requirements to create a library page with the ability to add books, mark if I’ve read them, including a title, author, and page count through a constructor, while storing them in a simple array.  This was a good way to learn how to modify the dom without reloading the page.

I really enjoyed the project as many of the lessons were new to me.  I tried and failed to have two seperate onload events, thus forcing me to expand my usage of event listeners. I then refactored back down to one event but kept it as an event listener even though it could have gone back to onload, feeling that it was safer to keep things that limited the code to a minimum.

I battled with scope and refined my sense of understanding about when you use a method as an argument with and without the accompanying () to call the function.  I honestly could use more practice in knowing which one is the right call and what modern convention dictates.  But through this project I believe I have wrapped my head around scope and the top down approach it has on JavaScript.  I’ll admit that it was made much easier by the project outline dictating that the MyLibrary = [], constant for storing the books, but previous projects have used a postgres database so any local storage is easier by far.
	
The project does need a refactor.  I initially tried to take the #ID tags for the library sorting buttons, use them as keywords to work as an argument in a method, the text in the button and as the key to access the object properties. But that won’t work as a property such as “Have Read” has a space in it, which doesn’t work for #ID tags.  If I merged it into “HaveRead”, then it doesn’t work as readable text in the button nor does it fit the JavaScript naming convention of “haveRead”. I spent half an hour building that out before I realized that it wasn’t going to work.  I spent so much time on it because I wanted to create a single method for all of the buttons, so I wouldn’t have to hard code the keywords. The resulting fix is ugly with each button having its own method with a hard coded keyword to access the Book object.  I hate it, but it works and sometimes that is where you have to leave it to make progress elsewhere.
		
If I was to give this project an overhaul I would move several of the functions into the Book constructor, taking them out of the global space and making the code easier to read.  I was pleased with how little code I have on the index.html page, a total of 17 lines which will make it much easier to convert to React.
	



	Round Two: Refactoring the app to use JQuery instead of straight JavaScript, without adding new features or major edits.

	The first thing that quickly became apparent to me was that my HTML skills really need improvement.  It is the same problem I had in DevBootCamp where they assumed everyone had played with HTML & CSS before trying a tougher language.  Once again, I’ve mostly worked in the terminal or building the Dom directly from the backend. 

Why is this a problem? I had never learned the fragility of HTML, especially when using JQuery.  The long strings are prone to typo’s.  They result in fewer lines of code, yet in a larger project I can foresee a lot of redundancy that can’t be helped.  Changes are dangerous and require searching the code for common terms to make sure you got them all.

I also found interpolation to be particularly cumbersome. 
let bookSlot = ($(`<li class='bookSlot' id= + ${book.id} text=${bookInfo(book)}></li>`))
Is all one line but you have to be sure to wrap the whole thing in backticks for the interpolation in order for it to work. Forgetting those backticks are an easy error to accidently implant into your code. As opposed to:
      let bookSlot = document.createElement("li");
   bookSlot.setAttribute("class", "bookSlot");
   bookSlot.setAttribute("id", book.id);
   bookSlot.textContent = bookInfo(book);
Yes, it is three more lines, but each line is clear, and they are easy to remove or comment out when you need to test or rework the code.  There is no chance that if I had to remove the class I might accidentally change something else in the variable. Additionally, the JQuery written as above would break because it isn’t all on one line. 

Overall to me JQuery is only useful for modifying older legacy code, or those who are using a language that doesn’t allow the direct creation of elements.


Round 3:  Rebuilding the app with React.

React has a higher difficulty to use effectively but also includes many positives.  First and foremost being the ability for many teams to be working on the same project at the same time.  The code is broken down into the multiple components which are each in their own file and thus can be modified without causing possible conflicts with another team.  This is especially true with the CSS.  Twenty small files of CSS would be preferable over one extremely large one.  It opens up more options for naming and you don’t have to worry about the position of elements within the document.

Normally when I write code it is with a bottom up perspective.  This allows me to keep all the variables as local as possible and insulate possible conflicts.  However, React wants everything to be read only except for the app level.  This requires a top down approach where you keep all of the functions at the app level and pass them down level by level.  It took me a while to figure out how to safely do this and thus what stays at the component level and what is required to be at the app level.

One occasion of this can be seen with my problem related to check boxes in the new book forum.  React collects the data from the form as you type.  It is storing the title “Glory” one letter at a time as it changes.  However, a check box which the user wishes to keep its initial status never changes and thus isn’t recorded.  It took me a long time trying to find different methods of recording the status of the default checkbox that were proper within React.  But in the end I said screw it and just put a check at the app level, “if a book object doesn’t have a key from the checkbox then I add it.


let dataRetrieval = (formData) => {
      let formProps = formData;
      let book = new Book(formProps.title, formProps.author, parseInt(formProps.pageCount), formProps.haveRead);
      if (book.haveRead === undefined){
        book.haveRead = false;
      }

It may not have been the React way to do it, but it works, it is easy to understand, and it is easy to change if something else needs to be fixed.

I love the constant rerendering, the importing and exporting, the proptypes as low level testing, and the (**Insert one more thing when I think of it**).  

However, I dislike not being 100% sure how all of the react built in methods work. A large part of my problem relates to a bad tutorial as a basis for my React knowledge.  I also don’t enjoy writing in raw html, but that is a personal failing due to programming for months on back end ruby & javascript before ever writing a line of html.

Fixes always require planning.  When working with pure javascript, if I needed a dynamic css class I just wrote a quick function to add the class to the point I wanted it. In react I have to write the function at the app level and then pass it down until it is needed.  An example of this, I wrote a function that would add a css class to the page if the id of the book was even so the library would have alternating colored rows making it easier to read.  It looks great and works, until you sort the library.  The color is tied to the id of the “book slot” not every other book rendered.  If this was just javascript I would put a function that would just add the class to every other line as it went through the mapping process creating each of the lis. Doing that in React where the rendering is in html and a step removed from the javascript makes it much harder to do on the fly.

All above was fixes with a 10 second conversation pointing me to the css nth-child(), furthering the idea that most problems come from what we don’t know that we don’t know. Add that programming will be a constant experience of, “knowing is half the battle.”

Update: As I get a more in depth explanation of React and the importance of life cycles and set state functions, I see all of the errors in my code as I bypass a lot of the utility built into React.  I will have to redo this at a later date for my own personal pride.  Additionally, I am really excited to try using routes as it adds a lot of possibilities to my future apps and reminds me of Rails.

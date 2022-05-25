To run this project do

1. Npm install
2. Npm start

Approach taken:

1. In this project I first coded the API request part. There I used of the useEffect hook with a
   dependency of a state that is compared with the total_pages from the API. This recursive approach ensures that all data
   is retrieved without needing for the user to input the number of pages manually.

2. My next step was to research on react-tables where I took the longest time yet it does not support scrollbar functionality so
   I decided to not use any library but instead code a table template.

3. Next thing I prioritized was the pagination. Luckily I found a custom guide to implement pagination 
   https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/ . I only needed to customize
   and add some code to incorporate the double arrow functionality and change the styling.
   
4. I made use of styled components to avoid problems with nested divs. Instead of the color #FDFDFD which was indicated
   as a background color for the header, I opted to use #4b4b4b which is way darker and matches the given wireframe.
   
5. The last component I created was the modal. Because I opted to use a template for the table, I had to customize the
   table template and create a handler that passes the user props on email click.

   



## Project: Travel Blog in React

This project is part of the curriculum of the Full-Stack Web Development program at [Hamburg Coding School](https://hamburgcodingschool.com/).

### Goal

Goal is to transfer the main idea from your last [project "The Travel Blog"](https://github.com/hamburgcodingschool/javascript-for-web-2020-03/blob/master/PROJECT.md),
made with pure Javascript, HTML and CSS into a **React App**.

While working on the project remind yourself of *"thinking in components"*, – one of the many great parts of React.

### Features

#### Dashboard (Main Page)

The dashboard shows an overview of the all blog posts and a contains a map aside, there all blog posts location are marked.

### Menu Bar
- Add a menu which contains the logo and the "Blog Post" Headline on the left side.
- In the menu provide a login button (text + icon) on the right side.
- The menu bar is available on all pages.

### Authentication / Login
- Use Firebase Auth (login with email and password) for authentication.
- If clicked on the login button, a login form is shown right below the login button under the menu.
- The User can login with her email and password.
- If successfully loggedIn, the login form disappears and instead of the login button in the menu a logout button is shown.
- Also: Right beside the login button another button (icon + text) for creating new a blog post appears, if the user is logged in.
It links to '/new', where logged in users can add new blog posts.

### World Map with Google Maps API

- Use the Google Maps JavaScript API to display a world map.
- For each blog post, put a marker on the map at the location of the post.
- Initially the map gets centered by the newest blog post entry.

#### Display Blog Posts at Location

- Make the markers clickable: on click, show the short preview of the blog post in the "InfoWindow".
It contains:
  - title
  - visiting date
  - authors name
  - A magnitude is placed at right and links to the detail page '/details:id'

#### Get Blog Posts from Firestore

- Store the blog posts on Firebase Firestore and load them with the Firebase API.
- Also save the coordinates of a location with latitude and longitude.
- Load all blog posts at the dashboard (main) page.
- The blog posts should be visible on the left, right beside the map.

### Blog Posts

**In Preview**

- At the left all blog posts are listed as preview (Micro Blog).
- The blogs are ordered ascending by visiting date.
It contains:
  - title
  - visiting date
  - authors name
  - image
  - A magnitude is placed at right/top and links to the detail page '/details:id'

**In Detail**
- On clicking at the title or the magnitude of the blog post preview, the blog post is opened at the detail page '/post/:id'.
- A back button at the details page (position: top-left) links back to the dashboard.
- The details page shows the full blog post, with all information.
- The partial section of the map is placed aside and shows centered the location of the blog post

**Content of a blog post**
A blog post should contain:
  - title
  - visiting date
  - authors name
  - creation date
  - image
  - text
  - location with city and country

### New Blog Post

- With the path '/new' a blog post form is shown, where new blog posts can be added.
- On submit, a new blog post is sent and stored to Firestore.
- The form is cleared after adding a new blog post and ready to another one.
- For the images: Save the image in your project manually in the public folder and use it with relative path as string.
  For instance: The image `barcelona.jpg` saved under `public/images` can be linked in the templates with `"/images/barcelona.jpg"`.
- Only signed in user can add new blog posts.

#### Imprint / Contact

- Create a link '/contact' in the menu bar named "CONTACT"
- At the contact page place your name (and your team mate's) name there
- Write two sentences about your project
- Put your (or if you prefer [Hamburg Coding School's](https://hamburgcodingschool.com/contact/)) contact details:
  - name
  - address
  - email
  - phone number
- Write a note that this was a project from a course at Hamburg Coding School.


### Optional Bonus Tasks

#### Bonus: Firebase Storage for images

- Include the Storage API from Firebase.
- Research how to upload and download pictures with Firebase Storage.
- Upload your blog post's images to Storage.
- Load the images from Storage when displaying the blog posts.
- In the form for creating a new blog post, add an option to upload an image for the blog post to Storage.

#### Bonus: Edit Blog Posts

- At the '/details/:id' page, add an "edit" icon.
- If the user clicks that, the blog post turns into editable mode and entries can be updated and saved.
  Take into consideration using the same form component, which you might have defined for creating new blog post.
- The values of the form are pre-filled with the data from the blog post.
- On form submit the blog post gets updated and sent to Firestore.

#### Bonus: Focus of Blog Post in List on Marker Active

- if the user clicks on a marker, the corresponding blog post entry aside in list gets highlighted (e.g. with applying a prominent border color to it).

#### Bonus: Provide a user profile page
- Add a link in the menu, where signed in user can edit her profile and store it to Firebase
- Research how to save user data in Firebase.
- At the profile page, the signed in user can upload a profile image and save her name.
- Use this information, if available,
  - on the page where a user can add new blog entries and
  - in the menu to show logged in users name and image.

### Modalities

- You can work alone or in a team of two.
- You are allowed (and even encouraged) to ask your classmates for help or help them.
- Use all the documentation and online tutorials as you like.
- You can ask Mary for help anytime.
- For communication, use the Slack channel.
- You get two consultation classes:
  - Tuesday, June 16th, 6pm - 8pm
  - Tuesday, June 23rd, 6pm - 8pm
- The consultation classes take place in our online classroom at NewRow.
- **Deadline: June 25rd 2020, 6pm**


### Submission

1. Upload your code to a new GitHub repository.
  - If you placed your API keys directly into your code, remember to remove your API keys.

    **Hint:**
    There is a way to use keys in the React project without the risk to push those to a repository accidentally:
      - Add a file `.env` into your project root folder. It is ignored by git.
      - In this file you can define custom environment variables like that: `REACT_APP_MY_API_KEY=MyKey-12345`
      - Within your component you can use it with `{process.env.REACT_APP_MY_API_KEY}`
      - After every change in this files you have to restart your project.

      For more information check out: https://create-react-app.dev/docs/adding-custom-environment-variables/.



  - If you worked in a team, link the GitHub accounts of both of you in the README.md.

2. Send us an email with the following information:
  - A link to your GitHub repository
  - If you worked in a team, both your names
  - If you did any bonus tasks, list them
  - Send it to Mary (mary@hamburgcodingschool.com) and Teresa (teresa@hamburgcodingschool.com)


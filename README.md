This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


<b> Isobar coding challange </b>
-------------

<b>High Level component interaction diagram </b>


![Interaction flow](https://github.com/niccs/knowledgehub/blob/master/design-approach/react_component_diagram.jpg)


Download guide: -- 

> - clone the repo
> -  cd knowledgehub
> - npm installnpm start
> - npm start @knowledgehub folder(the project runs at 3000 port)
> - gogle auth2 is used for signin which is currently registered to url :- http://localhost:3000/


Features Supported: --
-------------

> - Displays list of all available courses-- (courses are added in .json file)
> - It has a search field where you can search and filter available courses by typing in the search field
> - Hovering over a course displays an add button. (currently visibilty is by default.)
>-  Sign In is integratred with Google Auth2
> - Clicking on the add button opens a modal asking for your login credentials (in process)
> - After submitting the form with any credentials, user must get a successful login message and modal  closes
> - Course added to a cart on the side of the screen
> - Clicking on new add button should not promote login modal if you have already logged in and it should add course to the side cart panel(i process)
> - If the course has already been added to cart, hovering over displays a remove button
> - Clicking on the remove button removes course from side cart.



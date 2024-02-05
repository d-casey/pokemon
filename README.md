## React Native Practice

### Intro

I wanted to showcase what I can do from scratch in the space of one working day, using React Native. I chose to use the Pokemon API to fetch data and build a simple Pokemon app. The added benefit here is that my 6 year old can be my tester!

I have demonstrated already my level of expertise with React, team leadership, mentoring, ownership etc. And so this is to simply say - here is how much React Native I can do in one day - importantly after being in the Web space for the last 3 years.

I needed to make some decisions on what was in scope, and what was out of scope due to the amount of time I had. 

I have decided not to setup any state management, such as Redux - as the boilerplate is slightly time consuming, and this is something any React engineer across web or native could demonstrate.
I have also decided to use Expo Go in order to get building and writing code straight away. 
I have also not added any tests because again I am short on time.

### What is on display here then?

I have built a simple Pokemon app that fetches data using the pokemon api. Once fetched, I format the data and pass it into a [Carousel](https://www.npmjs.com/package/react-native-reanimated-carousel). 

It is then possible to add the pokemon to your party, and then view them in the party page by clicking the "Go To Party" button. This utilises the Navigation.navigate() functionality to pass the pokemon data to the party page so that it can dsiplay them.

The styling utilises flexbox to keep everything organised, and the carousel itself fucntions smoothly.

The code itself is broken down into some simple reusable pure components (InfoList and CarouselItem), with the components in the screens directory doing the data fetching and organising. 

The data is only fetched with the entry level component (<Pokedex />) first loads. There are clear next steps to continue working on this app and improving it.

### Thought on this progress

Overall I was pretty happy to have a working app that fetches pokemon data, displays the data in a carousel, adds data to the state and passes it between screens, whilst also implementing the tab nav. 

This is just an example of one day of refamiliarising myself with React Native. It is all still there and will come back very quickly as I think this shows!

### Next Steps

Here is what I would do next.

- implement state management so that data is persisted across all screens. At the moment, the party button in the tab nav does not work properly because the pokemon are only pushed to the party page when you click the "Go To Party" button.
    - I have extensive experience with Redux but I might also look into mobx to learn that
- Make the queries much more efficient. At the moment it needs to do 3 different API calls to generate some pretty simple data. There are two approaches I would consider to improve this:
    - fetch the data in a similar way and store it all in Redux/local state the first time the app loads. This would allow the party page to access the party state correctly.
    - Generate a text file of the JSON data, and bundle it up with the app. The amount of data I want for this app is very limited so this option could be just fine
    - Add lazy loading, and only fetch the pokemon data when it is requested. I might even add a button for each pokemon type, and only display pokemon of that type in the carousel.
- Add test coverage with React Testing Library, Jest and Detox (these are what I have used before)
- use [branch.io](https://www.branch.io/) once the app is released, and make use of linking people to the app with additional meta data, such as the pokemon ID. This would simulate trading/sending to a friend.
- Add some Lottie animations in
- Improve the overall design.




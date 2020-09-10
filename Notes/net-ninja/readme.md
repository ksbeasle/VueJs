# Vue stuff

* __Dynamic components__ (lesson 28) - 
    * switch between components and keep the component alive to save any data that was there

* __Input Binding Forms__ (lesson 29) - 

    * v-model, input modifiers so text won't show until after you tab (v.model.lazy) stored in an object

* __checkbox binding__ (lesson 30) - 

    * v-model, checkboxes that when checked add to an array, and shows dynamically. Also includes styling.

* __Select box Binding__ (lesson 31) - 

    * Select drop down, that is populated dynamically instead of hardcoded, tied to the Blog Object.

* __HTTP__ (lesson 32) - 

    * vue-resource (npm install vue-resource --save) DISCONTINUED? Use AXIOS?.
     * Imported in main.js. 
     * v:onclick.prevent 
     * post function
     * nice success trick after post request
    
* __GET REQUESTS__ (lesson 33) - 
    * imported in main.js
    * output blogs dynamically
    * lifecylce hook created() once the component is fist made.
    * Put in blogs array, (grabbed first 10 elements using slice) 
    
* __Custom Directives__ (lesson 34) - 
    * v-if, v-for, v-on are all directives
    * main.js Vue.directives()
    * use directive lifecycle hook 'bind'
    * " 'wide' " string passed into v-theme
    * Also to pass args to the theme

* __Filters__ (lesson 35) - 
    * Change the output of data to the browser
    * use pipe | for example to make the title uppercase
    * main.js Vue.filer('name', function(){})
    * the value refers to what is inside {{  }}
    
* __Custome Search Filter__ (lesson 36) - 
    * computed property
    * match() function

* __Registering locally vs globally__ (lesson 37) - 
    * What if we use directives/filters in one component?
    * put them locally inside filter: {} or directives: {}

* __Mixins (reusable code)__ (lesson 38) - 
    * A chunk of code we can re-use over and over in different places.
    * move code to a new file in searchmixin.js
    * import that file into both components to be used
    * then add mixins: [] with the name of the mixin inside the array

* __Routing__ (lesson 39) -
    * npm install vue-router --save
    * import in main.js
    * Vue.use()
    * In a routes.js file we can export an array of objects with properties like path, and component and then we can register those objects in the VueRouter in main.js
    * load it into the new Vue({}) instance
    * then in the root App.vue file we use the tag \<router-view>\</router-view>

* __Hash vs History__ (lesson 40) - 
    * to get /whatever instead of /#/whatever add this:
    * ``` Javascript
        const router: new VueRouter({
            routes: routes,
            mode: 'history'
        })
        ```
* __Routing Links__ (lesson 41) - 
    * Nav - nav to routes /add /delete etc.
    * How to use ```\<router-link>``` tag
    * router-link-active styling as well
    * exact keyword to prevent both links from being 'active' at the same time

* __Route Parameters__ (lesson 42) - 
    * Passing :id for example
    * in data we can use this.$route.params.id to get the id from the url
    * then inside the created() lifecycle hook we can make the http request:
    ``` this.$http.get(url) + this.id.then(function(data){ this.blog = data.body }) ```
    * we are saving the response into an empty blog object
    * in this example he made the blog title \<router-link> so a user can click and be taken to that specific blog post

* __Firebase__ lesson 43/44
    

___
# Vuex

* __Computed Properties__ lesson 4
    * Getting data from the central store
    * export from store (folder/file)
    * import into your component
    * no longer need props or data
    * can keep all that information out of the app root file
    
* __Getters__ lesson 5 
    * put functions/calculations like pricing on products inside the sore 
    * use the getters property to grab the data and use it in your component without having to change the code in all your components

* __Mutations__ lesson 6
    * Vuejs dev tools
    * how to change prodcut information, name/price of each item etc.
    * mutations can be tracked unlike regular methods
    * commit it in the component - this will keep track of state change
    * we can use ``` strict: true ``` to force any changes to data to only be done through mutation

* __Actions__ lesson 7
    * Anytime we want to mutate data that involved async tasks its better to use actions. (Example in store file)
    * its good practice to use actions instead of committing mutations
    * passing parameters through ```v-on:click```

* __Mapping actions and getters__ lesson 8
    * use ```import {mapActions} from 'vuex'``` and ```import {mapGetters} from 'vuex'``` to
    * Need to use babel so that the spread operator can be understood on the browser. ```npm install babel-preset-stage-2``` then in the .babelrc file we add ```["stage-2"]``` inside the presets array. (re-run the application)
    ___
    # Vuetify

    * __Setting up vuetify__ lesson 2
        * ```vue add vuetify``` in your vue application root, can be seen in plugins folder
        * ```<v-app> and <v-content>``` are required ```<router-view>``` for routes

     * __text and colors__ lesson 4
        * changing background of and color of text
        *lightening the background/darkening the text
        * vuetify documentation contains all the different colors you can use: search colors
        * font size/weight/transforms

     * __Button and icons__ lesson 5
        * How to style buttons, small/large icons. Position icons.
        * How to use icons
        * material.io for icon list
        * as always vuetify documentation is a good way to see all the examples for styling buttons and icons
     * __Breakpoints and visibility (mobile devices/ tablets etc.)__ lesson 6
        * make certain elements visibile or invisible on desktop/mobile
        * Vuetify documentation: search 'breakpoint'
        * example ```<v-btn class="hidden-md-and-down">click</v-btn>``` meaning this button will be hidden from medium size devices and down.
     * __Toolbars__ lesson 7
        * create new component
        *  ```<v-toolbar></v-toolbar>```
        * how to space and style the toolbar, as always check documentation
    
     * __Navigation drawers__ lesson 8
        * In order to show the navigation drawer we need to use ```v-model``` and add ```drawer: true``` into data
        * you need the ```app``` prop in the ```<v-navigation-drawer app>```
        * Used on desktops only

     * __Themes__ lesson 9
        * use themes in the plugins folder
        * how to overrride themes
        * We now need to nest themes apparently.  New syntax:
```
export default new Vuetify({
  icons: {
    iconfont: 'mdi'

  },
// this is the spot to modify

  theme: {
    themes: {
      light: {
        primary: '#9652ff'
      }
    }
  }
})
```

* __Lists__ lesson 10
    * List inside the navigation drawer
    * icons
    * better to user ```v-for``` to loop through the links so its not congested
    * how to add a route to those links using ```router``` prop like so: ```router :to="link.route"```


* __Routes__ lesson 11
    * Set up routes  in router.js
    * each router connected to its corresponding view file.
    
* __Margin and padding__ lesson 12
    * ```{property}{direction}-{size}```
    * documentation contains the values for the above.
    * grid system with ```v-container```

* __Grid system part 1__ lesson 13
    * How we want to display our content over 12 columns
    * ```<v-layout>```
    * also need to explicitly say to ```wrap``` if we want our elements to go to a new line when the screen size changes
    * spacing options

* __Grid system part 2__ lesson 14
    * Good example for spacing/wrapping and displying content using grids

* __Dummy project data__ lesson 15
    * good example for dynamic data using the grid system and several props
    * giving each data its own unique tag for styling

* __Chips__ lesson 16
    * little bubbles icon things
    * ```<v-chip></v-chip>```

* __Sorting projects__ lesson 17 
    * Sorting: prop is the param passed in - ```this.arr.sort((a,b)=> a[prop] < b[prop] ? -1 : 1)```

* __Tooltips__ lesson 18
    * when you hover over a button it will tell you what it does
    * ```<v-tooltip>```, also use ```slot="activator"``` on the ```v-btn``` as a prop for the tooltip to work and right under the ```v-btn``` put a ```span tag``` with the text for the tooltip

* __Cards__ lesson 19
    * Using dynamic data to fill each card
    * ```v-responsive``` for images
    * links/buttons go into ```v-card-actions``` when dealing with cards

* __Avatars__ lesson 20
    * place images in public folder or assets 
    * ```<v-avatar>``` is wrapped around the ```img``` tag

* __Expansion Panels__ lesson 21
    * use ```slot="header"``` prop for expansion panels
    * computed method to get projects related to user

* __Menus (dropdown)__ lesson 22
    * How to setup menu dropdown

* __Popups (dialog)__ lesson 23
    * ```<v-dialog>```

* __Forms__ lesson 24 
    * textfield/text area, date picker etc.
    * using v-model as well
    * submit

* __Date picker__ lesson 25
    * ```npm install date-fns``` for date formatting

* __Form validation__ lesson 26
    * Apply ```:rules=""``` to whatever text field you are trying to validate
    * The rules will go into an array ```inputRules: [v => v.length >= 3 || 'min length is 3']``` inside the data() section
    * Also added a validate check on the form so it will prevent the user from submitting empty data

    * __Firebase/Firestore__ lesson 27/28

    * __Button loaders__ lesson 29
        * button loader animation
        * ```:loading:true``` added to the btn we can have a boolean in data set to false at first and then while inside the async function we can set it to true so the animation starts, then when the promise is returned set it to false again.
        *  Another tip is to also have the pop dialog attached to a ```v-model```  in the ```v-dialog``` element that is also a boolean so once the submission is complete we can change that value to false and the dialog will close.

    * __Snackbars__ lesson 30
        * Like a notification popup
        * ```<v-snackbar>```
        * we used a custom event: ```this.$emit('myevent')``` and then inside the component we added the prop ```@myevent:"snackbar = true"```

    * __Firestore__ lesson 31
        * skipped
    
    
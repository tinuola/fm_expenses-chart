# Frontend Mentor: Expenses Chart Component

Solution to the _[Expenses Chart Component](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt)_ challenge on Frontend Mentor.

### Challenge

- Build out a Bar Chart component using provided [desktop](/assets/design/desktop-design.jpg) and [mobile](/assets/design/mobile-design.jpg) designs
- Users should be able to:
  - View the bar chart and hover over the individual bars to see the correct amounts for each day
  - See the current day's bar highlighted in a different colour to the other bars
  - View the optimal layout for the content depending on their device's screen size
  - See [hover states](/assets/design/active-states.jpg) for all interactive elements on the page

### Solution

Live Site: [https://tt-fm-expenses-chart.netlify.app/](https://tt-fm-expenses-chart.netlify.app/)

### Retrospective

- Using a framework on small projects can be overkill, yet simpler projects are ideal for practice; is there a middle ground? It turns out there is. My initial plan was to make this a 100% React project, but after reading through the [React.dev install guides](https://react.dev/learn/add-react-to-an-existing-project), I opted to use React only to render the actual chart, and created the other elements statically.
- I kept the setup as lightweight as possible--using only [Parcel](https://parceljs.org/) as a dependency for the build process.

### Pending Enhancement(s)?

- Animate loading the individual cells

### Tools & Resources

- HTML & CSS
- React, Parcel
- CSS Resets
- [Add React to an Existing Project](https://react.dev/learn/add-react-to-an-existing-project) _(React.dev)_
- [Conditional CSS In React](https://medium.com/@nethelbert.blasse/conditional-css-in-react-f47084e44f35) _(Medium)_

_Visit my [Frontend Mentor profile](https://www.frontendmentor.io/profile/tinuola) to view other challenges I've completed!_

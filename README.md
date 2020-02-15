## tota11y webpack react typescript example
a modern example of how to introdude accessibility (a11y) tools into a react application for testing and compliance standards.

Table of contents:
* [problem](#problem)
* [solution](#solution)
* [how](#how)
* [future](#future)

---

### [problem](#problem)
A11y is often a requirement for many web applications and services. Teams with manual testers or compliance analysts often struggle to use the built-in tooling that browsers come with due to advance knowledge of their usage.

When deploying new builds of your product on different environments (development, qa, staging, production), engineers may neglect ways to increase the productivity of non-engineering workers.

This may cause issues when trying to ensure that your product is a11y compliant.

---

### [solution](#solution)
Tooling for a11y has gotten increasingly better over the last 5 years. Libraries like [axe-core](https://github.com/dequelabs/axe-core) have introduced a variety of solutions for many testing libraries, suchas [jest-axe](https://github.com/nickcolley/jest-axe) and [cypress-axe](https://github.com/avanslaars/cypress-axe). Even browsers, like [chrome](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference) and [safari](https://developer.apple.com/safari/features/#accessibility), now have better capabilities compared to a decade ago.

[tota11y](https://github.com/Khan/tota11y) is a tool that we can inject into our app, as part of our build process, to give manual testers additional capabilities with verifying or triaging a11y issues.

---

### [[how](https://www.youtube.com/watch?v=kBSdNy7oI4g#t=3m55s)](#how)


---

### [future](#future)

may include future examples of how to inject [tota11y](https://github.com/Khan/tota11y) into other bundlers like [parcel](https://github.com/parcel-bundler/parcel) or [browserify](https://github.com/browserify/browserify). will be linked to in the future between repos.

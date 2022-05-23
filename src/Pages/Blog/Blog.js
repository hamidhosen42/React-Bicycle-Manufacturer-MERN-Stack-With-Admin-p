import React from "react";

const Blog = () => {
  return (
    <div className="grid justify-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="card lg:max-w-lg bg-base-100 shadow-xl m-10">
        <div className="card-body items-center text-center">
          <h1 className="font-bold">
            How will you improve the performance of a React Application?
          </h1>
          <p className="text-justify">
            React.js is known as one of the fastest web development frameworks
            out there.With it’s actively used single page application
            development, it is claimed to be an optimal choice for interactive
            design.This application five important ways to optimize the
            performance of a React application, including pre-optimization
            techniques.This example : Keeping component state local where
            necessary,Memoizing React components to prevent unnecessary
            re-renders ,Code-splitting in React using dynamic import(),
            Windowing or list virtualization in React, Lazy loading images in
            React.
          </p>
        </div>
      </div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl m-10">
        <div className="card-body items-center text-center">
          <h1 className="font-bold">
            What are the different ways to manage a state in a React
            application?
          </h1>
          <p className="text-justify">
            There are four main types of state you need to properly manage in
            your React apps:Local state, Global state ,Server state, URL
            state.Local (UI) state – Local state is data we manage in one or
            another component.Global (UI) state – Global state is data we manage
            across multiple components.Server state – Data that comes from an
            external server that must be integrated with our UI state.URL state
            – Data that exists on our URLs, including the pathname and query
            parameters.
          </p>
        </div>
      </div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl m-10">
        <div className="card-body items-center text-center">
          <h1 className="font-bold">How does prototypical inheritance work?</h1>
          <p className="text-justify">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object.getPrototypeOf and Object
          </p>
        </div>
      </div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl m-10">
        <div className="card-body items-center text-center">
          <h1 className="font-bold">
            Why you do not set the state directly in React. For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts.
          </h1>
          <p className="text-justify">
            When you directly update the state, it does not change this. state
            immediately. Instead, it creates a pending state transition, and
            accessing it after calling this method will only return the present
            value. You will lose control of the state across all components.
          </p>
        </div>
      </div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl m-10">
        <div className="card-body items-center text-center">
          <h2 className="font-bold">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h2>
          <a
            target="_blank"
            className="text-success"
            href="https://github.com/hamidhosen42/js/blob/main/blog.js"
            alt=""
          >
            Code Link
          </a>
          <p>
            At first array of products declare.Then find the product name using
            array.if this product name find keyword using then all information
            print.
          </p>
        </div>
      </div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl m-10">
        <div className="card-body items-center text-center">
          <h1 className="font-bold">
            What is a unit test? Why should write unit tests?
          </h1>
          <p className="text-justify">
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. This testing
            methodology is done during the development process by the software
            developers and sometimes QA staff. The main objective of unit
            testing is to isolate written code to test and determine if it works
            as intended. Unit testing is an important step in the development
            process, because if done correctly, it can help detect early flaws
            in code which may be more difficult to find in later testing stages.
            Unit testing is a component of test-driven development (TDD), a
            pragmatic methodology that takes a meticulous approach to building a
            product by means of continual testing and revision. This testing
            method is also the first level of software testing, which is
            performed before other testing methods such as integration testing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
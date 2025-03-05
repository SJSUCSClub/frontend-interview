# Welcome to ACM@SJSU Dev Team Frontend Interview

This technical interview will test your understanding of React, Typescript, CSS, and Forms.

The goal of this interview is for you to develop a functional and well-styled form that accepts user input and handles the form submission.

We encourage you to focus on:
- **Component structure**: Organizing the form into reusable components
- **State management**: Handling user input and form validation
- **Styling**: Writing clean, maintainable css
- **Best practices**: Writing clean and readable code

## Project Requirements

You are developing a professor rating web application for SJSU, similar to Rate My Professor. This application allows users to log in and submit reviews for professors based on the courses they have taken.
Your task is to build a form that allows users to submit their professor reviews.

The form will include the following inputs:
- **Professor**
  - Type: Select
  - Options data: string[] (provided)
- **Course**
  - Type: Select
  - Options data: string[] (provided)
- **Rating**
  - Type: Number
  - Min: 1
  - Max: 5
- **Grade**
  - Type: Select
  - Options data: Grade[] (provided)
- **Tags**
  - Type: Checkbox
  - Options data: Tag[] (provided)
- **Review**
  - Type: Text

All the input fields are required.

The form should have a `Submit` button that will invoke a form handler `onSubmit`. The form handler must validate the data and transform the user input into a type that the backend endpoint accepts:
```ts
type Review = {
  professorName: string;
  courseName: string;
  rating: number;
  grade: Grade;
  tags: Tag[];
  content: string;
}
```
Once the input data is transformed into a `Review` type, `console.log` the transformed data.

## Styling
The form should be centered horizontally and vertically on the page.

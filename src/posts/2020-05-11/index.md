---
title: Learning the Basics of TypeScript
date: "2020-05-11"
tags: "TypeScript"
---

## References

[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)

## Defining Types

> TypeScript = JavaSript + Type-System

### Assigning objects to variables

#### Previously in JavaScript

```js
const myUser = {
    id: 0,
    name: "Wallace",
};
```

#### Now in TypeScript

```ts
interface User {
    name: string;
    id: number;
}

// Assigning an object in the wrong shape will trigger a warning
const myUser: User = {
    id: 0,
    name: "Wallace",
};
```

### Class constructors

#### Previously in JavaScript

```js
class UserAccount {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

const myUser = new UserAccount(0, "Wallace");
```

#### Now in TypeScript

```ts
interface User {
    id: number;
    name: string;
}

class UserAccount {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const myUser: User = new UserAccount(0, "Wallace");
```

### Functions

#### Previously in JavaScript

```js
function getUser(id) {
    return User.findById(id);
}
```

#### Now in TypeScript

```ts
function getUser(id: number): User {
    return User.findById(id);
}
```

## Composing Types

### Enumerating possible values (Unions)

```ts
type Weekdays = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
```

### Providing variables to types (Generics)

```ts
type StringArray = Array<string>;
type ObjectWithNameArray = Array<{ name: string }>;
```

#### Declaring types with generics

```ts
interface HomogenousQueue<Type> {
    push: (obj: Type) => void;
    poll: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from
declare const queue = HomogenousQueue<string>;

const someString = queue.pop()

queue.push(23); // Produces static error
```

## Structural Type System

> a.k.a. "duck typing" or "structural typing"

Essentially, if two objects have the **same shape**, they are **considered the same**.

An illustration:

```ts
interface Duck {
    beakLengthInInches: number;
    eggsLaid: number;
}

class YellowDuck {

    beakLengthInInches: number;
    eggsLaid: number;

    constructor(beakLengthInInches: number, eggsLaid: number) {
        this.beakLengthInInches = beakLengthInInches;
        this.eggsLaid = eggsLaid;
    }
}

function buyDuck(duck: Duck) {
    ...
}

const iHaveNoType = {
    beakLengthInInches: 4,
    eggsLaid: 3,
};

const yellowDuck = new YellowDuck(1, 2);

buyDuck(iHaveNoType); // No error
buyDuck(yellowDuck); // No error
```

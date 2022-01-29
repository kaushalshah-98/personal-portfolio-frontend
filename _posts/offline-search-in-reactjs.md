---
title: "Offline Search in ReactJS"
description: "Implement search for your tables and lists without API"
banner: "/images/posts/offline-search-in-reactjs/banner.png"
tags: ["ReactJS"]
date: 8 January 2022
---

# Offline Search in ReactJS

### Implement search for your tables and lists without API

![](/images/posts/offline-search-in-reactjs/banner.png)Photo by [Evgeni Tcherkasski](https://unsplash.com/@evgenit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/search?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

You are designing an application where you need to show a list or table where the data is available to you right away.

The list contains around 30–40 records (or maybe more).

Now your users want a search feature so that they can filter the data easily.

What do you do?

## First Option

You may go back to your backend developer and ask for a search API that will return the matched data using a database query or something.

But this makes the searching process time-consuming. Users will have to wait for the result to come back before they see anything.

And you have to maintain the API calls so that everything works as expected.

Not so convenient right?

## Let’s do it offline

Let’s say we have a list of users. The data looks something like the following. And you have an array of these.

```js
data = [
   {
     name: "Mohammad Faisal",
     company: "Some Company",
     age: 56,
     address: "Dhaka, Bangladesh"
   }
   ... more
]
```

And there is a search bar up top where your users will search for the text.

```js
const [searchText, setSearchText] = useState("");
const onTextChange = (e) => setSearchText(e.target.value);
return <input onChange={onTextChange} />;
```

So one option is to trigger a callback when your `searchText` value gets changed.

```js
useEffect(() => {
  // do the filtering here
}, [searchText]);
```

But how do you do the search?

There are some javascript functions that can do the job for us.

```js
data.filter((singleUser) => singleUser.name.includes(searchText));
```

This is nice. So when a user searches for text the list will be filtered based on the user's `name` property.

We can extend this for other properties as well. By filtering them one by one.

```js
data.filter(singleUser => {
  return
      singleUser.name.includes(searchText)) ||
      singleUser.address.includes(searchText))
}
```

But as you can see this can quickly get out of hand if you have to do a search for 10 fields. You have to type out everything.

It’s not convenient right?

Let’s make it better.

# Power of JSON

So we will take advantage of the `JSON.stringify()` and `JSON.parse()` method that is available to us.

As searching inside an object is hard because we may not know the keys of that object before searching we can’t make them generalized.

So we will make the whole object a string and do the search on that.

```js
useEffect(() => {
  //make the whole object list -> list of stringified objects
  const stringifiedObjectList = data.map((singleUser) => JSON.stringify(singleUser));
  // filter on the string array. Just like searching a string
  const filteredStringifiedObjectList = stringifiedObjectList.filter((singleUser) => singleUser.includes(searchtext));

  // revert back the list into object
  const filteredData = filteredStringifiedObjectList.map((item) => JSON.parse(item));
}, [searchText]);
```

You can transfer this logic to a nice neat hook for usability.

# Further improvement

Well, the solution we implemented will work if the users search with the proper capitalization.

So if a user searches for `faisal` they will probably want the results with both

- `faisal` and `Faisal`

So how do we solve that?

We can make the stringified array to a `lower case` string. There is a javascript function for that `toLowerCase()`

and also convert the `searchText` to lowercase as well to solve this problem

Finally, our code will look like this

```js
const useSearchFilter = (originalData, searchText) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    //make the whole object list -> list of stringified objects
    const stringifiedObjectList = data.map((singleUser) => JSON.stringify(singleUser).toLowerCase());
    // filter on the string array. Just like searching a string
    const filteredStringifiedObjectList = stringifiedObjectList.filter((singleUser) =>
      singleUser.includes(searchtext.toLowerCase())
    );

    // revert back the list into object
    const filtered = filteredStringifiedObjectList.map((item) => JSON.parse(item));

    setFilteredData(filtered);
  }, [searchText]);

  return filteredData;
};
```

This is a re-usable hook where you will provide an array of objects and a `searchText` and it will give you back the filtered data.

Now you have a functional offline search that is blazing fast as well!

That’s it for today! Hope you learned something interesting.

Have a great day!

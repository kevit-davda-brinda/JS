const yargs = require('yargs');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        // console.log(json)
        const obj = JSON.parse(JSON.stringify(json))

        return obj[yargs.argv._ - 1]; // returning object of user data based on id provided by user input
    })
    .then(async (userDate) => {
        // console.log("user Data:", userDate)

        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                const obj = JSON.parse(JSON.stringify(json))

                let data = [];

                data.push({ "username": userDate.username, "name": userDate.name, "email": userDate.email, "city": userDate.address.city })

                obj.forEach(element => {
                    // console.log(element)
                    if (element.userId == yargs.argv._) {
                        data.push({ "id": element.id, "title": element.title })
                    }
                });


                return data;

            }).then(async (postData) => {
                // console.log("Post Data:", postData)

                await fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(json => {

                        // "postId": commentData[j].postId,

                        const commentData = JSON.parse(JSON.stringify(json));

                        const dataArray = [];

                        const obj = postData[0];

                        const postDataArray = [];

                        for (let i = 1; i < postData.length; i++) {
                            const postID = postData[i].id;

                            const commentObj = {};

                            commentObj.title = postData[i].title;

                            for (let j = 0; j < commentData.length; j++) {
                                if (commentData[j].postId == postID) {

                                    dataArray.push({ "name": commentData[j].name, "body": commentData[j].body });
                                }
                            }

                            commentObj.comments = dataArray;


                            postDataArray.push(commentObj);
                        }

                        obj.posts = postDataArray;

                        // console.log(dataArray);

                        return obj;
                    })
                    .then((data) => {


                        const obj = {
                            "username": data.username,
                            "name": data.name,
                            "email": data.email,
                            "city": data.city,
                            "posts": {
                                "title": data.posts[2].title,
                                "comments": data.posts[0].comments[0],
                            }
                        }

                        console.log(obj);
                        // console.log(data);
                    })
            })

    }
    )
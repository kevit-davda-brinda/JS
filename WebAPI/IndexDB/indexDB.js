//check if indexDB is supported
if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`);
}

console.log("IndexDB supported on your browser")

//open DB
const request = indexedDB.open('CRM', 1);

//handle the event 
request.onerror = (event) => {
    console.error(`Database error: ${event.target.errorCode}`);
};

request.onsuccess = (event) => {
    // add implementation here
    console.log("Event handled Successfully");
};

// create the Contacts object store and indexes
request.onupgradeneeded = (event) => {
    let db = event.target.result;

    // create the Contacts object store 
    // with auto-increment id
    let store = db.createObjectStore('Contacts', {
        autoIncrement: true
    });

    // create an index on the email property
    let index = store.createIndex('email', 'email', {
        unique: true
    });
};


function insertContact(db, contact) {
    // create a new transaction
    const txn = db.transaction('Contacts', 'readwrite');

    // get the Contacts object store
    const store = txn.objectStore('Contacts');
    //
    let query = store.put(contact);

    // handle success case
    query.onsuccess = function (event) {
        console.log(event);
    };

    // handle the error case
    query.onerror = function (event) {
        console.log(event.target.errorCode);
    }

    // close the database once the 
    // transaction completes
    txn.oncomplete = function () {
        db.close();
    };
}

request.onsuccess = (event) => {
    const db = event.target.result;

    insertContact(db, {
        email: 'john.doe@outlook.com',
        firstName: 'John',
        lastName: 'Doe'
    });

    insertContact(db, {
        email: 'jane.doe@gmail.com',
        firstName: 'Jane',
        lastName: 'Doe'
    });

    insertContact(db, {
        email: 'xyz.doe@gmail.com',
        firstName: 'xyz',
        lastName: 'Doe'
    });

    insertContact(db, {
        email: 'admin.doe@gmail.com',
        firstName: 'Admin',
        lastName: 'Doe'
    });
};


//get the contact from IndexDB
function getContactById(db, id) {
    const txn = db.transaction('Contacts', 'readonly');
    const store = txn.objectStore('Contacts');

    let query = store.get(id);

    query.onsuccess = (event) => {
        if (!event.target.result) {
            console.log(`The contact with ${id} not found`);
        } else {
            console.table(event.target.result);
        }
    };

    query.onerror = (event) => {
        console.log(event.target.errorCode);
    }

    //onComplete DB Closeds
    txn.oncomplete = function () {
        db.close();
    };
};

//get contact with id 1
request.onsuccess = (event) => {
    const db = event.target.result;
    getContactById(db, 10);
};

//get contact from email index
function getContactByEmail(db, email) {
    const txn = db.transaction('Contacts', 'readonly');
    const store = txn.objectStore('Contacts');

    // get the index from the Object Store
    const index = store.index('email');
    // query by indexes
    let query = index.get(email);

    // return the result object on success
    query.onsuccess = (event) => {
        console.log(query.result); // result objects
    };

    query.onerror = (event) => {
        console.log(event.target.errorCode);
    }

    // close the database connection
    txn.oncomplete = function () {
        db.close();
    };
}

//
request.onsuccess = (event) => {
    const db = event.target.result;
    // get contact by email
    getContactByEmail(db, 'xui.doe@gmail.com');
};

//get the data from databaseObject
function getAllContacts(db) {
    const txn = db.transaction('Contacts', "readonly");
    const objectStore = txn.objectStore('Contacts');

    objectStore.openCursor().onsuccess = (event) => {
        let cursor = event.target.result;
        if (cursor) {
            let contact = cursor.value;
            console.log(contact);
            // continue next record
            cursor.continue();
        }
    };
    // close the database connection
    txn.oncomplete = function () {
        db.close();
    };
}

//
request.onsuccess = (event)=>{
    const db = event.target.result;
    //get data from IdexDB
    getAllContacts(db)
}

//delete all contact
function deleteContact(db, id) {
    // create a new transaction
    const txn = db.transaction('Contacts', 'readwrite');

    // get the Contacts object store
    const store = txn.objectStore('Contacts');
    //
    let query = store.delete(id);

    // handle the success case
    query.onsuccess = function (event) {
        console.log(event);
    };

    // handle the error case
    query.onerror = function (event) {
        console.log(event.target.errorCode);
    }

    // close the database once the 
    // transaction completes
    txn.oncomplete = function () {
        db.close();
    };
}

//calling delete database function
request.onsuccess = (event) => {
    const db = event.target.result;
    deleteContact(db, 1);
};
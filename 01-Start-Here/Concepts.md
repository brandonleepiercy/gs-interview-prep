# Concepts to Know

## Programming
- ### APIs (REST/SOAP/XML-RPC/JSON-RPC)
    - ### APIs in General
        - An API (Application Programming Interface) is a software intermediary that allows two applications to communicate seamlessly. APIs are used within websites to allow information to pass between the front-end software (react, javascript etc.), and the back-end software (the SQL or Mongo database that stores the information). APIs are also used to communicate with other sites, as API keys and pulls can be used to establish secure connections to other databases, to display information from another database on your front-end. They provide an extra layer of security as the server and the user are never fully exposed to each other, they simply exchange the neccesary data via the API. Modern APIs strictly adhere to standards (HTTP/REST) for security and performance.
    
    - ### REST APIs (Representational State Transfer)
        - REST APIs are a set of architectural constraints pioneered by computer scientist Roy Fielding. It means that web applications as a whole, including the API must be built in a specific way, and must trasfer a specific type of data, to be considered a truly RESTful API. The 6 guiding constraints are listed below.
            1. Client-server - Separation of user interface and data storage concerns improves scalability by simplifying programming on both sides.
            2. Stateless - Each request itself must contain all of the information required to complete the request, meaning that API requests cannot rely on stored information. This improves security.
            3. Cacheable - The data contained in the response needs to be marked as cacheable data or not. If the data is cacheable the user is given the right to reuse the data for later, equivalent requests.
            4. Uniform interface - This refers to the URLs that users enter in to access information from your database via the API. URLs should follow a logical format and should be able to be "guessed", and should follow a hierarchical format. For example, for a given social media site, to path to access a video that a particular user has posted should go something like "site.com/username/videos/video.mp4".
            5. Layered System - A layered system has the multiple components of a web application (front-end/back-end/APIs & middlware) organized in a heirarchical format so that the user cannot "see" beyond the layer that they are interacting with. This is for site security.
            6. Code on demand (optional) - This has to do with client side tests and is optional.
        - RESTful APIs transfer "resources" (text/images/ any type of data to be served) in a format to that looks like hypertext. Usually JSON or XML. Of the two, XML is more detailed and secure, JSON is quicker and less secure.

    - ### SOAP APIs (Simple Object Access Protocol)
        - Generally considered to be a competing API framework in regards to RESTful APIs, however it is possible to build a SOAP API that is RESTful. SOAP is language, platform and transport independent, whereas REST relies of HTTP protocols. SOAP APIs also work better in distributed enterprise environments, because REST APIs assume direct point to point connection.
        - Soap relies heavily on XML, whereas RESTful APIs typically use JSON, but can use XML.
        - Typically more resource intensive, RESTful APIs emphasize efficiency. 

    - ### RPCs (XML and JSON) (Remote Procedure Protocol)
        - RPCs are the oldest and simplest type of API used to transfer data. They differ only in that the XML-RPC defines standards on how to transfer data in an XML format whereas the JSON-RPC defines how to do the same in a JSON format. I assume these are the least secure, but quickest methods. These methods are not widely used in professional software development, likely due to security flaws.

- ### OOP
    - Object Oriented Programming is a programming paradigm that focuses on objects and classes as the building blocks of an application. The building blocks are supposed to be simple and reusable code "blueprints". A class would be an abstract blue-print, and the object would represent the specific instance of that class. For example, in an open-world video game, a class of objects could be cars. The specific object would be something like the car nearest to the player. All cars in the game are objects and all of them are extensions of the car class programmed into the game. In this example, taking an Object Oriented Programming approach to building this open world game would be to program based around the objects the game is supposed to represent on screen. Characters, vehicles, buildings, roads, etc. 

    - Benefits of OOP
        1. OOP models complex ideas with small, simple, reproducible structures.
        2. OOP objects can be reused across programs.
        3. Allows for class specific behavior through polymorphism.
        4. Easier to debug, features broken typically lead to classes etc. (Is an entire class functioning improperly/ is it just the object).
        5. Secures information through encapsulation (separation of concerns).

    - Four Pillars of OOP
        1. Inheritance - Child classes/objects inherit data and methods from the parent classes. This is a foundationational to the reusability of OOP and why it results in much less code.
        2. Encapsulation - The object contains all the information neccesary for it, and nothing more. This provides clean separation of concerns and makes sure the user can see enough, not too much.
        3. Abstraction - Reducing complicated operations into simple devices by the time it gets to the user. For example, a car drives by combustion, gas/air management physics etc. But controls are simplified into gas, brakes, steering wheel. Only the neccesities are available and they are simplfied.
        4. Polymorphism - Designing objects to share behaviors. This also means objects can override shared parent behaviors. Method overriding and method overloading are the two ways that child methods can overwrite parent methods.

- ### Multi-Threading
    - Multi-threading refers to utilizing computer architecture to execute multiple parts of a program at the same time. Improvements to CPU architecture itself (multiple-cores and increased speed) have enabled the execution of multiple functions concurrently. Typically multi-tasking can be achieved by running functions with different CPU cores at the same time, but for programs with many different functions "threads" can be created within a core. Multi-threading is the practice of using multiple threads within a core to execute two functions simultaneously.

    - Using multiple threads to run concurrent functions is desirable because it's "lightweight" i.e. it frees up more cores to compute other functions at the same time. This enables a single CPU to do more, and for programs to be more complex in nature. The downside is that multi-threading is more unstable than using multiple cores alone.

    - You can't program multi-threading with Javascript because the entirety of a compiled Javascript app is contained within a single thread (the reasoning might not be true I read this online, but either way JS doesn't support multi-threading)

- ### Testing (Edge Cases)
- ### The Full-Stack

## Data Structures
- ### Space/Time Complexity (Memory and Big O)
- ### [Arrays](../02-Data-Structures/Arrays/Arrays.md)
- ### [Hash-Tables](../02-Data-Structures/Hash-Tables/Hash-Tables.md)
- ### [Hash-Maps](../02-Data-Structures/Hash-Maps/Hash-Maps.md)
- ### [Linked-Lists](../02-Data-Structures/Linked-Lists/Linked-Lists.md)
- ### [Stacks](../02-Data-Structures/Stacks/Stacks.md)
- ### [Binary-Trees](../02-Data-Structures/Binary-Trees/Binary-Trees.md)
- ### [Heaps](../02-Data-Structures/Heaps/Heaps.md)
- ### [Graphs](../02-Data-Structures/Graphs/Graphs.md)
- ### [Queues](../02-Data-Structures/Queues/Queues.md)

## Algorithms
- ### [Binary Search](../03-Algorithms/Binary-Search/Binary-Search.md)
- ### [Dynamic Programming](../03-Algorithms/Dynamic-Programming/Dynamic-Programming.md)
- ### [Recursion](../03-Algorithms/Recursion/Recursion.md)
- ### [Sorting](../03-Algorithms/Sorting/Sorting.md)
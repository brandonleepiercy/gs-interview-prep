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
- ### Multi-Threading
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
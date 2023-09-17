import { Category, Post } from "./types/collection";

export const DUMMY_POSTS: Post[] = [
    {
        id: "1",
        title: "A lovely green city: New York",
        description:
            "New York is a city in the United States of America. It is the most populous city in the United States.",
        category: { id: "1", title: "Poland" },
        author: { id: "1", first_name: "John", last_name: "Doe" },
        slug: "a-lovely-green-city-new-york",
        image:
            "https://images.unsplash.com/photo-1694278780010-6da6ffea8634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",

        body: "New York is a city in the United States of America. It is the most populous city in the United States.",
        date_created: "2021-07-01T00:00:00.000Z",
        date_updated: "2021-07-01T00:00:00.000Z",
    },
    {
        id: "2",
        title: "The vibrant city of Paris",
        description:
            "Paris is the capital and most populous city of France. It is located on the Seine River, in the north of the country.",
        category: { id: "2", title: "Slovakia" },
        author: { id: "1", first_name: "John", last_name: "Doe" },
        slug: "the-vibrant-city-of-paris",
        image:
            "https://images.unsplash.com/photo-1694279162034-18b9677c1517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1930&q=80",
        body: "Paris is known for its art, culture, and history. The city is home to many iconic landmarks such as the Eiffel Tower, the Louvre Museum, and the Notre-Dame Cathedral. It is also known for its fashion and gastronomy, with numerous world-renowned restaurants and luxury fashion houses. Paris is a global center for business, finance, and politics, and is considered one of the world's leading cities in these fields.",
        date_created: "2021-07-02T00:00:00.000Z",
        date_updated: "2021-07-02T00:00:00.000Z",
    },
    {
        id: "3",
        title: "The majestic city of London",
        description:
            "London is the capital and largest city of England and the United Kingdom. It is located on the River Thames in the south-east of England.",
        category: { id: "2", title: "Slovakia" },
        author: { id: "1", first_name: "John", last_name: "Doe" },
        slug: "the-majestic-city-of-london",
        image:
            "https://images.unsplash.com/photo-1694278617116-732123d3b0b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
        body: "London is a global city and one of the world's leading financial, cultural, and political centers. It is known for its history, museums, and iconic landmarks such as the Tower of London, Buckingham Palace, and the London Eye. The city is also home to many prestigious universities, theaters, and sports teams.",
        date_created: "2021-07-03T00:00:00.000Z",
        date_updated: "2021-07-03T00:00:00.000Z",
    },
    {
        id: "4",
        title: "The great adventure of the Amazon",
        description:
            "The Amazon is the largest river in the world. It is located in South America and flows through Brazil, Peru, Colombia and etc.",
        category: { id: "1", title: "Poland" },
        author: { id: "1", first_name: "John", last_name: "Doe" },
        slug: "the-great-adventure-of-the-amazon",
        image:
            "https://images.unsplash.com/photo-1694279162037-c9e46a8326ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
        body: "The Amazon is the largest river in the world. It is located in South America and flows through Brazil, Peru, Colombia, Ecuador, Bolivia, Venezuela, Guyana, Suriname, and French Guiana. The Amazon River basin is home to 16% of the world's freshwater and 10% of the world's known species. The Amazon is the largest river in the world. It is located in South America and flows through Brazil, Peru, Colombia, Ecuador, Bolivia, Venezuela, Guyana, Suriname, and French Guiana. The Amazon River basin is home to 16% of the world's freshwater and 10% of the world's known species. The Amazon is the largest river in the world. It is located in South America and flows through Brazil, Peru, Colombia, Ecuador, Bolivia, Venezuela, Guyana, Suriname, and French Guiana. The Amazon River basin is home to 16% of the world's freshwater and 10% of the world's known species. The Amazon is the largest river in the world. It is located in South America and flows through Brazil, Peru, Colombia, Ecuador, Bolivia, Venezuela, Guyana, Suriname, and French Guiana. The Amazon River basin is home to 16% of the world's freshwater and 10% of the world's known species. The Amazon is the largest river in the world. It is located in South America and flows through Brazil, Peru, Colombia, Ecuador, Bolivia, Venezuela, Guyana, Suriname, and French Guiana. The Amazon River basin is home to 16% of the world's freshwater and 10% of the world's known species. The Amazon is the largest river in the world. It is located in South America and flows through Brazil, Peru, Colombia, Ecuador, Bolivia, Venezuela, Guyana, Suriname, and French Guiana. The Amazon River basin is home to 16% of the world's freshwater and 10% of the world's known species.",
        date_created: "2021-07-04T00:00:00.000Z",
        date_updated: "2021-07-04T00:00:00.000Z",
    },
    {
        id: "5",
        title: "Journey to the infinite sky: Cappadocia",
        description:
            "Cappadocia is a region in central Turkey. It is known for its unique geological features, such as the fairy chimneys, which are cone-shaped rock formations.",
        category: { id: "2", title: "Slovakia" },
        author: { id: "1", first_name: "John", last_name: "Doe" },
        slug: "let-the-wind-take-you-to-the-infinite-sky-cappadocia",
        image:
            "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwxN3x8Q2FwcGFkb2NpYXxlbnwwfHx8fDE2NzAzMjI2OTE&ixlib=rb-4.0.3",
        body: "Cappadocia is a region in central Turkey. It is known for its unique geological features, such as the fairy chimneys, which are cone-shaped rock formations. The region is also known for its cave churches, underground cities, and cave dwellings. Cappadocia is a popular tourist destination, with many visitors coming to see the region's natural wonders.",
        date_created: "2021-07-05T00:00:00.000Z",
        date_updated: "2021-07-05T00:00:00.000Z",
    },
    {
        id: "6",
        title: "Joining the elephants in the wild: Thailand",
        description:
            "Thailand is a country in Southeast Asia. It is known for its tropical beaches, opulent royal palaces, ancient ruins, and ornate temples displaying figures of Buddha.",
        category: { id: "2", title: "Slovakia" },
        author: { id: "1", first_name: "John", last_name: "Doe" },
        slug: "joining-the-elephants-in-the-wild-thailand",
        image:
            "https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwxOHx8RWxlcGhhbnRzJTIwdGhhaWxhbmR8ZW58MHx8fHwxNjcwMzIyNzUx&ixlib=rb-4.0.3",
        body: "Thailand is a country in Southeast Asia. It is known for its tropical beaches, opulent royal palaces, ancient ruins, and ornate temples displaying figures of Buddha. It is also home to many exotic animals, including elephants, tigers, and monkeys. Thailand is a popular tourist destination, with many visitors coming to see the country's natural wonders.",
        date_created: "2021-07-06T00:00:00.000Z",
        date_updated: "2021-07-06T00:00:00.000Z",
    },
];

export const DUMMY_CATEGORIES: Category[] = [
    {
        id: "1",
        title: "Poland",
        slug: "poland",
        description:
            "Travel every city that I've been with me! I'll be sharing hidden gems in every city.",
    },
    {
        id: "2",
        title: "Slovakia",
        slug: "slovakia",
        description:
            "Experience the world with me! I'll be sharing my adventures and experiences in every country.",
    },
];

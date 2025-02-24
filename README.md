# Personal-Projects

1st Project(Pin Details fetcher)   [Java based Springboot backend + React JS Frontend]
First Project is a Pin Details finder. 
It uses SpringBoot backend and a React frontend.
For data storage, I have used Oracle DB 21 c Express Edition.
I have loaded a csv file containing pincode,area,district and state into a table in the databse, tabke name - pincodes.
Now this web-app fetches pincode details according to the user input in the frontend.
Whenever user inputs a valid Indian "Pincode", the corresponding area,district and state are fetched from the database and shown in the frontend. 
For multiple records having the same pincode but different areas, all records are fetched and the user is given he option to choose his desired area via a dropdown in the same page. 
csv file used in project has been attached.


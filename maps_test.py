import requests

# Enter your api key here
api_key = "AIzaSyAQqfzMIorF4mKVjNpXSum46Kz8gy6lb5s"

url = "https://maps.googleapis.com/maps/api/staticmap?"

# center defines the center of the map,
# equidistant from all edges of the map.
center = "-78.32897489933252, -30.15784833929502"

# zoom defines the zoom
# level of the map
zoom = 13

# get method of requests module
# return response object
r = requests.get(url + "center=" + center + "&zoom=" +
                   str(zoom) + "&size=500x400&key=" +
                             api_key+"&maptype=satellite")

print(url + "center=" + center + "&zoom=" +
                   str(zoom) + "&size=500x400&key=" +
                             api_key+"&maptype=satellite")

with open('hyderabad.png', 'wb') as file:
   # writing data into the file
   file.write(r.content)

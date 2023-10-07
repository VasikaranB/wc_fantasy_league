import requests
from bs4 import BeautifulSoup
import json

# Define the URL to scrape
url = "https://www.espncricinfo.com/records/tournament/batting-most-runs-career/icc-cricket-world-cup-2023-24-15338"

# Send an HTTP GET request to the URL
response = requests.get(url)

# Parse the HTML content of the page with BeautifulSoup
soup = BeautifulSoup(response.content, "html.parser")

# Find the table you want to scrape by its class name
table = soup.find("table", class_="ds-w-full ds-table ds-table-xs ds-table-auto ds-w-full ds-overflow-scroll ds-scrollbar-hide")

# Extract data from the table
data = []
for row in table.find("tbody").find_all("tr"):
    columns = row.find_all("td")
    player = columns[0].find("a").text.strip()
    span = columns[1].text.strip()
    mat = columns[2].text.strip()
    inns = columns[3].text.strip()
    no = columns[4].text.strip()
    runs = columns[5].text.strip()
    hs = columns[6].text.strip()
    ave = columns[7].text.strip()
    bf = columns[8].text.strip()
    sr = columns[9].text.strip()
    hundreds = columns[10].text.strip()
    fifties = columns[11].text.strip()
    zeros = columns[12].text.strip()
    fours = columns[13].text.strip()
    sixes = columns[14].text.strip()
    
    # Append the data as a dictionary to the list
    data.append({
        "Player": player,
        "Span": span,
        "Mat": mat,
        "Inns": inns,
        "NO": no,
        "Runs": runs,
        "HS": hs,
        "Ave": ave,
        "BF": bf,
        "SR": sr,
        "100": hundreds,
        "50": fifties,
        "0": zeros,
        "4s": fours,
        "6s": sixes
    })

# Convert the data list to JSON
json_data = json.dumps(data, indent=4)

# Optionally, you can save the JSON data to a file
with open("batting_data.json", "w") as json_file:
    json_file.write(json_data)


# Define the URL to scrape
url = "https://www.espncricinfo.com/records/tournament/bowling-most-wickets-career/icc-cricket-world-cup-2023-24-15338"

# Send an HTTP GET request to the URL
response = requests.get(url)

# Parse the HTML content of the page with BeautifulSoup
soup = BeautifulSoup(response.content, "html.parser")

# Find the table you want to scrape by its class name
table = soup.find("table", class_="ds-w-full ds-table ds-table-xs ds-table-auto ds-w-full ds-overflow-scroll ds-scrollbar-hide")

# Extract data from the table
data = []
for row in table.find("tbody").find_all("tr"):
    columns = row.find_all("td")
    player = columns[0].find("a").text.strip()
    span = columns[1].text.strip()
    mat = columns[2].text.strip()
    inns = columns[3].text.strip()
    balls = columns[4].text.strip()
    overs = columns[5].text.strip()
    mdns = columns[6].text.strip()
    runs = columns[7].text.strip()
    wkts = columns[8].text.strip()
    bbi = columns[9].text.strip()
    ave = columns[10].text.strip()
    econ = columns[11].text.strip()
    sr = columns[12].text.strip()
    fours = columns[13].text.strip()
    fives = columns[14].text.strip()
    
    # Append the data as a dictionary to the list
    data.append({
        "Player": player,
        "Span": span,
        "Mat": mat,
        "Inns": inns,
        "Balls": balls,
        "Overs": overs,
        "Mdns": mdns,
        "Runs": runs,
        "Wkts": wkts,
        "BBI": bbi,
        "Ave": ave,
        "Econ": econ,
        "SR": sr,
        "4": fours,
        "5": fives
    })

# Convert the data list to JSON
json_data = json.dumps(data, indent=4)


# Optionally, you can save the JSON data to a file
with open("bowling_data.json", "w") as json_file:
    json_file.write(json_data)


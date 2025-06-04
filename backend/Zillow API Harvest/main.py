import csv
import json
from zillow_api import ZillowAPI

zillow_api_client = ZillowAPI("0f8e9c57-cb7f-4eaf-a40c-b415243f5fef")

search_result = zillow_api_client.search(
	params={
		"keyword": "Toccoa, GA",
		"type": "forRent",
		"price[min]": 1000,
		"price[max]": 2000,
		"homeTypes": ["house", "apartment"]
	}
)

# Extract all unique keys for CSV headers
all_keys = set()
for property in search_result["properties"]:
    all_keys.update(property.keys())

# Ensure nested address keys are included
address_keys = {'street', 'city', 'state', 'zipcode'}
all_keys.discard('address')  # Remove 'address' since we expand it
all_keys.update(address_keys)

# Convert set to a sorted list for consistency
all_keys = sorted(all_keys)

# Write to CSV
csv_file = "properties.csv"
with open(csv_file, mode='w', newline='', encoding='utf-8') as file:
    writer = csv.DictWriter(file, fieldnames=all_keys)
    writer.writeheader()

    for property in search_result["properties"]:
        row = {key: property.get(key, "") for key in all_keys}

        # Extract address details if present
        if "address" in property:
            for key in address_keys:
                row[key] = property["address"].get(key, "")

        # Convert list of photos to a single string (comma-separated)
        if "photos" in property:
            row["photos"] = ", ".join(property["photos"])

        writer.writerow(row)

print(f"CSV file '{csv_file}' has been created successfully.")
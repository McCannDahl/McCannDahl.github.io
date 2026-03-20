#!/usr/bin/env python3
import json

# Load the challenges.json file
with open('challenges.json', 'r') as f:
    challenges = json.load(f)

# Halve all expectedMinutes values (rounding up to minimum 1)
for challenge in challenges:
    current_minutes = challenge.get('expectedMinutes', 0)
    halved_minutes = max(1, (current_minutes + 1) // 2)  # Round up, minimum 1
    challenge['expectedMinutes'] = halved_minutes

# Write the updated data back to the file
with open('challenges.json', 'w') as f:
    json.dump(challenges, f, indent=4)

print("All expectedMinutes have been halved and file updated.")

# Show the new total
new_total = sum(challenge.get('expectedMinutes', 0) for challenge in challenges)
print(f"New total expected minutes: {new_total}")

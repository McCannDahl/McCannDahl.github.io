#!/usr/bin/env python3
import json

# Load the challenges.json file
with open('challenges.json', 'r') as f:
    challenges = json.load(f)

# Sum all expectedMinutes values
total_minutes = sum(challenge.get('expectedMinutes', 0) for challenge in challenges)

print(f"Total expected minutes: {total_minutes}")

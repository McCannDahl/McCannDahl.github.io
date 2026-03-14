# Waypoint Navigation Web App

Technical Requirements Document

## 1. Overview

Build a **mobile-first web application** that guides a user through a sequence of predetermined GPS waypoints.

The application displays an **arrow pointing toward the next waypoint**. When the user comes within a defined proximity of the waypoint, the system automatically advances to the next waypoint.

The app continues until the final waypoint (goal) is reached.

The application must persist progress locally so that **if the browser closes or the phone locks, the user resumes at the same waypoint when reopening the app**.

The application is intended to run entirely **client-side in a mobile browser**.

---

# 2. Primary User Story

**User Flow**

1. User opens the web application.
2. The app requests permission to access:

   * GPS location
   * device orientation / compass
3. The screen shows:

   * a large arrow pointing toward the next waypoint
   * distance to the waypoint
4. The arrow updates continuously as the user moves.
5. When the user enters the waypoint radius:

   * the app automatically advances to the next waypoint.
6. The arrow now points toward the next waypoint.
7. After the final waypoint is reached, the app displays a completion message.

If the user closes or refreshes the app, their **current waypoint index must persist**.

---

# 3. Technical Constraints

The application must:

* Run entirely in the **browser**
* Require **no backend server**
* Be implemented as a **single-page web application**
* Be optimized for **mobile devices**
* Work in **modern browsers supporting:**

  * Geolocation API
  * Device Orientation API
  * LocalStorage

Preferred stack:

```
HTML
CSS
Vanilla JavaScript
```

Do not use heavy frameworks unless necessary.

---

# 4. Waypoint System

Waypoints are defined as an **ordered list of GPS coordinates**.

Example:

```
waypoints = [
  { lat: 33.3493, lon: -96.5525 },
  { lat: 33.3498, lon: -96.5520 },
  { lat: 33.3503, lon: -96.5515 }
]
```

Rules:

* Waypoints must be followed **in order**
* Only **one active waypoint at a time**
* When reached, the index increments

---

# 5. Arrival Detection

Define a constant:

```
ARRIVAL_DISTANCE_METERS = 20
```

If:

```
distance(user_location, waypoint) <= ARRIVAL_DISTANCE_METERS
```

then the waypoint is considered **reached**.

The app must immediately:

```
currentWaypointIndex += 1
```

and persist the value.

---

# 6. Compass and Direction

The arrow must point toward the waypoint relative to the user's orientation.

The rotation logic:

```
rotation = waypoint_bearing - device_heading
```

Where:

**waypoint_bearing**
= compass bearing from user position to waypoint.

**device_heading**
= orientation of the phone in degrees.

The arrow should visually rotate using CSS transforms.

---

# 7. Distance Calculation

Use the **Haversine formula** to calculate distance between coordinates.

Inputs:

```
user_lat
user_lon
target_lat
target_lon
```

Output:

```
distance_in_meters
```

---

# 8. Bearing Calculation

Compute the compass bearing from the user's location to the waypoint.

Return value:

```
0° = North
90° = East
180° = South
270° = West
```

---

# 9. Location Tracking

Use:

```
navigator.geolocation.watchPosition()
```

Settings:

```
enableHighAccuracy = true
maximumAge = 0
timeout = 10000
```

The app must update:

* arrow direction
* distance display
* arrival detection

whenever a new position update occurs.

---

# 10. Device Orientation

Use:

```
deviceorientationabsolute
```

or fallback to:

```
deviceorientation
```

Extract:

```
heading (degrees)
```

This value represents the phone's compass direction.

---

# 11. Persistence

Progress must persist using:

```
localStorage
```

Store:

```
currentWaypointIndex
```

Behavior:

On page load:

```
if localStorage contains index:
    restore it
else:
    start at 0
```

---

# 12. User Interface

The UI should be minimal.

Screen elements:

### Arrow

A large arrow centered on the screen.

Example:

```
↑
```

The arrow must rotate smoothly toward the waypoint.

---

### Distance Display

Text showing:

```
Waypoint 2
Distance: 35 meters
```

---

### Completion Screen

When all waypoints are reached:

Display:

```
Goal Reached
```

The arrow should disappear.

---

# 13. Permissions Handling

If location permission is denied:

Display message:

```
Location permission is required.
```

If orientation permission is denied:

Display:

```
Compass access required for navigation.
```

---

# 14. Performance Requirements

The app should:

* update arrow smoothly
* respond to movement within ~1 second
* avoid excessive re-rendering

---

# 15. Mobile Behavior

The application must:

* fill the full screen
* be usable in portrait mode
* work when the phone screen turns off and on
* restore state after refresh

---

# 16. Optional Enhancements (Do Not Implement Unless Requested)

Potential future features:

* vibration on waypoint arrival
* sound cue on waypoint arrival
* map preview
* waypoint progress bar
* ability to reset progress
* waypoint loading from JSON file
* installable PWA

---

# 17. Expected Deliverable

Generate a working web app consisting of:

```
index.html
styles.css
script.js
```

The application must run by simply opening:

```
index.html
```

in a modern mobile browser.

No server or build tools should be required.


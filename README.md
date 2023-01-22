# websocket-remote-control

Remote control backend using Websocket, nutjs.dev & jimp libraries

## Downloading

```bash
git clone {repository URL}
git checkout develop
cd websocket-remote-control
```

## Installing

- front-end client
```bash
cd remote-control
npm install
```
- back-end server
```bash
cd remote-control-server
npm install
```

## Running

Use following commands:

- front-end client
```bash
cd remote-control
npm run start
```
- back-end server
```bash
cd remote-control-server
npm run start
```

Go to http://localhost:8181/ and reload if neccesary.

## Usage

List of websocket commands and their syntax (<- - cmd from frontend, -> - answer):

- Navigation over the x and y axis
  - Move mouse up
  ```bash
  <- mouse_up {y px}
  ```
  - Move mouse down
  ```bash
  <- mouse_down {y px}
  ```
  - Move mouse left
  ```bash
  <- mouse_left {x px}
  ```
  - Move mouse right
  ```bash
  <- mouse_right {x px}
  ```
  - Send mouse coordinates
  ```bash
  <- mouse_position
  -> mouse_position {x px},{y px}
  ```
- Drawing
  - Draw circle with pushed left button:
  ```bash
  <- draw_circle {px}
  ```
  - Draw rectangle with pushed left button:
  ```bash
  <- draw_rectangle {px} {px}
  ```
  - Draw square with pushed left button:
  ```bash
  <- draw_square {px}
  ```
- Print screen
  - Make print screen command and send image (a base64 buffer of the 200 px square around the mouse position):
  ```bash
  <- prnt_scrn
  -> prnt_scrn {base64 string (png buf)}
  ```
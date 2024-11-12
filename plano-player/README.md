# pianoplayer

## Learning Objectives

- HTML/CSS
- Responsive Design & Media Queries
- DOM Manipulation
- Browser Events
- Audio API
- File System API
- JSON Data Handling
- State Management
- User Interface Design
- Keyboard Events

## Abstract

In this project, you will create an interactive web application called `pianoplayer` that:

- Provides a virtual piano interface
- Allows real-time playing using keyboard/mouse
- Records and saves piano performances
- Plays back pre-recorded songs
- Supports importing/exporting performances as JSON

## Context

> The web browser is not just a document viewer - it's a powerful application platform.
>
> — Tim Berners-Lee

Modern web browsers provide powerful APIs that enable rich interactive experiences. The Piano Player project combines these capabilities to create a musical instrument that can both be played in real-time and automated through pre-recorded sequences.

The project consists of two main modes:

1. Interactive Mode:

   - Virtual piano keyboard that responds to mouse clicks and keyboard input
   - Real-time sound generation using the Web Audio API
   - Recording functionality to capture key presses and timing
   - Export recordings as JSON files for later playback

2. Prepared Mode:
   - Load and play pre-recorded piano sequences from JSON files
   - Visual indication of upcoming key presses
   - Support for both user-recorded files and pre-made songs
   - Playback controls (play, pause, stop, speed adjustment)

## Resources

- [MDN Web Audio API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Introduction to the File System Access API](https://web.dev/file-system-access/)
- [JavaScript Timing Events](https://www.w3schools.com/js/js_timing.asp)

## General Criteria

- Your HTML MUST be valid according to the W3C validator
- Your CSS MUST work on the latest versions of Chrome, Firefox, and Safari
- Your JavaScript MUST be clear and well-organized
- Your application MUST be responsive and work on both desktop and mobile devices
- The project MUST work when served from a local web server

## Mandatory Part

### Interactive Mode

The interactive mode allows users to play the piano in real-time.

Requirements:

- Display a piano keyboard with at least 2 octaves (24 keys)
- Support both mouse clicks and keyboard input
- Highlight keys when pressed
- Generate accurate piano sounds for each key
- Provide a recording feature that captures:
  - Which keys were pressed
  - Precise timing of each key press and release
- Allow downloading recordings as JSON files
- Show visual feedback during recording

```json
// Example recording JSON format
{
  "name": "My Song",
  "duration": 12500,
  "notes": [
    {
      "key": "C4",
      "startTime": 0,
      "duration": 500
    },
    {
      "key": "E4",
      "startTime": 500,
      "duration": 500
    }
  ]
}
```

### Prepared Mode

The prepared mode plays back pre-recorded sequences.

Requirements:

- Accept JSON files in the specified format
- Provide play, pause, and stop controls
- Show a progress indicator during playback
- Highlight keys as they should be pressed
- Support adjustable playback speed
- Display upcoming notes visually
- Allow switching between different loaded songs

### Visual Design

The application must have a polished and professional appearance:

- Clear distinction between black and white keys
- Visible key press animations
- Responsive layout that works on different screen sizes
- Intuitive controls and indicators
- Professional color scheme and typography
- Clear mode switching interface

### Audio Requirements

- Generate realistic piano sounds
- Support multiple simultaneous key presses
- Proper note release and decay
- No audio glitches or delays
- Volume control

## Bonus Features

- Support for sustain pedal
- Metronome functionality
- Different instrument sounds
- Musical notation display
- MIDI keyboard support
- Share recordings via URL

## Support

Start by breaking down the project into smaller components:

1. First, create the visual piano keyboard
2. Add basic sound generation
3. Implement keyboard/mouse input
4. Add recording functionality
5. Implement the JSON export/import
6. Create the playback system
7. Add visual effects and polish

Test each component thoroughly before moving to the next. Use console.log() to debug timing and event issues. If you get stuck, try creating a minimal example that reproduces the problem.

## Author

[Your Name]
[Contact Information]
[Social Media Links]
